import {createRequire} from 'module'

import dayjs from 'dayjs';

const require = createRequire(import.meta.url)

const {serve} = require('@upstash/workflow/express');  // upstash is not written in ES6 JS so we can't directly import it rather we have to use require

import Subscription from '../models/subscription.model.js';

const REMINDERS = [7,5,2,1]

export const sendReminders = serve(async(context) =>{
    const {subscriptionId} = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if(!subscription || subscription.status != "active")
    {
        return;
    }

    const renewalDate = dayjs(subscription.renewalDate)

    if(renewalDate.isBefore(dayjs()))
    {
        console.log(`Rnewal date has passed for subscripton ${subscriptionId}. Stopping Workflow`);
        return;
    }

    for(const daysBefore of REMINDERS)
    {
        const reminderDate = renewalDate.subtract(daysBefore, 'day')

        if(reminderDate.isAfter(dayjs()))
        {
            await sleepUntilReminder(context, `Reminder ${daysBefore} days Before`, reminderDate)
        }

        await triggerReminder(context, `Reminder ${daysBefore} days before`)
    }
});

const fetchSubscription = async(context, subscriptionId)=>{
    return await context.run('get subscription', async() =>{
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
}

const sleepUntilReminder = async(context, label, date) =>{
    console.log(`Sleeping until ${label} reminder at ${date}`);
    await context.sleepUntil(label, date.toDate());
}

const triggerReminder = async(context, label) =>{
    return await context.run(label, ()=>{
        console.log(`Trigerring ${label} reminder`);

        //Send email, SMS, push notification
    })
}
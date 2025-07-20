import { workflowClient } from "../config/upstash.js";
import Subscription from "../models/subscription.model.js";
import { SERVER_URL } from '../config/env.js';  // Adjust the path as per your project structure
export const createsSubscription = async(req, res, next) => {

    try{
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id, 
        })

        const workflowResponse = await workflowClient.trigger({
        url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
        body: {
            subscriptionId: subscription.id,
        },
        });

        res.status(201).json({
        success: true,
        data: subscription,
        workflowRun: workflowResponse,  // send full response or extract run ID if available
        });
        
    }
    catch(e)
    {
        next(e);
    }

}


export const getUserSubscription = async(req, res, next) =>{
    try{
        if(req.user.id != req.params.id)
        {
            const error = new Error("You are not the owner of this account");
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({user: req.params.id});

        res.status(200).json({success: true, data: subscriptions});
    }
    catch(e)
    {
        next(e)
    }
}
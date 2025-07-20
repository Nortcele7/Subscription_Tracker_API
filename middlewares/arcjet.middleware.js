import aj from "../config/arcjet.js";

const arcjetMiddleware = async(req, res, next) => {

    try{

        const decision = await aj.protect(req, {requested: 1}) // requested:1 This is a parameter for tokenBucket which indicated that 1 token will be decucted after each request

        if(decision.isDenied())
        {
            if(decision.reason.isRateLimit()) // This is for rate limit
            {
                return res.status(429).json({error: "Rate limit exceeded"})
            }

            if(decision.reason.isBot()) // This is for bot detection
            {
                return res.status(429).json({error: "Bot is detected"})
            }

            return res.status(403).json({error: "Access Denied"})
        }

        next();


    }catch(error)
    {
        console.log(`Arcjet Middleware Error: ${error}`)
    }

}


export default arcjetMiddleware
import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log("\n===== Incoming Request =====\n");
    console.log(`${new Date()}`);
    console.log(`${req.method} ${req.url}`);
    console.log(`body ${JSON.stringify(req.body)}`);
    console.log("\n============================\n");
    next();
};

export default logger;

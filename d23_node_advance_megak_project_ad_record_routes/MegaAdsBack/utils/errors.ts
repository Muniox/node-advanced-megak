import { NextFunction, Request, Response } from "express";

export class ValidationExpressError extends Error {}

export  const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);

    res
        .status(err instanceof ValidationExpressError ? 400 : 500)
        .json({
            message: err instanceof ValidationExpressError ? err.message : 'Sorry, please try again later.',
        });
};
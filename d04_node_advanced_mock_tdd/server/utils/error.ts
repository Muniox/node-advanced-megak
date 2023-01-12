import {ErrorRequestHandler, Request, Response, NextFunction} from "express"
export class ValidationError extends Error {}


export const handleError = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    // if (err instanceof NotFoundError) {
    //     res
    //         .status(404)
    //         .render('error', {
    //             message: 'Nie można znaleść elementu o danym ID'
    //         });
    // return;
    // }

    console.error(err);

    res
        .status(err instanceof ValidationError ? 404 : 500)
        .json({
            message: err instanceof ValidationError ? err.message : 'Sorry, please try again letter...',
        });
};


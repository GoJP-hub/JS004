const logger = require("./baseLogService").appLog;

export function appLogging(option?: any) {
    return function (err: any, req: any, res: any, next: any) {
        logger.error(err.message);
        next(err);
    }
}

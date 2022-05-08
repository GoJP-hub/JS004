import * as Log4js from "log4js";
const logConfig = require("../config/log4js.config.js")

export class Logger {
    public static initialize(){
        Log4js.configure(<Log4js.Configuration>logConfig)
    }

    public static accessLog(type: string, message: string): void{
        let logger = Log4js.getLogger("access");
        switch (type) {
            case "INFO":
                logger.info(message);
                break;
            case "WARN":
                logger.warn(message);
                break;
            case "ERROR":
                logger.error(message);
                break;
            default:
                // エラー出力方法の検討が必要
                console.log("未対応のログ種別");
                break;
        }
    };

    public static systemLog(type: string, message: string): void{
        let logger = Log4js.getLogger("system");
        switch (type) {
            case "INFO":
                logger.info(message);
                break;
            case "WARN":
                logger.warn(message);
                break;
            case "ERROR":
                logger.error(message);
                break;
            default:
                // エラー出力方法の検討が必要
                logger.error(`未対応のログレベル設定： ${type}`);
                break;
        }
    };

    public static errorLog(type: string, message: string): void{
        let logger = Log4js.getLogger("error");
        logger.error(message);
    };
    
}
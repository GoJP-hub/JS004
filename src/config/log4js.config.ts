import path from "path";
const LOG_ROOT_DIR = process.env.LOG_ROOT_DIR || path.join(__dirname, "../logs");

export const loggerConfig: object = { 
    appenders:{
        ConsoleLogAppender: { type: "console" },
        AppLogAppender: {
            type: 'dateFile',
            filename: path.join(LOG_ROOT_DIR, "./application.log"),
            pattern: ".yyyyMMdd",
            keepFileExt: true,
            daysToKeep: 7
        }
    },
    categories:{
        "default": {
            appenders: ["ConsoleLogAppender"],
            level: "ALL"
        },
        "app": {
            appenders: ["ConsoleLogAppender", "AppLogAppender"],
            level: "INFO"
        }
    }
}
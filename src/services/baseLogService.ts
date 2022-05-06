import { application } from "express";
import log4js from "log4js";
const config = require("../config/log4js.config").loggerConfig
let consoleLog, appLog;

log4js.configure(config);

consoleLog = log4js.getLogger();
appLog = log4js.getLogger("app");

export {consoleLog, appLog};
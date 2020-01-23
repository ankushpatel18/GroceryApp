import { LoggingLevel } from './types';

export default class Log {

    static e(TAG: string, message: string, logToServer: Boolean = true) {
        this._log(TAG, message, LoggingLevel.ERROR, logToServer);
    }

    static d(TAG: string, message: string, logToServer: Boolean = true) {
        this._log(TAG, message, LoggingLevel.DEBUG, logToServer);
    }

    static i(TAG: string, message: string, logToServer: Boolean = true) {
        this._log(TAG, message, LoggingLevel.INFO, logToServer);
    }

    static w(TAG: string, message: string, logToServer: Boolean = true) {
        this._log(TAG, message, LoggingLevel.WARNING, logToServer);
    }

    static v(TAG: string, message: string, logToServer: Boolean = true) {
        this._log(TAG, message, LoggingLevel.VERBOSE, logToServer);
    }

    static _getSeverity(level) {
        switch (level) {
            case LoggingLevel.ERROR: return 'E';
            case LoggingLevel.DEBUG: return 'D';
            case LoggingLevel.INFO: return 'I';
            case LoggingLevel.VERBOSE: return 'V';
            default: return 'W';
        }
    }

    /**
     * @summary Logs messages of execution flow.
     * @description Funtion to log messages with tags and severity level to Log window and conditionally to realm as well
     * to be exported to file and sent to server.
     * @param TAG Should specify the Component or function in case of module system where log happened.
     * @param message Descriptive message to be logged.
     * @param level Specifies the severity of log should be one of LoggingLevel enums [ERROR = 0, INFO = 1, WARNING = 2, VERBOSE = 3, DEBUG = 4].
     * Defaults to LoggingLevel.INFO
     * @param logToServer Boolean specifying wether this log gets into realm or not. Defaults to true
     */

    static _log(TAG: string, message: string, level: LoggingLevel = LoggingLevel.INFO, logToServer: Boolean = true) {
        const time_stamp = new Date();
        const severity = this._getSeverity(level);
            console.log(`### ${time_stamp} : ${severity} ${TAG}: ${message}`);

    
    }
}
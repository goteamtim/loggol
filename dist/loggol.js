"use strict";
var loggol = /** @class */ (function () {
    function loggol() {
        //Private variables
        this.loggingLevel = 0;
    }
    //Public
    /**
     * Log function that logs a value.
     * @constructor
     * @param {Object} value - The value to display in the console.
     * @param {number} logLevel - The logging threshold.  If the logging level is set to logLevel the function will execute.
     */
    loggol.prototype.log = function (value, logLevel) {
        if (this.loggingLevel == logLevel) {
            console.log("LOGGOL>>> ", value);
        }
        else { }
        ;
    };
    /**
     * Log function with value and descriptor option.
     * @constructor
     * @param {Object} value - The value to display in the console.
     * @param {string} descriptor - Description of the data being output.
     * @param {number} logLevel - The logging threshold.  If the logging level is set to logLevel the function will execute.
     */
    loggol.prototype.log = function (value, descriptor, logLevel) {
        this.loggingLevel == logLevel ? console.log("LOGGOL>>>" + descriptor + ">>>", value) : 1;
    };
    /**
     * Get the status of the log level.
     * @function
     * @param {Object} value - The value to display in the console.
     * @param {string} descriptor - Description of the data being output.
     * @param {number} logLevel - The logging threshold.  If the logging level is set to logLevel the function will execute.
     */
    loggol.prototype.LoggingStatus = function (loggingStatus) {
        switch (loggingStatus) {
            case 0:
            case 1:
                console.log("LOGGOL_STATUS>>> Logging level " + Object.keys(this.LEVELS)[loggingStatus] + " enabled. <<<SUTATS_LOGGOL");
                break;
            default:
                console.log("LOGGOL_STATUS>>> logging status: " + loggingStatus + "\n Not a valid status.\nLOGGOL_STATUS>>>");
                break;
        }
    };
    loggol.prototype.setup = function (status) {
        //this.loggingStatus
    };
    return loggol;
}());
;
module.exports = loggol;

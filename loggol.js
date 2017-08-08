var log = (function(){
    //Private variables
    let loggingLevel = true;
    //Public
    return {
        /**
         * Log function that logs a value.
         * @constructor
         * @param {Object} value - The value to display in the console.
         * @param {number} logLevel - The logging threshold.  If the logging level is set to logLevel the function will execute.
         */
        log: function(value,logLevel){
            loggingLevel == logLevel ? console.log("LOGGOL>>> ", value) : return;
        },
        /**
         * Log function with value and descriptor option.
         * @constructor
         * @param {Object} value - The value to display in the console.
         * @param {string} descriptor - Description of the data being output.
         * @param {number} logLevel - The logging threshold.  If the logging level is set to logLevel the function will execute.
         */
        log: function(value,descriptor,logLevel){
            loggingLevel == logLevel ? console.log("LOGGOL>>>" + descriptor + ">>>", value) : return;
        },
        /**
         * Get the status of the log level.
         * @function
         * @param {Object} value - The value to display in the console.
         * @param {string} descriptor - Description of the data being output.
         * @param {number} logLevel - The logging threshold.  If the logging level is set to logLevel the function will execute.
         */
        LoggingStatus: function(loggingStatus){
            switch (loggingStatus) {
                case 0:
                case 1:
                    console.log("LOGGOL_STATUS>>> Logging level " + Object.keys(this.LEVELS)[loggingStatus] + " enabled. <<<SUTATS_LOGGOL");
                    break;
            
                default:
                    console.log("LOGGOL_STATUS>>> logging status: " + loggingStatus + "\n Not a valid status.\nLOGGOL_STATUS>>>");
                    break;
            }
        },
        LEVELS:{
            ALL: 0,
            NETWORK: 1 
        }
    }
}());

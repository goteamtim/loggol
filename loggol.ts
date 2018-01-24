class loggol {
    //Private variables
    private loggingLevel = 0;
    //Public
        /**
         * Log function that logs a value.
         * @constructor
         * @param {Object} value - The value to display in the console.
         * @param {number} logLevel - The logging threshold.  If the logging level is set to logLevel the function will execute.
         */
        log( value, logLevel ) :void {
            if(this.loggingLevel == logLevel){
                console.log("LOGGOL>>> ", value) 
            }else{  };
        }
        /**
         * Log function with value and descriptor option.
         * @constructor
         * @param {Object} value - The value to display in the console.
         * @param {string} descriptor - Description of the data being output.
         * @param {number} logLevel - The logging threshold.  If the logging level is set to logLevel the function will execute.
         */
        log(value,descriptor,logLevel): void{
            this.loggingLevel == logLevel ? console.log("LOGGOL>>>" + descriptor + ">>>", value) : 1;
        }
        /**
         * Get the status of the log level.
         * @function
         * @param {Object} value - The value to display in the console.
         * @param {string} descriptor - Description of the data being output.
         * @param {number} logLevel - The logging threshold.  If the logging level is set to logLevel the function will execute.
         */
        LoggingStatus(loggingStatus): void{
            switch (loggingStatus) {
                case 0:
                case 1:
                    console.log("LOGGOL_STATUS>>> Logging level " + Object.keys(this.LEVELS)[loggingStatus] + " enabled. <<<SUTATS_LOGGOL");
                    break;
            
                default:
                    console.log("LOGGOL_STATUS>>> logging status: " + loggingStatus + "\n Not a valid status.\nLOGGOL_STATUS>>>");
                    break;
            }
        }

        setup(status): void{
            //this.loggingStatus
        }
        
        LEVELS:{
            ALL: 0,
            NETWORK: 1 
        }
};

export = loggol;
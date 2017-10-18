module.exports = function(){
    //Private variables
    let showLogging = true;
    //Public
    return {
        log: function(value){
            showLogging ? console.log("LOGGOL>>> " + value) : 1;
        },
        setLogging: function(status){
            if(typeof(status) != bool){
                console.log("LOGGOL_ERROR>>> LoggingEnabled needs to be called with a bool not a " + typeof(status));
                return;
        }
            if(status){
                showLogging = true;
                console.log("LOGGOL_STATUS>>> Logging Enabled <<<SUTATS_LOGGOL");
            }else{
                showLogging = false;
                console.log("LOGGOL_STATUS>>> Logging Disabled <<<SUTATS_LOGGOL");
            }
        }
    };
};

/* module to countdown time */

var TimerCountdown = (function(timer) {
 
      var timeInSeconds;											/* value of seconds */
      
	  /* function to countdown time from initial value */
      timer.countdownFromInitialValue = function () {

    	  timeInSeconds = $('#countdownValue').html();				/* get the value of seconds to be countdown */
    	  timeInSeconds = parseInt(timeInSeconds, 10);				/* parse to number in decimal format */
    	   
    	  if (timeInSeconds == 1) {									/* check if time to be countdown is only 1 second */
    		  $('#countdownValue').html("0");						/* show 0 */
    		  navigator.vibrate(2000);								/* use device native functionality - vibration, vibrate for 2 seconds */
    		  return;												/* countdown is end */
    	  }
    	  else {
        	  timeInSeconds--;										/* decrement time */
    	      $('#countdownValue').html(timeInSeconds); 			/* show time */
    	      setTimeout(timer.countdownFromInitialValue, 1000);   	/* call this function after 1 second */	  
    	  }
    	  
      	} ;      


	  /* function to countdown time for random activity */
        timer.countdownForRandomActivity = function () {

      	  timeInSeconds = $('#countdownTimeRandomActivity').html();
      	  timeInSeconds = parseInt(timeInSeconds, 10);
      	   
      	  if (timeInSeconds == 1) {
      		  $('#countdownTimeRandomActivity').html("0");
      		  navigator.vibrate(2000);
      		  return;
      	  }
      	  else {
          	  timeInSeconds--;
      	      $('#countdownTimeRandomActivity').html(timeInSeconds); 
      	      setTimeout(timer.countdownForRandomActivity, 1000);   		  
      	  }
      	  
        }; 
		

    return timer;

})(TimerCountdown || {});
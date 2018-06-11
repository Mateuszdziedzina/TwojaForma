var TimerCountdown = (function(timer) {
 
      var timeInSeconds;
      
      timer.countdownFromInitialValue = function () {

    	  timeInSeconds = $('#countdownValue').html();
    	  timeInSeconds = parseInt(timeInSeconds, 10);
    	   
    	  if (timeInSeconds == 1) {
    		  $('#countdownValue').html("0");
    		  navigator.vibrate(2000);
    		  return;
    	  }
    	  else {
        	  timeInSeconds--;
    	      $('#countdownValue').html(timeInSeconds); 
    	      setTimeout(timer.countdownFromInitialValue, 1000);   		  
    	  }
    	  
      	} ;      



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
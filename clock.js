$(function() {
	// element variables
	var second = document.getElementById("second");
	var minute = document.getElementById("minute");
	var hour = document.getElementById("hour");

	// time variables
	var now = new Date();

	var currentMins = now.getMinutes();
	var currentSeconds = now.getSeconds();
	var currentMinutes = now.getMinutes();
	var currentHours = now.getHours();
	var starthour;
	console.log(currentHours);

	// seconds!!!!!
	var secondMoveHand = function(seconds){
		var secondSpeed = ((seconds/60) * 360);
		second.style.transform = "rotate(" + secondSpeed + "deg)";
		// console.log(currentSeconds%60);

	}

	var secondDegrees = function() {
		currentSeconds++;
		secondMoveHand(currentSeconds);
	}

	secondMoveHand(currentSeconds);
	var startSecond = setInterval(secondDegrees, 1000);

	//  minutes!!!!

	// var minutesMoveHand = function(minutes){
	// 	var minutesSpeed = ((minutes/60) * 360);
	// 	minute.style.transform = "rotate(" + minutesSpeed + "deg)";
	// }

	var minutesMoveHand = function(minutes){
		var minutesSpeed = ((minutes/60) * 360);
 		minute.style.transform = "rotate(" + minutesSpeed + "deg)";
			if (currentMinutes%60 == 0) {
				hoursAlign();
			}
	} 

	function minutesAlign() {
		currentMinutes++
		hourMoveHand(currentMinutes);
	}

	var minutesDegrees = function() {
		currentMinutes++
		minutesMoveHand(currentMinutes);
	
	}

	minutesMoveHand(currentMinutes);
	var startMinutes = setInterval(minutesDegrees, 60000);
	
	// hours !!!!!!

	var hourMoveHand = function(hours){
		var hourSpeed = ((hours) * 30);
		hour.style.transform = "rotate(" + hourSpeed + "deg)";
	}

	function hoursAlign() {
		currentHours++
		hourMoveHand(currentHours);
	}

	hourMoveHand(currentHours);

});
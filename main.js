$(document).ready(function(){


	// Runs the function every second to see time changing
	var theSeconds = setInterval(function(){time() }, 1000);

	//Every hour the color of the letters will change
	var theHours = setInterval(function(){colorChange()}, 3600000);

	//Every minute the color of the background will change depending on whether the minute is even or odd
	var evenOdd = setInterval(function(){everyMinute()}, 1000);

	//Every five minutes the color of the background will change
	var fiveMinutes = setInterval(function(){backgroundChange()}, 300000);


	// To display the clock
	function time(){
		var date = new Date();

		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		
		var timer = date.toLocaleTimeString();
		
		document.getElementById('clock').innerHTML = timer;
	}

	//Every minute the color of the background changes if the minute is odd or even
	function everyMinute(){

		var date = new Date();
		var minutes = date.getMinutes();

	 	if(minutes % 2 === 0){
			document.body.style.background = '#124384';
		} 
		else {
				document.body.style.background = '#000';
		}
	}

	// Changes the background to a random color every 5 minutes
	function backgroundChange(){
		var color = Math.floor(Math.random()*16777215).toString(16);

		document.body.style.background = '#'+color;
	}

	// Changes text color to a random color every hour
	function colorChange(){

		var colorArray = ['blue','red','yellow','green','salmon','deepskyblue', 'cyan', 'aquamarine'];
		var colorChoose = Math.floor(Math.random()*colorArray.length);

		document.getElementById('clock').style.color = colorArray[colorChoose];
		console.log('hi');
	}
	


});

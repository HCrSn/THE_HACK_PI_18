$(document).ready(function(){
	$.ajax({
		type: 'POST',
		data: null,
	    contentType: 'application/json',
        url: 'http://cefe4d53.ngrok.io/getinfo',						
        success: function(data) {
        	var subject = data.subj;
        	var method = data.method;
        	var show = subject + method;
        	$("#exampleInputEmail1").val(show);

        }
    });

    $("#btn1").click(function(){

    	var time = $("#exampleInputEmail2").val();
    	var correctness = $("#exampleInputEmail3").val();
    	var energy = $("#exampleInputEmail4").val();
    	var msg = $("#exampleInputEmail5").val();
    	var info = {
    		time : time,
    		correctness : correctness,
    		energy : energy,
    		msg : msg
    	};

    	console.log(info);

    	$.ajax({
		type: 'POST',
		data: JSON.stringify(info),
	    contentType: 'application/json',
        url: 'http://cefe4d53.ngrok.io/info',						
        success: function(data) {
       		window.location.href="http://cefe4d53.ngrok.io/pages/sliderBar/sliderBar.html";
       		}
    	
    	});
    });
});
		
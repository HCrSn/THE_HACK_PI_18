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

    $(#btn1).click(function(){
    	time = $("#exampleInputEmail2").val();
    	correctness = $("#exampleInputEmail3").val();
    	energy = $("#exampleInputEmail4").val();
    	msg = $("#exampleInputEmail5").val();
    	info = {
    		time : time,
    		correctness : correctness,
    		energy : energy,
    		msg : msg,
    	}
    	$.ajax({
		type: 'POST',
		data: info,
	    contentType: 'application/json',
        url: 'http://cefe4d53.ngrok.io/info',						
        success: function(data) {
       		window.location.href="http://cefe4d53.ngrok.io/pages/sliderBar/sliderBar.html";
       		}
    	
    	});
		});
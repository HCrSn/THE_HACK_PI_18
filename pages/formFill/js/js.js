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
});
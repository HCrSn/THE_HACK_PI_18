function custom_opt(number,option){
	var obj = "<option value='" + number + "'>" + option + "</option>";
	return obj;
};


$(document).ready(function(){ 
	$('#inputGroupSelect01').change(function(){ 
		var selected = $(this).children('option:selected').val(); 
		if (selected == 1) {
			$("#inputGroupSelect02").empty();
			$("#inputGroupSelect02").append(custom_opt(1,"背诵古诗"));
			$("#inputGroupSelect02").append(custom_opt(2,"阅读理解"));
			$("#inputGroupSelect02").append(custom_opt(3,"作文"));
		};
		if (selected == 2) {
			$("#inputGroupSelect02").empty();
			$("#inputGroupSelect02").append(custom_opt(1,"英语1"));
			$("#inputGroupSelect02").append(custom_opt(2,"英语2"));
			$("#inputGroupSelect02").append(custom_opt(3,"英语3"));
		};
		if (selected == 3) {
			$("#inputGroupSelect02").empty();
			$("#inputGroupSelect02").append(custom_opt(1,"数学1"));
			$("#inputGroupSelect02").append(custom_opt(2,"数学2"));
			$("#inputGroupSelect02").append(custom_opt(3,"数学3"));
		};
	}); 

	$("#button-send").click(function(){
		var val1 = $("#inputGroupSelect01").children('option:selected').val();
		var val2 = $("#inputGroupSelect02").children('option:selected').val();
		if (val1 == 0 || val2 == 0) {
			alert("请选择");
		}else{
                
				var data = {};
				data.choice1 = val1;
				data.choice2 = val2;

				console.log(data);
					
				$.ajax({
					type: 'POST',
					data: JSON.stringify(data),
				    contentType: 'application/json',
                    url: 'http://cefe4d53.ngrok.io/endpoint',						
                    success: function(data) {
                    	window.location.href="http://cefe4d53.ngrok.io/pages/clock/clock-page.html";
                    }
                });
			
		}
	});
});


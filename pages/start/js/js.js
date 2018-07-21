function custom_opt(number,option){
	var obj = "<option value='" + number + "'>" + option + "</option>";
	return obj;
};

$(document).ready(function(){ 
	$('#inputGroupSelect01').change(function(){ 
		var selected = $(this).children('option:selected').val(); 
		if (selected == 1) {
			$("#inputGroupSelect02").empty();
			$("#inputGroupSelect02").append(custom_opt(1,"语文1"));
			$("#inputGroupSelect02").append(custom_opt(2,"语文2"));
			$("#inputGroupSelect02").append(custom_opt(3,"语文3"));
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
});


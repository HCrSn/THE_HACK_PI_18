$(document).ready(function(){
	$("#btn2").click(function(){
		var name = $("#email").val();
		var passw = $("#password").val();
		var passwr = $("#passwordR").val();
		if (passw != passwr) {
			alert("stupid");
		}else{
			var data = {};
				data.name = name;
				data.pass = passw;

				console.log(data);
					
				$.ajax({
					type: 'POST',
					data: JSON.stringify(data),
				    contentType: 'application/json',
                    url: 'http://localhost:3000/register',						
                    success: function(data) {
                       console.log('success');
                       console.log(JSON.stringify(data));
                    }
                });
		}
	})
});
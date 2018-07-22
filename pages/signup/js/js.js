$(document).ready(function(){
	$("#btn2").click(function(){
		var name = $("#email").val();
		var passw = $("#password").val();
		var passwr = $("#passwordR").val();
		if (passw != passwr) {
			alert("密码不一致");
		}else{
			var data = {};
				data.name = name;
				data.pass = passw;

				console.log(data);
				if (name.trim() == '' || passw.trim() == '') {
					alert("用户名或密码不能为空")
				}else{
					$.ajax({
					type: 'POST',
					data: JSON.stringify(data),
				    contentType: 'application/json',
                    url: 'http://cefe4d53.ngrok.io/register',						
                    success: function(data) {
                       if (data == 'stupid') {
                       	alert("UserExisted");
                       }else{
                       	window.location.href="http://cefe4d53.ngrok.io/pages/start/start.html";
                       }
                    }
                });
				}
				
		}
	})
});
(function(){
	'use strict';
	document.addEventListener('DOMContentLoaded', function(){



		/* Registration-page */
		try {
			var name = document.getElementById("name");
			name.addEventListener('blur',check_content);
			var password = document.getElementById("password");
			password.addEventListener('blur',check_content);
			var email = document.getElementById("email");
			email.addEventListener('blur',check_email);
		} catch (e) {
			console.warn("registration script does not work")
		}

		

		function check_content(){
			let error = document.getElementById("error");
			if(this.value=="")
			{
				
				
				alert('Empty field: you should complete this field');
				/*this.style.borderColor = "red";*/
			}
			else
			{
				error.innerHTML = "";
			}
		}

		function check_email(){
			let error = document.getElementById("error");
			if(this.value.indexOf("@") == -1)
			{

				alert('Email must have @ character');
			}
			else
			{
				error.innerHTML = "";
			}
		}
	});
})();

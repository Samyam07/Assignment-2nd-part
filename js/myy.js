function validateForm(){
	var Confirmpassword=document.login.Confirmpassword.value;
	var password=document.login.password.value;

		if(password==" " && Confirmpassword==" "){
			document.getElementById("error").innerHTML="Password required";
			document.login.password.focus();
			return false;
		}
		else if(password==" "){
			document.getElementById("error").innerHTML="Password required";
			document.login.password.focus();
			return false;
		}
		else if(Confirmpassword==""){
			document.getElementById("error").innerHTML="Password required";
			document.login.password.focus();
			return false;
		}else if(password!=Confirmpassword){
			document.getElementById("error").innerHTML="Password doesn't match.";
			document.login.password.focus();
			return false;
		}
		else{
			return true;
		}
}
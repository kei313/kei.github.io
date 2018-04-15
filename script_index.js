window.onload = function(){
	document.getElementById('sub').onclick = function(){
		if(document.getElementById('ID').value == "" || document.getElementById('ID').value == ""){
			window.alert("Please Complete Info Details");
		}else if(document.getElementById('ID').value !== "14-0443-41"){
			window.alert("Invalid User");
		}else if(document.getElementById('Pass').value !== "kyle13"){
			window.alert("Please Complete Info Details");
		}else{
			window.location.href = 'main.html';
		}
	}
}
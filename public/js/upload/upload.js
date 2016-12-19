window.onload = function(){
	var up_cancel = document.getElementById("up_cancel");
	var up_confirm = document.getElementById("up_confirm");
	var up_can = document.getElementById("up_can");
	var up_kua = document.getElementById("up_kua");
	var ensure = document.getElementById("ensure");

	up_cancel.onclick = function(){
		up_kua.style.display = "block";
	}
	up_can.onclick = function(){
		up_kua.style.display = "none";
	}
	up_confirm.onclick = function(){
		ensure.style.display = "block";
	}
}
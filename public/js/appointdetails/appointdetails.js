window.onload = function(){
	var btn = document.getElementById("wipe_btn");
	var wipe = document.getElementById("wipe_appo");
	var cancel = document.getElementById("cancel");
	var confirm = document.getElementById("confirm");
	btn.onclick = function(){
		wipe.style.display = "block";
	}
	cancel.onclick = function(){
		wipe.style.display = "none";
	}
	confirm.onclick = function(){
		wipe.style.display = "none";
	}
}
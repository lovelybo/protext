window.onload = function(){
	var btn = document.getElementById("wipe_btn");
	var wipe = document.getElementById("wipe_appo");
	var cancel1 = document.getElementById("cancel1");
	var confirm1 = document.getElementById("confirm1");
	var time = document.getElementById("time");
	var confirm2 = document.getElementById("confirm2");
	var change = document.getElementById("change");
	var ensure = document.getElementById("ensure");

	btn.onclick = function(){
		wipe.style.display = "block";
	}
	cancel1.onclick = function(){
		wipe.style.display = "none";
	}
	confirm1.onclick = function(){
		wipe.style.display = "none";
	}
	confirm2.onclick = function(){
		time.style.display = "none";
	}
	change.onclick = function(){
		ensure.style.display = "block";
	}
}
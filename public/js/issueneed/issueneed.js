window.onload = function(){
	var cancel = document.getElementById("cancel");
	var issned_zhe = document.getElementById("issned_zhe");
	var iss_can = document.getElementById("iss_can");
	var issue = document.getElementById("issue");
	var iss_succ = document.getElementById("iss_succ");
	var issue_all = document.getElementById("issue_all");
	
	cancel.onclick = function(){
		issned_zhe.style.display = "block";
	}
	iss_can.onclick = function(){
		issned_zhe.style.display = "none";
	}
	issue.onclick = function(){
		iss_succ.style.display = "block";
		issue_all.style.display = "none";
	}
}

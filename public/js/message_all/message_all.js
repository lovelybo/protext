window.onload = function(){
	var message = document.getElementById("message");
	var notice = document.getElementById("notice");
	var need = document.getElementById("need");
	var message_one = document.getElementById("message_one");
	var notice_all = document.getElementById("notice_all");
	var need_all = document.getElementById("need_all");
	var mes_col = document.getElementsByClassName("mes_col");
	
	message.onclick = function(){
		message.setAttribute("style","color:#FFF;background:#EA5404;");
		notice.setAttribute("class","notice");
		notice.removeAttribute("style","color:#FFF;background:#EA5404;");
		need.setAttribute("class","need");
		need.removeAttribute("style","color:#FFF;background:#EA5404;");
		message_one.style.display = "block";
		notice_all.style.display = "none";
		need_all.style.display = "none";
	}
	notice.onclick = function(){
		notice.setAttribute("style","color:#FFF;background:#EA5404;");
		message.setAttribute("class","message");
		message.removeAttribute("style","color:#FFF;background:#EA5404;");
		need.setAttribute("class","need");
		need.removeAttribute("style","color:#FFF;background:#EA5404;");
		message_one.style.display = "none";
		notice_all.style.display = "block";
		need_all.style.display = "none";
	}
	need.onclick = function(){
		need.setAttribute("style","color:#FFF;background:#EA5404;");
		message.setAttribute("class","message");
		message.removeAttribute("style","color:#FFF;background:#EA5404;");
		notice.setAttribute("class","notice");
		notice.removeAttribute("style","color:#FFF;background:#EA5404;");
		message_one.style.display = "none";
		notice_all.style.display = "none";
		need_all.style.display = "block";
	}
}

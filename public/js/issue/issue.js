window.onload = function(){
	var iss_cancel = document.getElementById("iss_cancel");
	var iss_zhe = document.getElementById("iss_zhe");
	var iss_can = document.getElementById("iss_can");
	var ind_search = document.getElementById("ind_search_wor");
	var search_x = document.getElementById("search_x");
	var dian_all = document.getElementsByClassName("dian_all");
	var ii = document.getElementsByTagName("i");
	var cho_sel = document.getElementById("cho_sel");
	var cho_sel_menu = document.getElementById("cho_sel_menu");
	var iss_btn = document.getElementById("iss_btn_one");
	var iss_succ = document.getElementById("iss_succ");
	var li = document.getElementsByTagName("li");
	var radio_on = document.getElementById("radio_on");
	var radio_one = document.getElementById("radio_one");
	var radio_tw = document.getElementById("radio_tw");
	var radio_two = document.getElementById("radio_two");
	var radio_th = document.getElementById("radio_th");
	var cho_short_ss = document.getElementById("cho_short_ss");
	var radio_three = document.getElementById("radio_three");
	iss_cancel.onclick = function(){
		iss_zhe.style.display = "block";
	}
	iss_can.onclick = function(){
		iss_zhe.style.display = "none";
	}
	ind_search.onfocus = function(){
		search_x.style.display = "block";
	}
	ind_search.onblur = function(){
		search_x.style.display = "none";
	}
	for(var i=0;i<dian_all.length;i++){
		dian_all[i].index=i;
		dian_all[i].onclick=function(){
			for(var i=0;i<dian_all.length;i++){
				ii[i].removeAttribute("class","dian_one");
			}
			ii[this.index].setAttribute("class","dian_one");
		}
	}
	var f = true;
		cho_sel.onclick = function(){
			/*cho_sel_menu.style.display = "block";*/
		if(f){
			cho_sel_menu.style.display = "block";
			f = false;
			console.log(1)
		}else{
			cho_sel_menu.style.display = "none";
			f = true;
			console.log(2)
			
		}
		}

	for(var i = 0;i< li.length;i++){
			//console.log( li.length);
			li[i].onclick = function(e){
				//console.log(li[i]);
				console.log(this.innerHTML);
			cho_short_ss.innerHTML = this.innerHTML;
			}	
		}
	radio_on.onclick = function(){
		/*cho_sel_menu.style.display = "block";*/
		if(f){
			radio_one.style.display = "block";
			f = false;
		}else{
			radio_one.style.display = "none";
			f = true;
		}
	}
	radio_tw.onclick = function(){
		/*cho_sel_menu.style.display = "block";*/
		if(f){
			radio_two.style.display = "block";
			f = false;
		}else{
			radio_two.style.display = "none";
			f = true;
		}
	}
	radio_th.onclick = function(){
		/*cho_sel_menu.style.display = "block";*/
		if(f){
			radio_three.style.display = "block";
			f = false;
		}else{
			radio_three.style.display = "none";
			f = true;
		}
	}
	iss_btn.onclick = function(){
		iss_succ.style.display = "block";
	}
}

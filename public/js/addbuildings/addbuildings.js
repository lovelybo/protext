window.onload = function(){
	var building = document.getElementById("building");
	var address = document.getElementById("address");
	var add_all = document.getElementById("add_all");
	var add_zhe = document.getElementById("add_zhe");
	var add_btn = document.getElementById("add_btn");
	
	building.onblur = function(){
		//console.log(building.value);
		if(building.value == ""){
			building.style.background = "#FFC0CB";
		}else{
			building.style.background = "#FFF";	
		}
		console.log(building.value != "" && address.value != "");
		if(building.value != "" && address.value != ""){
		/*console.log(building.value != "" && address.value != "");*/
		add_btn.onclick = function(){
			add_all.style.display = "none";
			add_zhe.style.display = "block";
		}
	}
	}
	address.onblur = function(){
		//console.log(address.value);
		if(address.value == ""){
			address.style.background = "#FFC0CB";
		}else{
			address.style.background = "#FFF";
		}
		console.log(building.value != "" && address.value != "");
		if(building.value != "" && address.value != ""){
		/*console.log(building.value != "" && address.value != "");*/
		add_btn.onclick = function(){
			add_all.style.display = "none";
			add_zhe.style.display = "block";
		}
	}
	}
}

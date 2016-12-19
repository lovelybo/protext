$(function(){
	$('#pwd1').on('blur',function(){	
		if($('#text1').val()!=''&&$('#pwd1').val()!=''){
			$('.btn1').css('background','#ea5404');
		}
	})
	
	function code(){
		var i =60;
		var kg = true;
		if(kg){
			kg = false;
			var time = setInterval(function(){			
				if(i>0){
					i--;
					$('.btn_code').html(i+'s后重新获取').css('background','#e1e1e1');	
				}else{
					$('.btn_code').html('获取验证码').css('background','#ea5404');
					kg = true;
					i=60;
					clearInterval(time);
				}			
			},1000)
		}
	}
	$('.btn_code').on('tap',function(){
		code();		
	})
	$(document).on('input',function(){
		var txt1 = $('#text2').val();
		var code = $('#code2').val();
		var pwd1 = $('#pwd2').val();
		var pwd2 = $('#pwd3').val();
		if(txt1!='' && code!=''&&pwd1!=''&&pwd1==pwd2){
			$('.btn2').css('background','#ea5404');			
		}
		else{
			$('.btn2').css('background','#c7c7c7');	
		}
	})
	$('.btn02').on('touchstart',function(){
		location.href='index.html';
	})
})

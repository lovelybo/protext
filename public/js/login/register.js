$(function(){
	var kg1 = true;
	$('.login_agent_shenfen').on('touchstart',function(){
		if(kg1){
			$('.login_agent_kind').css('display','block');
			kg1 = false;
		}
		else{
			$('.login_agent_kind').css('display','none');
			kg1 = true;
		}
	})
	$('.login_agent_shenfen li').on('touchstart',function(){
		var innerHtml = $(this).html();
		$('#agent').val(innerHtml);
	})
	$(window).on('input',function(){
		if($('#register_text1').val()!=''&&$('#register_code1').val()!=''&&$('#register_pwd1').val()!=''&&$('#register_pwd1').val()==$('#register_pwd2').val()&&$('#agent').val()!=''){
			$('.register_register').css('background','#ea5404')
		}
		else{
			$('.register_register').css('background','#c7c7c7')
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
	$('.register_register').on('touchstart',function(){
		$('.register_bg').css('display','block');
	})
	$('.register_bg_sure').on('touchstart',function(){
		location.href = 'index.html';
	})
})

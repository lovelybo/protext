$(function(){
/*	$('#text1').blur(function(){
//		console.log(1)
		if($('#text1').val()==''){
			$('#text1').val('用户名不能为空');
		}	
	})*/
	$('#pwd1').blur(function(){	
		if($('#text1').val()!=''&&$('#pwd1').val()!=''){
			$('.btn').css('background','#ffa500').removeAttr('disabled').removeClass('disabled');
		}
	})
})

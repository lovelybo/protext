var $slider = $('.slider_list');
//获取屏幕宽度
var width = $(window).width();
console.log(width)
//获取轮播个数
var num = $('.slider_list').length;
console.log(num)
//设置总宽度
$('.slider_width').width(width*num);
$('.index_select_list_left').width(width);
//console.log(s)
$slider.width(width).height(width*0.85)
$('.index_slider').height(width*0.85);
var hg = width*0.85;
var i=0;
var time = setInterval(right,2000);
	function play(){
		time = setInterval(right,2000);		
	}
	function stop(){
		clearInterval(time);
	}			
	function right(){
		i++;
		if(i==$(".slider_list").length){
			i=0;
		}
		$('.slider_width').animate({
			marginLeft:-width
		},1000,function(){
			$('.slider_list').eq(0).appendTo($('.slider_width'));
			$('.slider_width').css('margin-left',0);									
		})		
		change();
	}
	$('.slider_width').on('swipeLeft',function(){
		right();
	})
	$(".slider_width").on('swipeRight' ,function(){
		i--;
		if(i<0){
			i=$(".slider_list").length - 1;
		}	
		$(".slider_width").css('margin-left','-'+width+'px')
		$('.slider_list').last().prependTo($('.slider_width'));
		$(".slider_width").animate({
			marginLeft:0
		},1000)
		
		change();
	});
	function change(){
	/*	$(".xiaoyuan span").eq(i).addClass('bt1');
//				$(".xiaoyuan span").not(":eq("+i+")").removeClass('bt1');	
		$(".xiaoyuan span").eq(i).siblings().removeClass('bt1');	*/
		$('.circle_li').removeClass('circle_li_active').eq(i).addClass('circle_li_active');
	}
	$(".index_slider").on('touchmove',function(){
		stop();
	})
	$(".index_slider").on('touchend',function(){
		play();
	})

	var $body = $('body');
	var startY,
		moveY;
	$body.on('touchstart',function(e){
		var th = e.touches[0];
		startY = th.clientY;
	})

	$(window).on('scroll',function(){
		var top = parseInt($(window).scrollTop());
		console.log(top);
		if(top>=50){
			$('.index_top').css('display','none');
			$('.index_search').css('display','none');
			$('.index_search1').css('display','block');
			$('.index_top1').css('display','block');	

			$('.index_show_right_title').eq(0).addClass('index_show_right_title1');
		}else{
			$('.index_top').css('display','block');
			$('.index_search').css('display','block');
			$('.index_search1').css('display','none');
			$('.index_top1').css('display','none');
			$('.index_show_right_title').eq(0).removeClass('index_show_right_title1');			
		}
		console.log(hg)
		if(top>=(hg-41)){
			$('.index_show_bottom').css('margin-top','60px');
			console.log(1)			
			$('.index_select_top').addClass('index_select_top1')
		}else{
			$('.index_select_top').removeClass('index_select_top1')
			$('.index_show_bottom').css('margin-top','0');
		}
	})


//		console.log(moveY-startY);
	
	$('.index_select_list').on('tap',function(){
		var $this = $(this);
		var $index = $this.index();
			console.log(top)
		$(window).scrollTop(hg);
		$this.parent().addClass(('index_select_top1'));
		
		if($this.find('span').hasClass('index_select_list1')){
			$this.find('span').removeClass('index_select_list1');
			$this.find('.index_select_list_hidden').css('display','none');
		}else{
			$('.index_select_list').find('span').removeClass('index_select_list1').eq($index).addClass('index_select_list1');
			$this.find('.index_select_list_hidden').css('display','block');
		}
	})
	$('.area_list li').on('tap',function(e){
		e.stopPropagation();
		var $this = $(this);
		var index = $this.index();
		console.log(index);
		$('.area_list li').removeClass('area_list_active').eq(index).addClass('area_list_active');
		
	})
/*var slideTime;
$('.slider_width').on('swipeLeft',function(){
	clearTimeout(slideTime);
	console.log('left')
	if(i<num-1){
		var sliding = (++i)*width;
		$('.slider_width').css('transform','translateX(-'+sliding+'px)');
		$('.circle_li').removeClass('circle_li_active').eq(i).addClass('circle_li_active');
		autoSlider();
	}
})
$('.slider_width').on('swipeRight',function(){
	clearTimeout(slideTime);
	console.log('right')
	if(i>0){
		var sliding = (--i)*width;
		$('.slider_width').css('transform','translateX(-'+sliding+'px)');
		$('.circle_li').removeClass('circle_li_active').eq(i).addClass('circle_li_active');
		autoSlider();
	}
})


function autoSlider(){
	slideTime = setTimeout(function(){
		if(i<num-1){
			var sliding = (++i)*width;
			console.log(sliding + ','+i);
			$('.slider_width').css('transform','translateX(-'+sliding+'px)',800);
			$('.circle_li').removeClass('circle_li_active').eq(i).addClass('circle_li_active');
			autoSlider();
		}
	},2000);
}
autoSlider();*/
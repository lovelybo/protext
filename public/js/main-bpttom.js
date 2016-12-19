
$('.main_li').on('touchstart',function(){
	var $this = $(this);
	var num = $this.index();
//	console.log(num)
	for(var i =0;i<5;i++){
		console.log(i)
		$('.main_li').removeClass('active'+i)
	}
	$this.addClass('active'+num);
})

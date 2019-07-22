

// 小米官网js	index



// 定时器-图片自动轮播
var interval;
var index = 0;
// - 将定时器
var startInterval = function() {
	interval = setInterval(function() {
		index++;
		if(index >= 4) {
			index = 0;
		}
		$(".slide-item").eq(index).fadeIn().siblings().fadeOut();
		$(".slide-tab-item").eq(index).addClass("slide-tab-item-active").siblings().removeClass("slide-tab-item-active");
	}, 2000);
}

// 点击小圆点切换图片,并改变小圆点的样式
$(".slide-tab-item").click(function() {
	// clearInterval(interval);
	$(this).addClass("slide-tab-item-active").siblings().removeClass("slide-tab-item-active");

	index = $(this).index();
	$(".slide-item").eq(index).fadeIn().siblings().fadeOut();
});

// 点击按钮切换图片
var btnLeft = document.querySelector('.banner-section .btn-left');
btnLeft.onclick = function() {
	if(index <= 0) {
		index = 4;
	}
	index--;
	$(".slide-item").eq(index).fadeIn().siblings().fadeOut();
	$(".slide-tab-item").eq(index).addClass("slide-tab-item-active").siblings().removeClass("slide-tab-item-active");
}
var btnRight = document.querySelector('.banner-section .btn-right');
btnRight.onclick = function() {
	index++;
	if(index >= 4) {
		index = 0;
	}
	$(".slide-item").eq(index).fadeIn().siblings().fadeOut();
	$(".slide-tab-item").eq(index).addClass("slide-tab-item-active").siblings().removeClass("slide-tab-item-active");
}

// 鼠标移入暂停,移出启动
var mouse = document.querySelector('.banner-section');
mouse.onmouseover = function() {
	clearInterval(interval);
}
mouse.onmouseout = function() {
	startInterval();
}

// 页面加载完成立即启动定时器
window.onload = function() {
	startInterval();
}







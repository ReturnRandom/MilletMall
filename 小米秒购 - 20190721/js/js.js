
/*
	搜索框获得焦点时,边框变为橙色
*/

// 获取搜索框下的输入框与按钮
var searchInput = document.querySelectorAll('.header-search input');

// 给搜索框绑定获取焦点事件与失去焦点事件
searchInput[0].onfocus = function() {
	searchInput[0].style.border = '1px solid #f87300';
	searchInput[1].style.border = '1px solid #f87300';
}
searchInput[0].onblur = function() {
	searchInput[0].style.border = '';
	searchInput[1].style.border = '';
}


/*
	鼠标移入购物车,出现下方的盒子
 */
// 这种方式会有BUG 
// $('.topbar-cart a').hover(function() {
// 	$(this).siblings('.activeBuyCar').slideToggle(300);
// }, function() {
// 	$(this).siblings('.activeBuyCar').slideToggle(300);
// });

$('.topbar-cart').hover(function() {
	$(this).children('.activeBuyBox').slideToggle(500);
	$(this).children('a').addClass('activeBuyCar');
}, function() {
	$(this).children('.activeBuyBox').slideToggle(500);
	$(this).children('a').removeClass('activeBuyCar');
});
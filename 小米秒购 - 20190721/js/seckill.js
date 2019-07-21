
// 获取id为tabs标签下的所有li标签
var tabs = getId("tabs").getElementsByTagName("li");

// 获取id为good-lists标签下的所有ul标签
var goods_lists = getId("goods-lists").getElementsByTagName("ul");

// 遍历tabs集合,为每一个li标签绑定一个点击事件,点击事件触发showlist方法
for( var index = 0; index < tabs.length; index++) {
	tabs[index].onclick = showlist;
}

// 更改样式
function showlist() {
	for( var index = 0; index < tabs.length; index++) {
		if(tabs[index] === this) {
			tabs[index].className = "seckill-nav-active";
			goods_lists[index].className = "clearfix seckill-goods-avtive";
		} else {
			tabs[index].className =  "";
			goods_lists[index].className = "clearfix";
		}
	}
} 
// 当时钟导航栏滚动到屏幕最上方时,固定导航栏
var seckillNav = getId("seckillNav");
window.onscroll = function() {
	// 获取屏幕滚动高度(Google Chrome,firefox)
	// ie 用document.body.scrollTop;获取
	// 苹果 用window.pageYOffset;获取
	// 用 || 逻辑符兼容多种浏览器,后面的0是去掉该特效
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0;

	if (scrollTop >= 260) {
		seckillNav.className = "seckill-nav seckill-navfixed";
	}else {
		seckillNav.className = "seckill-nav";
	};
}


/*
 * @ 倒计时
*/
// 获取时间
function timer() {
  var date = new Date();
  var hours = 19 - date.getHours();
  if(hours < 0){
  	hours = hours + 20;
  }
  var minutes = showZore(60 - date.getMinutes());
  var seconds = showZore(60 - date.getSeconds());
  // var mill = showZore(checkmill(date.getMilliseconds()));    //获取当前毫秒数(0-999)
  // getId("timer").innerHTML = hours+":"+minutes+":"+seconds+":"+mill;
  getId("timer").innerHTML = hours+":"+minutes+":"+seconds;
}
// 处理个位数
function showZore( x ) {
  if( x < 10 ) {
    x = "0" + x;
  }
  return x;
}
window.setInterval(timer,55);


// 封装获取id标签
// 如果传过来的参数是string类型,则返回它的元素
// 如果不是则直接返回该参数
function getId(id) {
	return typeof(id) === "string" ? document.getElementById(id) : id;
}
function onc(){
	var c1 = document.getElementById('c1');
	var c2 = document.getElementById('c2');
	var rl = document.getElementById('rl');
	if (c1.style.border == "") {
		c1.style.border = 2+"px "+"solid "+"#ff0853";
		c1.style.background = "url(../images/duigou.png) no-repeat right bottom";
		rl.innerHTML = '"'+c1.innerHTML+'"';
		if (c2.style.border!="") {
			c2.style.border="";
			c2.style.background="";
		}
	}	
}

function onc2(){
	var c1 = document.getElementById('c1');
	var c2 = document.getElementById('c2');
	var rl = document.getElementById('rl');
	if (c2.style.border == "") {
		c2.style.border = 2+"px "+"solid "+"#ff0853";
		c2.style.background = "url(../images/duigou.png) no-repeat right bottom";
		rl.innerHTML = '"'+c2.innerHTML+'"';
		if (c1.style.border!="") {
			c1.style.border="";
			c1.style.background="";
		}
	}	
}

function minus(){
	var bor0 = document.getElementsByClassName('bor')[0];
	var quantity = document.getElementById('quantity').innerHTML;
	var stock = document.getElementById('stock').innerHTML;
	if (parseInt(quantity)>1) {
		var q = parseInt(quantity)-1;
		document.getElementById('quantity').innerHTML = q;
	}
	if (q>1) {
		bor0.style.cursor="pointer";
	}
	else{
		bor0.style.cursor="not-allowed";
	}
	
}

function plus(){
	var bor1 = document.getElementsByClassName('bor')[1];
	var quantity = document.getElementById('quantity').innerHTML;
	var stock = document.getElementById('stock').innerHTML;
	if (parseInt(quantity)<parseInt(stock)) {
		var q = parseInt(quantity)+1;
		document.getElementById('quantity').innerHTML = q;
	}
	if (q<(parseInt(stock)-1)) {
		bor1.style.cursor="pointer";
	}
	else{
		bor1.style.cursor="not-allowed";
	}
}

function onpic1(){
	var pic1 = document.getElementsByClassName('squ')[0];
	var pic2 = document.getElementsByClassName('squ')[1];
	var mpic = document.getElementById('mediumpic');
	pic1.style.border = 1+"px solid #ff9003";
	pic2.style.border = "";
	mpic.style.backgroundImage = "url('../images/pp0.jpeg')"

}

function onpic2(){
	var pic1 = document.getElementsByClassName('squ')[0];
	var pic2 = document.getElementsByClassName('squ')[1];
	var mpic = document.getElementById('mediumpic');
	pic2.style.border = 1+"px solid #ff9003";
	pic1.style.border = "";
	mpic.style.backgroundImage = "url('../images/pp1.jpeg')"
}

function show(){
	var pop = document.getElementById('pop');
	pop.style.display = "block";
}

function guanbi(){
	var pop = document.getElementById('pop');
	pop.style.display = "none";
}
var boxpic = document.getElementById('boxpic');
var mpic = document.getElementById("mediumpic");
var shaw = document.getElementById("shaw");
var bigpic = document.getElementById("bigpic");
var Bimg = document.getElementById("Bimg");

mpic.onmouseover = function(){
	shaw.style.display = "block";
	bigpic.style.display = "block";
}

mpic.onmouseout = function(){
	shaw.style.display = "none";
	bigpic.style.display = "none";
}

mpic.onmousemove = function(ev){
  			var ev = ev || window.event;
  			//(1)根据鼠标位置，计算放大镜的位置
  			var left = ev.clientX - boxpic.offsetLeft - shaw.offsetWidth / 2;
  			var top = ev.clientY  - shaw.offsetHeight;
  			var maxLeft = mpic.offsetWidth - shaw.offsetWidth;
  			var maxTop = mpic.offsetHeight - shaw.offsetHeight;
  			left = left>maxLeft?maxLeft:left<0?0:left;
  			top = top>maxTop?maxTop:top<0?0:top;

  			//(2)设置放大镜的位置
  			shaw.style.left = left+"px";
  			shaw.style.top = top+"px";

  			//根据左侧放大镜的位置，计算右侧大图移动比例
  			var w = left/maxLeft;
  			var h = top/maxTop;

  			//计算大图的最大的移动范围
  			var BimgLeft = bigpic.offsetWidth - Bimg.offsetWidth;
  			var BimgTop = bigpic.offsetHeight - Bimg.offsetHeight;

  			//计算大图的移动的距离，设置位置
  			Bimg.style.left = w*BimgLeft+"px";
  			Bimg.style.top = h*BimgTop+"px";
  		}










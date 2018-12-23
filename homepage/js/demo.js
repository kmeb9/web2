window.onload = function(){
	var cover = document.getElementsByClassName('cover')[0];
	
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;//为了兼容IE和非IE的
		if(st>180){
			cover.style.position = 'fixed'
			
		}else{
			cover.style.position = 'static'
			
		}
	}
}

function showpay(){
	var recharge = document.getElementById('recharge').value;
	var number = document.getElementById('number');
	number.innerHTML = "¥" + recharge;
}

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var box = document.getElementById('box');
var oNavlist = document.getElementById('navo').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;

var timer = setInterval(next,2000);

box.onmouseover = function(){
	left.style.opacity = 50;
	right.style.opacity = 50;
	clearInterval(timer)
}

box.onmouseout = function(){
	left.style.opacity = 0;
	right.style.opacity = 0;
	timer = setInterval(next,2000);
}

left.onclick = prev;
right.onclick = next;

for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-801*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-801*index},function(){
		if(index==7){
			slider.style.left = '-801px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-801*index},function(){
		if(index==0){
			slider.style.left = '-4806px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}

var bobo=document.getElementById("bobo");
var no1=document.getElementById("no1");
var no2=document.getElementById("no2");
no2.innerHTML= no1.innerHTML;
function boardScroll(){
    bobo.scrollTop++;
    if(bobo.scrollTop>=no1.offsetHeight){
        bobo.scrollTop=0;
    }
}
var timer2 =setInterval(boardScroll,30);
bobo.onmouseover = function(){
    clearInterval(timer2);
}
bobo.onmouseout = function(){
    timer2=setInterval(boardScroll,30);
}

var div1 = document.getElementById('sidepop1');
var div2 = document.getElementById('sidepop2');
var div3 = document.getElementById('sidepop3');
var div4 = document.getElementById('sidepop4');

div1.onmouseover = function(){
	setInterval(animate(div1,{marginLeft:0}),30);
}
div1.onmouseout = function(){
	setInterval(animate(div1,{marginLeft:84}),30);
}
div2.onmouseover = function(){
	setInterval(animate(div2,{marginLeft:0}),30);
}
div2.onmouseout = function(){
	setInterval(animate(div2,{marginLeft:85}),30);
}
div3.onmouseover = function(){
	setInterval(animate(div3,{marginLeft:0}),30);
}
div3.onmouseout = function(){
	setInterval(animate(div3,{marginLeft:85}),30);
}
div4.onmouseover = function(){
	setInterval(animate(div4,{marginLeft:0}),30);
}
div4.onmouseout = function(){
	setInterval(animate(div4,{marginLeft:85}),30);
}


// var timer = null;
// var countdown = document.getElementById('countdown')

// countDown();

// timer = setInterval(countDown, 1000);

// function countDown(){
// 	var nowTime = new Date();
// 	console.log(nowTime);
// 	var endTime = new Date(2018,6,5,15,0,0);
// 	console.log(endTime);
// 	var t = Math.floor((endTime - nowTime)/1000);
// 	var iD = Math.floor(Math.floor(t/86400));
// 	var iH = Math.floor(t%86400/3600);
// 	var iM = Math.floor((t%3600/60));
// 	var iS = t%60;
// 	console.log(t)
// 	if(t<=0){
// 		clearInterval(timer);
// 		countdown.innerHTML = '抢购完毕！';
// 	}else{
// 		countdown.innerHTML = "距离结束时间还有：" + iD + "天" + addZ(iH) + "小时" + addZ(iM) + "分" + addZ(iS) + "秒";
// 	}
// }

// function addZ(iNum){
//     return iNum<10 ? "0"+iNum : iNum;
// }

function addZ(iNum){
    return iNum<10 ? "0"+iNum : iNum;
}

function Countdown(elem, endTime){
	this.elem = elem;
	this.nowTime = new Date().getTime();
	this.endTime = endTime.getTime();
	this.timer = null;
	this.init();
}
Countdown.prototype = {
	constructor: Countdown,
	init: function(){
		var _this = this;
		this.timer = setInterval(function(){
			_this.run();
		},1000)
		
	},
	run: function(){
		console.log(this.nowTime)
		console.log(this.endTime)
		var t = Math.floor((this.endTime - this.nowTime)/1000);
		console.log(t)
		var iD = Math.floor(Math.floor(t/86400));
		var iH = Math.floor(t%86400/3600);
		var iM = Math.floor((t%3600/60));
		var iS = t%60;
		if(t<=0){
			clearInterval(this.timer);
			document.getElementById(this.elem).innerHTML = '抢购完毕！';
		}else{
			document.getElementById(this.elem).innerHTML = "距离结束时间还有：" + iD + "天" + addZ(iH) + "小时" + addZ(iM) + "分" + addZ(iS) + "秒";
		}

		this.nowTime+=1000;
	}
}

var endTime = new Date(2018, 7 - 1, 5, 9, 0, 0);
var test = new Countdown("countdown",endTime);  
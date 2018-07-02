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

(function(){
	function Countdown(opts){
		this.opts = extend({
			elem: '',
			start: new Date().getTime(),
			end: new Date().getTime()
		}, opts || {})
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
			var opts = this.opts;
			var t = Math.floor((opts.end - opts.start)/1000);
			var iD = Math.floor(Math.floor(t/86400));
			var iH = Math.floor(t%86400/3600);
			var iM = Math.floor((t%3600/60));
			var iS = t%60;
			if(t<=0){
				clearInterval(this.timer);
				document.getElementById(opts.elem).innerHTML = '抢购完毕！';
			}else{
				document.getElementById(opts.elem).innerHTML = "距离结束时间还有：" + iD + "天" + addZ(iH) + "小时" + addZ(iM) + "分" + addZ(iS) + "秒";
			}

			opts.start+=1000;
		}
	}

	function addZ(iNum){
	    return iNum<10 ? "0"+iNum : iNum;
	}

	function extend(target, obj){
		for(var k in obj){
			if(obj.hasOwnProperty(k)){
				target[k] = obj[k];
			}
		}
		return target;
	}

	return window.Countdown = Countdown;
})()
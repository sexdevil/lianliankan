function getStyle(obj, attr){
	var result='';
	if(obj.currentStyle){
		result=obj.currentStyle[attr];
	}else{
		result=getComputedStyle(obj, false)[attr];
	}
	if(attr=='opacity'){
		return Math.round(parseFloat(result)*100);
	}else{
		return parseInt(result);
	}
}
function startMove(obj, json, fn,time){
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;
		var attr='';
		for(attr in json){
			var iCur=getStyle(obj, attr);
			var iTarget=json[attr];
			var iSpeed=(iTarget-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			if(iCur!=iTarget){
				bStop=false;
			}
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}else{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	}, time);
}
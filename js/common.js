var getObj = function (id) {  
    return "string" == typeof id ? document.getElementById(id) : id;  
};
function randoms(n){
	var number = parseInt(Math.random()*n + 1);
	if(number < 10){
		return "0" + number;
	}else{
		return number;
	} 
}
function getChildNodes(){
     var node = new Array();
     if(arguments.length == 1 ){    //1.判断参数个数
           var temp = document.getElementById(arguments[0]).childNodes;     //2.获取ul下所有子节点（包括text节点、空格）
           for(var i=0;i<temp.length;i++){   
                 if(temp.nodeType == 1 && temp.tagName){    //3.判断节点类型
                        node.push(temp);    //4.节点压栈
                   }   
            }
           return node;     //5.返回节点列表（类似数组）
      }
      else if(arguments.length == 2){       //1.判断参数个数
           return document.getElementById(arguments[0]).getElementsByTagName(arguments[1]);    //2.返回节点列表（类似数组）
       }
}
function maxs(a,b){
	return a > b ? a : b;
}
function mins(a,b){
	return a < b ? a : b;
} 
function changeTwoDecimal(x)
{
   var f_x = parseFloat(x);
   if (isNaN(f_x))
   {
      alert('function:changeTwoDecimal->parameter error');
      return false;
   }
   var f_x = Math.round(x*100)/100;

   return f_x;
}
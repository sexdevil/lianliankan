function Tab(cmd, con, evt, css, index){
			//默认触发事件
		var evt = evt || 'mouseover',
			//默认样式名
			css = css || 'curr',
			index = index || 0;
		//初始化显示项
		show(index);
		//为点击元素绑定事件
		for(var i = 0, l = cmd.length; i < l; i ++){
			//为准确获得i的值用闭包传值
			(function(n){
				cmd[n]['on'+ evt] = function(){
					//切换到索引为i的选项
					show(n);
				}
			})(i);
		};
		//切换显示
		function show(i){
			cmd[index].className = cmd[index].className.replace(css, '');
			con[index].style.display = 'none';
			index = i;
			cmd[index].className += css;
			con[index].style.display = 'block';
		}
}

function tag(i, t){
	return document.getElementById(i).getElementsByTagName(t);
};
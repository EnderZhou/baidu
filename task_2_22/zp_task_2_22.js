

/* 初始化 */
function init(){
	var btn = document.getElementsByTagName("input");
	var strinput = document.getElementById("string-input");
	btn[0].onclick = function(){
		var str = strinput.value;
		if (str == ""||str == undefined){alert("请输入内容!!");return;}
	    var separator =str.match(/\.|。|\/|\\|,|，|、|\t|\s|\n/);
	    str = str.split(separator);
		list.unshift(str);
		strinput.value = "";
	}
	btn[1].onclick =  function(){
		var str = strinput.value;
		if (str == ""||str == undefined){alert("请输入内容!!");return;}
	    var separator =str.match(/\.|。|\/|\\|,|，|、|\t|\s|\n/);
	    str = str.split(separator);
		list.push(str);
		strinput.value = "";
	}
	btn[2].onclick = list.shift;
	btn[3].onclick = list.pop;
	btn[4].onclick = function(){random()}; 
	btn[5].onclick = function(){list.array = [];renderNumList();}
	btn[6].onclick = function(){find()};
	
	renderNumList();
	strinput.value = "ife.baidu.com";
}
init();
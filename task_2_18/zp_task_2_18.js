var list = {
	array:[123,321],
	unshift:function(num){
		this.array.unshift(num);
		renderNumList();
	},
	push:function(num){
		this.array.push(num);
		renderNumList();
	},
	shift:function(){
		list.array.shift();
		renderNumList();
	},
	pop:function(){
		list.array.pop();
		renderNumList();
	},
	del:function(num){
		list.array.splice(num,1);
		renderNumList();
	}
}

var  numList = document.getElementById("numList");
function renderNumList(){
  var html = "";
  for (var i = 0,l = list.array.length; i < l; i++) {
    html += '<div class="numbox">'+list.array[i]+'</div>';
  }
  numList.innerHTML = html;
  addDivEvent();
}

function addDivEvent(){  //重新绑定数字div的事件
	var btn=numList.getElementsByTagName("div");
	for(var i=0;i<btn.length;i++){
		btn[i].onclick=function(i){  //这里不做个闭包的话，i值无法传入。
			return function(){       //因为变量的活动对象是“静态”的，只能为最后一个固定的值。如var i=1;i=2;最后i的值毫无疑问是2；
				return list.del(i);  //解决的方法，就是闭包，在内形成另一个作用域，并引用内作用域的i而不是外作用域的i
			}
		}(i)
	}
}

function init(){
	var btn = document.getElementsByTagName("input");
	// var num = btn[0].value;   为啥num放在外面的时候给数组增加的总是空字符串呢?
	btn[1].onclick = function(){
		var num = btn[0].value;
		if (!/^\d+$/.test(num)){
	    alert("必须添加数字!");
	    btn[0].value = "";
	    return;
	    }
	    num = Number(num);
		list.unshift(num);
		btn[0].value = "";
	}
	btn[2].onclick =  function(){
		var num = btn[0].value;
		if (!/^\d+$/.test(num)){
	    alert("必须添加数字!");
	    btn[0].value = "";
	    return;
	    }
	    num = Number(num);
		list.push(num);
		btn[0].value = "";
	}
	btn[3].onclick = list.shift;
	btn[4].onclick = list.pop;
	renderNumList();
}
init();
var list = {
	array:["www","bai","du","com","ife"],
	unshift:function(str){
		if (str.constructor === Array){
			/*for (var i = str.length-1; i >=0; i--) {
				this.array.unshift(str[i]);
			}*/
			/* 用定时器替换循环 */
			var i = str.length-1;
			var timer = setInterval(function(){
				list.array.unshift(str[i]);
				renderNumList();
				i--;
				if (i<0){clearInterval(timer);timmer=null};
			},300);
		}else{this.array.unshift(str);renderNumList();}
	},
	push:function(str){
		if (str.constructor === Array){
			/*for (var i = 0; i <str.length; i++) {
				this.array.push(str[i]);
			}*/
			/* 用定时器替换循环 */
			var i = 0;
			var timer = setInterval(function(){
				list.array.push(str[i]);
				renderNumList();
				i++;
				if (i>str.length-1){clearInterval(timer);timmer=null};
			},300);
		}else{this.array.push(str);}
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
	del:function(str){
		list.array.splice(str,1);
		renderNumList();
	}
}

var  numList = document.getElementById("numList");
function renderNumList(){
  var html = "";
  for (var i = 0,l = list.array.length; i < l; i++) {
    html += '<div class="numbox red" >'+list.array[i]+'</div>';
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

/* 随机数组50个 */
var timer1 = null;
function random(){
	list.array = [];
	var i = 1;
	if(timer1 == null){timer1 = setInterval(function(){
		if (i>49){clearInterval(timer1);timer1=null;};
		i++;
		var num = Math.ceil(Math.random()*90+10);
		if (i%2==0){
			list.push(num);
		}else{list.unshift(num);}
	},10);}else{clearInterval(timer1);timer1=null;};
}

/* 排序函数 冒泡排序 此页面中未使用到 */
/*var timer2 = null;
var timer3 = null;

function BubbleSort() {
	var d = numList.getElementsByTagName("div");
	var i=0;
	if (timer2 == null){
		timer2 = setInterval(function(){
			if (i>list.array.length-1){
				clearInterval(timer2);timer2=null;
			}else{
				var j = 0;
				if(timer3 == null){
					timer3 = setInterval(function(){
						if (j>list.array.length-i-1){
							clearInterval(timer3);timer3=null;
						}else{
							d[j].className = "numbox green";
							d[j+1].className = "numbox green";
							if(list.array[j]>list.array[j+1]){
								var m = list.array[j];
								list.array[j] = list.array[j+1];
								list.array[j+1] = m;
								console.log(list.array[j]+"<->"+list.array[j+1]);
								renderNumList();
							}
							d[j].className = "numbox red";
							d[j+1].className = "numbox red";
							j++;
						}
					},10)
				}else{
					clearInterval(timer3);timer3=null;
				}
				i++;
			}
		},10*(list.array.length+1));
	}else{
		clearInterval(timer2);timer2=null;
	}
}*/

/* 查找函数 */
function find(){
	var findstr = document.getElementById("find").value;
	var d = numList.getElementsByTagName("div");
	for (var i = 0; i < list.array.length; i++) {
		var str = list.array[i].toString();
		if (str.indexOf(findstr) != -1){
			d[i].className = "numbox green";
		}else{d[i].className = "numbox red";}
	}
}

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
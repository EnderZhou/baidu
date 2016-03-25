var list = {
	array:[100,90,80,70,60,50,40,30,20,10],
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
    html += '<div class="numbox red" style="height:'+list.array[i]*2+'">'+list.array[i]+'</div>';
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
	var Interval = document.getElementById("Interval").value;
	var i = 1;
	if(timer1 == null){timer1 = setInterval(function(){
		if (i>49){clearInterval(timer1);timer1=null;};
		i++;
		var num = Math.ceil(Math.random()*90+10);
		if (i%2==0){
			list.push(num);
		}else{list.unshift(num);}
	},Interval);}else{clearInterval(timer1);timer1=null;};
}

/* 排序函数 冒泡排序*/
var timer2 = null;
var timer3 = null;

function BubbleSort() {
	var Interval = document.getElementById("Interval").value;
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
					},Interval)
				}else{
					clearInterval(timer3);timer3=null;
				}
				i++;
			}
		},Interval*(list.array.length+1));
	}else{
		clearInterval(timer2);timer2=null;
	}
}

// function BubbleSort() {
// 	var Interval = document.getElementById("Interval").value;
// 	var i=0;
// 	if (timer2 == null){
// 		timer2 = setInterval(function(){
// 			if (i>list.array.length-1){
// 				clearInterval(timer2);timer2=null;
// 			}else{
// 				var j = 0;
// 				if(timer3 == null){
// 					timer3 = setInterval(function(){
// 						if (j>list.array.length-i-1){
// 							clearInterval(timer3);timer3=null;
// 						}else{
// 							if(list.array[j]>list.array[j+1]){
// 								var m = list.array[j];
// 								list.array[j] = list.array[j+1];
// 								list.array[j+1] = m;
// 								console.log(list.array[j]+"<->"+list.array[j+1]);
// 								renderNumList();
// 							}
// 							j++;
// 						}
// 					},Interval)
// 				}else{
// 					clearInterval(timer3);timer3=null;
// 				}
// 				i++;
// 			}
// 		},Interval*(list.array.length+1));
// 	}else{
// 		clearInterval(timer2);timer2=null;
// 	}
// }
/* 排序函数 冒泡排序最初的尝试 */
// function BubbleSort() {
// 	var Interval = document.getElementById("Interval").value;
// 	do{
// 		var n = 0;
// 		var i = list.array.length;
// 		if(timer3 == null){
// 			timer3 = setInterval(function(){
// 				if (i<0){
// 					clearInterval(timer3);timer3=null;
// 				}else{
// 					i--;
// 					if(list.array[i]<list.array[i-1]){
// 						var m = list.array[i];
// 						list.array[i] = list.array[i-1];
// 						list.array[i-1] = m;
// 						console.log(list.array[i]+"<->"+list.array[i-1]);
// 						n++;
// 						console.log("N:"+n);
// 						renderNumList();
// 					}
// 				}
// 			},Interval)
// 		}else{
// 			clearInterval(timer3);timer3=null;
// 		}
// 	}while(n!=0);
// }

/* 排序函数 冒泡排序另一种尝试 */
// function BubbleSortTime() {
// 	var Interval = document.getElementById("Interval").value;
// 	var n=0;
// 	for (var i = 0; i < list.array.length - 1; i++) {//比较的次数是length-1
//                 for (var j = 0; j < list.array.length - 1 - i; j++) {
//                 	console.log("循环层次i:"+i+",j:"+j);
//                 	n++;
//                 	setTimeout(BubbleSort(i,j),Interval*n);
//                 }
//     }
// }
// function BubbleSort(i,j){
// 	if (list.array[j] > list.array[j + 1]) {
// 		console.log("交换数值:"+list.array[j] +"<->"+ list.array[j + 1]);
// 	    var tmp = list.array[j];
// 	    list.array[j] = list.array[j + 1];
// 	    list.array[j + 1] = tmp;
// 	    renderNumList();
//     }
// }

/* 初始化 */
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
	    if (num<10||num>100){
	    	alert("超出范围10~100!");
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
	    if (num<10||num>100){
	    	alert("超出范围10~100!");
	    	btn[0].value = "";
	    	return;
	    }
	    num = Number(num);
		list.push(num);
		btn[0].value = "";
	}
	btn[3].onclick = list.shift;
	btn[4].onclick = list.pop;
	btn[5].onclick = function(){BubbleSort()};
	btn[6].onclick = function(){random()}; 
	renderNumList();
}
init();
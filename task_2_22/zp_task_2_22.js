var Root = document.getElementById("root");
var btn = document.getElementsByTagName("input");
var divList = [];
var timer = null;
// function node (node){
// 	this.left = node.firstElementChild;
// 	this.right = node.lastElementChild;
// 	this.show = node.className = "red";
// 	this.normal = node.className = "";
// }
function renderdiv(){
	if (timer == null){
		var interval = btn[3].value;
		var i = 0,length = divList.length;
		divList[i++].className = "red";
		timer = setInterval(function(){
			if(i>length-1){
				divList[i-1].className = "";
				clearInterval(timer);
				timer=null;
			}else {
				divList[i-1].className = "";
				divList[i].className = "red";
				i++;
			}
		},interval);
	}else{
		clearInterval(timer);
		timer=null;
	}
}

/* 前序遍历 */
function preOrder(node){
    if(!(node == null)){
        divList.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
}

/* 中序遍历 */
//使用递归方式实现中序遍历
function inOrder(node){
    if(!(node == null)){
        inOrder(node.firstElementChild);//先访问左子树
        divList.push(node);//再访问根节点,将根节点推入divlist
        inOrder(node.lastElementChild);//最后访问右子树
    }
}

/* 后序遍历 */
function postOrder(node){
    if(!(node == null)){
        postOrder(node.firstElementChild);
        postOrder(node.lastElementChild);
        divList.push(node);
    }
}

/* 清除classname状态 */	
function reset (){
	for (var i = 0; i < divList.length; i++) {
		divList[i].className = "";
	}
	divList = [];
}

/* 初始化 */
function init(){
	btn[0].onclick = function(){
		reset ();
		preOrder(Root);
		renderdiv();
	};
	btn[1].onclick = function(){
		reset ();
		inOrder(Root);
		renderdiv();
	};
	btn[2].onclick = function(){
		reset ();
		postOrder(Root);
		renderdiv();
	};
	btn[3].value = 1000;
}
init();
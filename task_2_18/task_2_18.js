/* 数组 */
var  numData = new Array();
var  numList = document.getElementById("numList");
var  addbtnlf = document.getElementById("addbtnlf");
var  addbtnrt = document.getElementById("addbtnrt");
var  delbtnlf = document.getElementById("delbtnlf");
var  delbtnrt = document.getElementById("delbtnrt");

/* 测试数据 */
numData = [23,43,25,16,100];

/* 添加数组 需要传入方向 */
function addNumData(direction) {
  var  num = document.getElementById("num-input").value;
  if (!/^\d+$/.test(num)){
    alert("必须添加数字!");
    return;
    }
    num = Number(num);
  if (direction="lf"){
    numData.unshift(num);
  }else if (direction="rt"){
    numData.push(num);
  }
  renderNumList();
  // switch (direction)
  // {
  //  case "lf" :
  //  numData.unshift(num);
  //  break;
  //  case "rt" :
  //  numData.push(num);
  //  break;
  //  default:
  // }
}

/* 删除数组 需要传入方向 */
function delNumData(direction) {
  if (direction="lf"){
    numData.shift();
  }else if (direction="rt"){
    numData.pop();
  }
  // switch (direction)
  // {
  //  case "lf" :
  //  numData.shift();
  //  break;
  //  case "rt" :
  //  numData.pop();
  //  break;
  //  default:
  // }
  renderNumList();
}

/* 渲染数字队列 */
function renderNumList(){
  var html = "";
  for (var i = 0,l = numData.length; i < l; i++) {
    html += '<div class="numbox">'+numData[i]+'</div>';
  }
  numList.innerHTML = html;
}

/* 添加按钮 */
function addBtnHandle(argument) {
  addNumData(argument);
}

/* 删除按钮 */
function delBtnHandle(argument) {
  delNumData(argument);
}

 /* 初始化 */
function init() {
  addbtnlf.addEventListener("click",function(){addNumData("lf")},false);
  addbtnrt.addEventListener("click",function(){addNumData("rt")},false);
  delbtnlf.addEventListener("click",function(){delNumData("lf")},false);
  delbtnrt.addEventListener("click",function(){delNumData("rt")},false);

  // addbtnlf.onclick = addBtnHandle("lf");
  // addbtnrt.onclick = addBtnHandle("rt");
  // delbtnlf.onclick = delBtnHandle("lf");
  // delbtnrt.onclick = delBtnHandle("rt");

}

init()


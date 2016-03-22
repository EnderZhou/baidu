/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var addbtn = document.getElementById("add-btn");
var aqitable = document.getElementById("aqi-table");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById("aqi-city-input").value;
	var value = document.getElementById("aqi-value-input").value;
	// 缺少字符串验证相关代码 待补完
	aqiData[city] = Number(value);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var html = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>'
	for(x in aqiData){
		html += '<tr><td>'+x+'</td><td>'+aqiData[x]+'</td><td><button>删除</button></td></tr>'
	}
	aqitable.innerHTML = html;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
  // do sth.
  var e = event || window.event;
  var target = e.target||e.srcElement;
  var x = target.getElementsByTagName("td");
  delete aqiData[x[0].nodeValue];
  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  addbtn.addEventListener("click",addBtnHandle,false);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  aqitable.addEventListener("click",delBtnHandle(event),false);

}

init();
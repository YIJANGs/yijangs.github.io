function N() {
  var Youname = document.getElementById('nm').value;
  if (Youname.includes("张琳")){
    alert("你好！恭喜你，我喜欢你，我没有选错，对吗...");
  }else {
    alert("好吧，"+Youname+"，至少我不喜欢你，很遗憾...但是...");
    alert("也许我根本没有喜欢的人呢？");
  }
}

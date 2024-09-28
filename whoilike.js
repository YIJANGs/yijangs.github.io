function setCookie(name,value,time) {
  var e = new Date();
  e.setTime(e.getTime() + time*24*60*60*1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + e.toGMTString();
}
function getCookie(name) {
  var a = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  if (a != null) return unescape(a[2]); return null;
}

function N() {
  var Youname = document.getElementById('nm').value;
  if (Youname.includes("张琳")){
    let visitCount = getCookie("visitcount");
    if (visitCount) {
      alert('你已经来过了...')
      window.location.href = window.location.origin;
    } else {
      visitCount = "1";
      alert("eng...");
      alert("也许，我应该这么说...");
      alert("暗恋，暗恋，是什么？");
      alert("是喜欢一个人，但不漏出半点破绽");
      alert("我就是这样。");
      alert("也许，这就是你看起来很失落的原因。");
      alert("请你回想一下，他是否真正地把你视作他喜欢的人？");
      alert("他是否尊重你？");
      alert("...");
      alert("1328104bada1111f22956462f6d296f5，熟不熟悉？");
      alert("这是“张琳我喜欢你”的哈希值...");
      alert("总之，这是属于你的选择。");
    }
    setCookie('visitcount',visitCount,30)



  }else {
    alert("好吧，"+Youname+"，至少我不喜欢你，很遗憾...但是...");
    alert("也许我根本没有喜欢的人呢？");
  }
}

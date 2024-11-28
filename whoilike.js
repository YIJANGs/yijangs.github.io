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
  if (Youname.includes("hooo")){
    let visitCount = getCookie("visitcount");
    if (visitCount || 1==1) {
      alert('你已经来过了...')
      window.location.href = window.location.origin;
    } else {
      visitCount = "1";
      alert("2024年11月23号，这就已经是谣言了。");
      alert("你为什么不早来一点？");
    }
    setCookie('visitcount',visitCount,30)



  }else {
    alert("尝试输入hooo");
  }
}

function cok1(){
  if (document.getElementById('wechatradio1').checked){
    document.getElementById('wechatchinese').style.display = "block";
    document.getElementById("alipaychinese").style.display = "none";
  }
  else if (document.getElementById('alipayradio1').checked){
    document.getElementById("alipaychinese").style.display = "block";
    document.getElementById('wechatchinese').style.display = "none";
  }
}
function cok_wechat(){
  if (document.getElementById('2number').value<=0){
    alert('资助金额不能小于等于0.')
  }else{
    document.getElementById('photochinese-wechat').style.display = "block";
    document.getElementById('photochinese-alipay').style.display = "none";
    imgg = document.getElementById('imgwechat1');
    imgg.src = './fundwechat.png';
  }
}
function cok_alipay(){
  if (document.getElementById('2number').value<=0){
    alert('资助金额不能小于等于0.')
  }else{
    document.getElementById('photochinese-alipay').style.display = "block";
    document.getElementById('photochinese-wechat').style.display = "none";
    imgg = document.getElementById('imgalipay1');
    imgg.src = './fundalipay.png';
  }
}

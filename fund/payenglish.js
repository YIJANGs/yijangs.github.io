function ok1(){
  if (document.getElementById('wechatradio').checked){
    document.getElementById("wechatenglish").style.display = "block";
    document.getElementById("alipayenglish").style.display = "none";
  }
  else if (document.getElementById('alipayradio').checked){
    document.getElementById("alipayenglish").style.display = "block";
    document.getElementById("wechatenglish").style.display = "none";
  }
}
function ok_wechat(){
  if (document.getElementById('1number').value<=0){
    alert('sorry the number can not <= 0.')
  }else{
    document.getElementById('photoenglish-wechat').style.display = "block";
    document.getElementById('photoenglish-alipay').style.display = "none";
    imgg = document.getElementById('imgwechat');
    imgg.src = './fundwechat.png';
  }
}
function ok_alipay(){
  if (document.getElementById('1number').value<=0){
    alert('sorry the number can not <= 0.')
  }else{
    document.getElementById('photoenglish-alipay').style.display = "block";
    document.getElementById('photoenglish-wechat').style.display = "none";
    imgg = document.getElementById('imgalipay');
    imgg.src = './fundalipay.png';
  }
}

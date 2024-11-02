function langua(){
  if (document.getElementById('english').checked){
    document.getElementById('divenglish').style.display = 'block';
    document.getElementById('tipsenglish').style.display = 'block';
    document.getElementById('tipschinese').style.display = 'none';
    document.getElementById('divchinese').style.display = 'none';
  }else if (document.getElementById('chinese').checked){
    document.getElementById('divchinese').style.display = 'block';
    document.getElementById('tipschinese').style.display = 'block';
    document.getElementById('tipsenglish').style.display = 'none';
    document.getElementById('divenglish').style.display = 'none';
  }
}

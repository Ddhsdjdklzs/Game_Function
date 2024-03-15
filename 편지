var snd = {};
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){
  if(/!편지\s+@?(.+)\s*,\s*(.+)/i.test(msg)){
    let target = RegExp.$1.trim();
    let message = RegExp.$2
    if(!snd[target]){ snd[target] = []; }
    replier.reply(sender + '님께서 ' + target + '님께 메세지를 전달하셨습니다.');
    snd[target].push('\n내용 : ' + message + '\n보낸이 : ' + sender);    
  }    

  if(snd[sender]){
    replier.reply('띵동! ' + sender + '님께 ' + snd[sender].length + '개의 메세지가 도착했습니다.' + '\u200b'.repeat(500) + '\n━━━━━━━━━━━━━━━━━━━━━━━━' + snd[sender].join('\n━━━━━━━━━━━━━━━━━━━━━━━━'));
    delete snd[sender];
  }
}

​

const j = '!';

const FS = FileStream;

const WarningPath = '/sdcard/WarningData.json';

const Devs = ["헤드샷", "김양파"];

// 경고 기능 초기화: 파일이 없으면 생성
if(!FS.read(WarningPath)) FS.write(WarningPath, JSON.stringify([], null, 4));

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){
  if(!msg.startsWith(j)) return;
  
  let Warnings = JSON.parse(FS.read(WarningPath));
  
  msg = msg.slice(j.length);

  // 경고 확인 명령어
  if(msg === '경고수'){
    let userWarning = Warnings.find(x => x.Name === sender);
    if(!userWarning){
      replier.reply(sender + '님은 경고가 없습니다.');
    } else {
      replier.reply(sender + '님의 경고 횟수: ' + userWarning.Amount + '회');
    }
    
    return;
  }

    // 경고 확인 명령어
  if(/^경고수 @?(.+)$/.test(msg){
    let Target = RegExp.$1.trim();
    let userWarning = Warnings.find(x => x.Name === Target);
    if(!userWarning){
      replier.reply(Target + '님은 경고가 없습니다.');
    } else {
        replier.reply(Target + '님의 경고 횟수: ' + userWarning.Amount + '회');
    }
    return;
  }

  // 경고 부여 명령어
  if(/^경고 @?(.+) (\d+)$/.test(msg)){
    if(!Devs.includes(sender)){
      replier.reply('관리자가 아닙니다.'); 
      return; 
    }
    let Target = RegExp.$1.trim();
    let Amount = parseInt(RegExp.$2);
    let targetWarning = Warnings.find(x => x.Name === Target);    
    if(targetWarning){
      targetWarning.Amount += Amount;
    } else {
      Warnings.push({
        "Name": Target,
        "Amount": Amount
      });
    }
    FS.write(WarningPath, JSON.stringify(Warnings, null, 4));
    replier.reply(sender + '님께서 ' + Target + '님에게 경고 ' + Amount + '회를 부여했습니다. 총 경고: ' + 
      (targetWarning ? targetWarning.Amount : Amount) + '회');
    return;
  }
}

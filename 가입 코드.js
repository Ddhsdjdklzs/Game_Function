const FS = FileStream;

const Path = "sdcard/어쩌구/저쩌구/";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

var hh = new java.lang.String(imageDB.getProfileHash());   

var p = plr(sender);

  if(msg == "회원가입"){

    if(sender.length > 12) { 

      replier.reply("닉네임을 12글자로 줄여주십시오.");

      return;

      }

    if(!plr(sender)){

      data = {

        "name" : sender

         //데충 객체생성한거 

         };

         

         FS.write(Path + sender + " (" + Number(hh) + ") " + '.txt', JSON.stringify(data, null, 4)),

         replier.reply("가입함");

​

      }  else  {

        

        replier.reply("이미 가입함");

      }

    }

  function plr(name){

    return JSON.parse(FS.read(Path + name + " (" + Number(hh) + ") " + '.txt'));

    }

}

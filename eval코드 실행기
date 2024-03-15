function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  const adminname = ""; //이름

  const adminhash = []; //해시코드

  

  let hc = new java.lang.String(imageDB.getProfileHash());   

  

  if(msg == "해시코드"){

    replier.reply(sender + "님의 해시코드\n" + hc);

  }

  

  if(msg == "닉네임"){

    replier.reply(sender);

  }

  

  if(msg.startsWith("/eval ")){

    if(adminname == sender){

      if(adminhash == hc){

​

        try{

          replier.reply(eval(msg.substr(6)));

        }

    

        catch(err){

          replier.reply("ERROR");

        }

      }  else  {

        replier.reply("해시코드가 다릅니다");

      }

    }  else  {

      replier.reply("닉네임이 다릅니다");

    }

  }

}

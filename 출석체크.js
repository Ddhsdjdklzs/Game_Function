const Path = '/sdcard/출석데이터.json';

​

const FS = FileStream;

​

if(!FS.read(Path)) FS.write(Path, JSON.stringify([], null, 4));

​

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){

​

    let Today = String(new Date().getFullYear()) + '/' + String(new Date().getMonth()) + '/' + String(new Date().getDate());

    

    let Time = String(new Date().getHours()) + '시 ' + String(new Date().getMinutes()) + '분 ' + String(new Date().getSeconds()) + '초';

​

    let list = JSON.parse(FS.read(Path));

​

    if(msg === '출석'){

​

        if(list.find(n => n.Day === Today && n.Room === room && n.Name === sender)){

​

            replier.reply('이미 출석하셨습니다.');

​

            return;

​

        }

​

        list.push({'Name' : sender, 'Day' : Today, 'Room' : room, 'More' : Time});

​

        FS.write(Path, JSON.stringify(list, null, 4));

        

        let i = list.filter(n => n.Day === Today && n.Room === room).findIndex(n => n.Name === sender);

        

        replier.reply('[' + sender + '] 님께서 ' + (i + 1) + '번째로 출석하셨습니다.');

​

    }

​

    if(msg === '출석목록'){

​

        let locate = list.some(function(n){

​

            return n.Room === room;

​

          });

​

        if(!locate){ replier.reply('출석한 사용자가 없습니다.'); return; }

​

        let res = '[' + room + ']출석목록' + '\u200b'.repeat(500) + '\n\n';

        

        let count = 0;

​

        for(n in list){

​

            if(list[n].Room === room && list[n].Day === Today){

​

                count++;

​

                res += '[' + rank(count) + '] ' + list[n].Name + ' (' + list[n].More + ')' + '\n\n';

​

            }

​

        }

​

        replier.reply(res);

​

    }

​

    function rank(num){

​

        switch(num){

​

          case 1 :

​

          return '🥇';

​

          case 2 :

​

          return '🥈';

​

          case 3 : 

​

          return '🥉';

​

        }

​

        return num + '위';

​

    }

​

}

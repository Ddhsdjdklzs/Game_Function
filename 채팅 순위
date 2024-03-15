let List = [];

​

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){

    

    if(msg.trim()){

        let i = List.findIndex(function(n){

            return n.Name === sender;

        });

        if(i !== -1){

            List[i].Count++;

        }

        else{

            List.push({'Name' : sender, 'Count' : 1});

        }

        List = List.sort((a, b) => b.Count - a.Count);

    }

​

    if(msg === '채팅순위'){

        let res = '';

        for(i in List){

            res += '[' + rank(Number(i) + 1) + ']' + List[i].Name + ' : ' + List[i].Count + '\n\n';

        }

        replier.reply('전체 채팅순위' + '\u200b'.repeat(500) + '\n\n' + res);

    }

    

    function rank(num){

        switch(num){

          case 1:

          return '🥇';

          case 2:

          return '🥈';

          case 3: 

          return '🥉';

        }

        return num + '위';

      }

​

}

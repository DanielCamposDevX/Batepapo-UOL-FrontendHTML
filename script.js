axios.defaults.headers.common['Authorization'] = 'tCZmUmsoQR8l0Tl0SXBDYjcu';




const nome = prompt('Qual é o seu nome?');
const entrando = {
    name: nome,
};
const nomepromise = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants', entrando);
nomepromise.then(participants);
nomepromise.catch(Deuruim);
setInterval(msgload, 3000);


function msgload() {
    const msgsearch = axios.get('https://mock-api.driven.com.br/api/vm/uol/messages')
    msgsearch.then(msgrender);
}

function msgrender(msgs) {
    const chat = document.querySelector('.chat');
    chat.innerHTML = '';
    const quantas = msgs.data.length;
    for (i = 0; i < quantas; i++) {
        let mensage = msgs.data[i];
        if(mensage.type == 'message'){
        chat.innerHTML += '<div class="msg"><div class="hour">' + mensage.time + '</div> <div class="user">' + mensage.from + '</div> <div class="texto"> para  ' +mensage.to +': '+ mensage.text + '</div></div>';
        }
        else if(mensage.type == 'status'){
        chat.innerHTML += '<div class="msgstatus"><div class="hour">' + mensage.time + '</div> <div class="user">' + mensage.from + '</div> <div class="texto">'+ mensage.text + '</div></div>';
        };
        chat.scrollIntoView({ block: "end", inline: "nearest" });
    }
    }



/*nome não está em uso*/
function participants() {
    console.log(nomepromise)
    const chat = document.querySelector('.chat');

    chat.innerHTML += '<div class="msgstatus"><div class="user">' + entrando.name + '</div> <div class="texto">Entrou na sala</div> </div>';
    console.log(chat);
    setInterval(atividade, 5000);
}



/*nome está em uso*/
function Deuruim() {
    const nome = prompt('Qual é o seu nome?');
    const entrando = {
        name: nome,
    };
    const nomepromise1 = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants', entrando);
    nomepromise1.then(participants);
    nomepromise1.catch(Deuruim);
}

/*manter online*/
function atividade() {
    const onlinepromise = axios.post('https://mock-api.driven.com.br/api/vm/uol/status', entrando);
}


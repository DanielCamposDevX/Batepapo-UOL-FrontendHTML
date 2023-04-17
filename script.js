axios.defaults.headers.common['Authorization'] = 'tCZmUmsoQR8l0Tl0SXBDYjcu';




const nome = prompt('Qual é o seu nome?');
const entrando = {
    name: nome,
};

const nomepromise = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants', entrando);
nomepromise.then(participants);
nomepromise.catch(Deuruim);



/*carrega mensagens*/
function msgload() {
    const msgsearch = axios.get('https://mock-api.driven.com.br/api/vm/uol/messages')
    msgsearch.then(msgrender);
}

/*renderiza mensagens*/
function msgrender(msgs) {
    const chat = document.querySelector('.chat');
    const barra = document.querySelector('.bottom');
    chat.innerHTML = '';
    const quantas = msgs.data.length;
    for (i = 0; i < quantas; i++) {
        let mensage = msgs.data[i];
        if (mensage.type == 'message') {
            chat.innerHTML += '<div class="msg"  data-test="message"><div class="hour">' + mensage.time + '</div> <div class="user">' + mensage.from + '</div> <div class="texto1"> para  ' + mensage.to + ': </div> <div class="texto">' + mensage.text + '</div></div>';
        }
        else if (mensage.type == 'status') {
            chat.innerHTML += '<div class="msgstatus"  data-test="message"><div class="hour">' + mensage.time + '</div> <div class="user">' + mensage.from + '</div> <div class="texto">' + mensage.text + '</div></div>';
        };
        barra.scrollIntoView({ block: "end", inline: "nearest" });
    }
}

/*envia mensagem*/
function sendmsg() {
    let msgtext = document.querySelector('.escreva').value;
    const msg = {
        from: nome,
        to: "Todos",
        text: msgtext,
        type: "message"
    }
    const promisse = axios.post('https://mock-api.driven.com.br/api/vm/uol/messages', msg);
    promisse.then = msgload();
    promisse.catch = window.location.reload();
    msgtext = '';
}







/*nome não está em uso*/
function participants() {
    setInterval(msgload, 3000);
    setInterval(atividade, 5000);
    console.log(nomepromise)
    const chat = document.querySelector('.chat');
    chat.innerHTML += '<div class="msgstatus"  data-test="message" ><div class="user">' + entrando.name + '</div> <div class="texto">Entrou na sala</div> </div>';
    console.log(chat);
    
}



/*nome está em uso*/
function Deuruim() {
    window.location.reload();
}






/*manter online*/
function atividade() {
    const onlinepromise = axios.post('https://mock-api.driven.com.br/api/vm/uol/status', entrando);
}


function menu() {
    const sidebar = document.querySelector('.menu');
    sidebar.classList.toggle('escondido');
}



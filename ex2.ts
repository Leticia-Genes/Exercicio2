interface Pessoa {
	id: number;
    name: string;
    bio: string;
}

//percorre a lista até encontrar a pessoa dona do id
//se encontrar, retorna sua bio, caso contrário, retorna mensagem de erro
function retornaBioImperativo(id: number) : string {
    let bio;
    for(let i=0; i<lista.length; i++) {
        if(lista[i].id == id) {
            bio = lista[i].bio;
            break;
        }
    }
    if(bio == null)
        bio = 'Id inválido';

    return bio;
}

//filtra na lista a pessoa correspondente ao id
//retorna sua bio, ou uma mensagem de erro caso não encontre correspondência
function retornaBioFuncional(id: number) : string {
    let filtro = lista.filter(function(item) {return item.id == id})

    return filtro.length == 0 ? 'Id inválido' : filtro[0].bio;
}

//percorre a lista até encontrar a pessoa dona do id
//se encontrar, retorna seu nome, caso contrário, retorna mensagem de erro
function retornaNameImperativo(id: number) : string {
    let nome;
    for(let i=0; i<lista.length; i++) {
        if(lista[i].id == id) {
            nome = lista[i].name;
            break;
        }
    }
    if(nome == null)
        nome = 'Id inválido';

    return nome;
}

//filtra na lista a pessoa correspondente ao id
//retorna seu nome, ou uma mensagem de erro caso não encontre correspondência
function retornaNameFuncional(id: number) : string {
    let filtro = lista.filter(function(item) {return item.id == id})

    return filtro.length == 0 ? 'Id inválido' : filtro[0].name;
}

//percorre a lista até encontrar a pessoa dona do id
//se encontrar, a remove da lista, caso contrário, mostra mensagem de erro
function apagaItemImperativo(id: number) {
    for(let i=0; i<lista.length; i++) {
        if(lista[i].id == id) {
            lista.splice(i, 1)
            return;
        }
    }
    console.log('Id inválido');
}

//procura na lista a pessoa correspondente ao id e a remove da lista
//mostra uma mensagem de erro caso não encontre correspondência
function apagaItemFuncional(id: number) {
    if(!lista.some(function(pessoa, index) {
        return pessoa.id == id ? lista.splice(index, 1) : false
    })) {
        console.log('Id inválido');
    }
}

//percorre a lista até encontrar a pessoa dona do id
//se encontrar, altera o name(1) ou bio(2), caso contrário, mostra mensagem de erro
function alteraImperativo(id: number, tipo: number, novo: string) {
    for(let i=0; i<lista.length; i++) {
        if(lista[i].id == id) {
            if(tipo == 1) {
                lista[i].name = novo;
            } else {
                lista[i].bio = novo;
            }
            return;
        }
    }
    console.log('Id inválido');
}

//procura na lista a pessoa correspondente ao id e altera o name(1) ou bio(2)
//mostra uma mensagem de erro caso não encontre correspondência
function alteraFuncional(id: number, tipo: number, novo: string) {
    if(!lista.some(function(pessoa, i) {
        return pessoa.id == id ? (tipo == 1 ? lista[i].name = novo : lista[i].bio = novo) : false
    })) {
        console.log('Id inválido');
    }
}

let lista: Array<Pessoa> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

console.log(retornaBioImperativo(0));
console.log(retornaBioFuncional(2));
console.log(retornaNameImperativo(5));
console.log(retornaNameFuncional(2))
apagaItemImperativo(7);
apagaItemFuncional(2);
//parâmetros da função altera: (id, variável a ser alterada (1 pra name ou 2 pra bio), string com novo conteúdo)
alteraImperativo(1, 1, 'Amanda');
alteraFuncional(4, 2, 'Nova bio');

//situação dos nomes e bios após execução das funções
lista.forEach(function (pessoa) {console.log(pessoa.name)});
lista.forEach(function (pessoa) {console.log(pessoa.bio)});
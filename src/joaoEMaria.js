let joao = 1;
let maria = 2;

function deJoaoParaMaria(params){
    maria = maria + joao;
    joao = 0;
}

function deMariaParaJoao(params){
    joao = joao + maria;
    maria = 0;
}

function getMaria(){
    return maria;
}

function getJoao(){
    return joao;
}

function setMaria(x){
    maria = x;
}

function setJoao(x){
    joao = x;
}
export{deJoaoParaMaria, getMaria, getJoao, deMariaParaJoao, setMaria, setJoao}
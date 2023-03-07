
class Conta {
  constructor(titular,numero,tipo,saldo){
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
  }
}

const banco = {
  clientes:[],
  adicionarCliente(titular,numero,tipo,saldo){
    const novaConta = new Conta(titular,numero,tipo,saldo);
    this.clientes.push(novaConta);
    // ...
  },

  consultarCliente(codigoDeBusca){
    // codigoDeBusca === '02';
    for(let clienteBuscado of this.clientes){
      if(codigoDeBusca === clienteBuscado.titular){
        return clienteBuscado;
      }
    }
  },

  deposito(nomeTitular, valor){
    let resultado = banco.consultarCliente(nomeTitular).saldo;

    return 'Depósito realizado, seu novo saldo é: $' +  (resultado + valor);


  },

  saque(nomeTitular, valor){
    let saldoAtual = banco.consultarCliente(nomeTitular).saldo;
    let resultado = saldoAtual - valor;
    if (resultado < 0){
      return 'Fundos insuficientes';
    }else{
      return 'Extração feita com sucesso, seu novo saldo é: $' +  (resultado);
    }
  }
}

banco.adicionarCliente('Abigael Natte',	5486273622,	'Conta Corrente',	27771);
banco.adicionarCliente('Ramon Connell',	1183971869,	'Conta Poupança',	8675);
banco.adicionarCliente('Jarret Lafuente',	9582019689,	'Conta Poupança',	27363);
banco.adicionarCliente('Ansel Ardley',	1761924656,	'Conta Poupança',	32415);
banco.adicionarCliente('Jacki Shurmer',	7401971607,	'Conta Poupança',	28776);
banco.adicionarCliente('Jobi Mawtus',	630841470,	'Conta Corrente',	2177);
banco.adicionarCliente('Thomasin Latour',	4223508636,	'Conta Corrente',	25994);
banco.adicionarCliente('Lonnie Verheijden',	185979521,	'Conta Poupança',	7601);
banco.adicionarCliente('Alonso Wannan',	3151956165,	'Conta Corrente',	33196);
banco.adicionarCliente('Bendite Huggett',	2138105881,	'Conta Poupança',	18789);

//console.log(banco.clientes);


//console.log(banco.consultarCliente('Abigael Natte'));

//console.log(banco.deposito('Abigael Natte', 1000));

// console.log(banco.saque('Abigael Natte', 3000));





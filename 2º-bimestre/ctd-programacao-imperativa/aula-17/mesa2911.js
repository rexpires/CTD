function banco(conta, tipo, saldo, titular) {
    this.conta = conta;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
  }
  const conta = {
    bancos: [],
    adicionarConta(conta, tipo, saldo, titular) {
      const novoBanco = new banco(conta, tipo, saldo, titular);
      this.bancos.push(novoBanco);
    },
  
    buscarPorNome(valorDeBusca){
      const arrayDeEncontrados = [];
      for(let banco of this.bancos){
        if(banco.titular.includes(valorDeBusca)){
          arrayDeEncontrados.push(banco);
        }
      }
      return arrayDeEncontrados;
    },
  };
  
  conta.adicionarConta(5486273622, "cCorrente", 27771, "AbigaelNatte");
  conta.adicionarConta(1183971869, "cPoupança", 8675, "RamonConnell");
  conta.adicionarConta(9582019689, "cPoupança", 27363, "RJarretLafuente");
  conta.adicionarConta(1761924656, "cPoupança", 32415, "AnselArdley");
  conta.adicionarConta(7401971607, "cPoupança", 18789, "JackiShurmer");
  conta.adicionarConta(630841470, "cCorrente", 28776, "JobiMawtuso");
  conta.adicionarConta(4223508636, "cCorrente", 2177, "ThomasinLatour");
  conta.adicionarConta(185979521, "cPoupança", 25994, "LonnieVerheijden");
  conta.adicionarConta(3151956165, "cCorrente", 7601, "AlonsoWannan");
  conta.adicionarConta(2138105881, "cPoupança", 33196, "BenditeHuggett");
  console.log(conta.bancos);
  bancos.includes ('th');
  
  //conta.buscarProduto ('AlonsoWannan');
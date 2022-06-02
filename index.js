function verificaNumero(){

    var readline = require('readline');
    
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question('Digite um número!\n', (numero) => {
        if(numero%2 == 0){
            var par = true;
            console.log('O número digitado é par!');
            console.log(par);
            console.log(typeof(par));
        }else{
            var impar = false;
            console.log('O número digitado é impar!');
            console.log(impar);
            console.log(typeof(impar));
        }
    });
    
    }
    
    verificaNumero();
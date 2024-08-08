// a cada 3 ingressos o cliente ganha 1 porção de batata frita

let totalIngresso = 5;
let batataFrita = 0;

for (let i = 1; i <= totalIngresso; i++) {
    if (i % 3 === 0) {
        batataFrita++;
    } 
} 

if (batataFrita >0){
    console.log("Você ganhou uma porção de batata frita! Total de porções:" + batataFrita);
} else{
    console.log("Ops, você não tem batatas fritas disponíveis");
}

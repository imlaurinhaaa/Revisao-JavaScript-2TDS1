let armas = ["Ziggy", "laser", "lança-chamas", "espada", "canhão-de-plasma", "confete"];
let ataques = [];

ataques.push(armas[2]);
ataques.push(armas[1]);
ataques.push(armas[3]);
ataques.push(armas[4]);

for(let i= 0; i < ataques.length; i++ ){
    if(ataques[i] == armas[2]){
        console.log("Nome do robô: " + armas[0])
    }
    console.log("Ataque", i+1 + ": " + ataques[i]);
}
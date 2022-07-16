let salário = parseInt(prompt ('Qual o seu salário em R$?'));

if (salário > 1250){
    let aumento = salário + (salário * 10 / 100);
    alert (`Atencao! o seu salário corresponde a ${aumento}`);
}

else{ (salário <= 1250)
    let diminuição = salário + (salário * 15 / 100);
    alert (`Atencao! o seu salário corresponde a ${diminuição}`);
}


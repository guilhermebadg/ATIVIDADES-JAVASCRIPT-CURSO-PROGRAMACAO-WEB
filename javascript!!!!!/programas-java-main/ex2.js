let velocidade = prompt ('Atencao! Digite aqui a sua velocidade em km/h')

if (velocidade > 80){
    let multa = (velocidade-80) * 5
  alert (`Atencao! A sua velocidade está acima de 80 km/h. A sua multa é de R${multa}`)
}

else {
    alert ('Muito bem! A sua velocidade está dentro do limite permitido')
}


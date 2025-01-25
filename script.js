const botao = document.querySelector('.btn');

botao.addEventListener('mouseenter', function mouseEntra(){
  botao.style.transform = 'scale(1.03)'
})
botao.addEventListener('mouseout', function mouseSai(){
  botao.style.transform = 'scale(1)'
})

botao.addEventListener('click', function calcular(){
  let numero = document.querySelector('#txtnumber');
  let caixa = document.querySelector('.caixa');
  let res = document.querySelector('.resultado');

  if (isNaN(numero.value) || numero.value <= 0) {
    res.innerHTML = 'Informe um número válido.'
    return;
  } else {
    res.innerHTML = `A tabuada do ${numero.value} é`
    caixa.innerHTML = '';

    for(let i = 1; i <= 10; i++) {
      caixa.innerHTML += `${numero.value} x ${i} = ${numero.value * i} <br>`;
    }
  }
})
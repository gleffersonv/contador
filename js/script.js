function contar() {
  let inicio = document.querySelector("#txtstart");
  let fim = document.querySelector("#txtend");
  let passo = document.querySelector("#txtnext");
  let res = document.querySelector("#res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML =  'Impossivel contar!'
    window.alert("[ERRO] Faltam dados!");
    
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0){
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
    if (i < f){
        for (let count = i; count <= f; count += p) {
              res.innerHTML += `${count}\u{1f449}`
        }
    }else{
      for (let count = i; count >= f; count -= p){
            res.innerHTML += `${count} \u{1f449}`
      }
    }
    res.innerHTML += `\u{1f3c1}`
  }
    
}

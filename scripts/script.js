function mudarCor() {
  let hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  let hexcode = ''

  for(let cont = 0; cont < 6; cont++){
    let indiceAleatorio = Math.floor(Math.random() * hex_numbers.length);

    hexcode += hex_numbers[indiceAleatorio]
  }

  document.getElementById("hex-code").innerHTML = hexcode
  document.getElementById("hex-code").style.color = `#${hexcode}`
  document.getElementsByTagName("body")[0].style.background = `#${hexcode}`
}

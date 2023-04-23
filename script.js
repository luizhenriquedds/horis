function carregar() {
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`
  
    if (hora >= 0 && hora <= 12) {
      //BOM DIA!!!
      img.src = 'manha.png'
      document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
      //BOA TARDE!!!
      img.src = 'tarde.png'
      document.body.style.background = '#b9846f'
    } else {
      //BOA NOITE!!!
      img.src = 'noite.png'
      document.body.style.background = '#515154'
    }
  }
  
  setInterval(carregar, 1000)
  
  function verificar() {
    const data = new Date()
    let ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')
  
    if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      const fsex = document.getElementsByName('radsex')
      const idade = ano - Number(fano.value)
      let genero = ''
      const img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
          //Criança!
          img.setAttribute('src', 'foto-crianca-m.png')
        } else if (idade < 21) {
          //Jovem!
          img.setAttribute('src', 'foto-jovem-m.png')
        } else if (idade < 50) {
          img.setAttribute('src', 'foto-adulto-m.png')
        } else {
          //Idoso
          img.setAttribute('src', 'foto-idoso-m.png')
        }
      } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
          //criança
          img.setAttribute('src', 'foto-crianca-f.png')
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'foto-adulto-f.png')
        } else {
          //Idoso
          img.setAttribute('src', 'foto-idoso-f.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
    }
  }
  
setInterval(function relog(){
    let rels = document.getElementById('relogio')
    let data = new Date()
    let hor = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    if(hor < 10){
        hor = `0${hor}`
    }
    if (min < 10){
        min = `0${min}`
    }
    if (sec < 10){
        sec = `0${sec}`
    }
    rels.innerHTML = `${hor}:${min}:${sec}`
},1000)
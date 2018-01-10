function veranderstoplicht() {
    var stoplicht = document.getElementById('stoplicht');
    if (stoplicht.src.match("stoplicht")){
        stoplicht.src = "";
    } else{
        stoplicht.src = "";
    }

}
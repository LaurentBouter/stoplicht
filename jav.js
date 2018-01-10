var werken;              //animatie heet 'werken'//
var buitenwerking;     //animatie heet "buitenwerking'//
var stoplicht = document.getElementById('stoplicht');
stoplicht.style.position = 'absolute';
stoplicht.style.left = '715px';
stoplicht.style.right = '510px';

function aanzetten() {
    clearTimeout(buitenwerking);
    maakRood();
    werken = setTimeout(maakGroen, 4000);
    werken = setTimeout(maakGeel, 8000);
    werken = setTimeout(aanzetten, 1000);
}

function knipperen() {
    clearTimeout(werken);
    maakGeel();
    buitenwerking = setTimeout(zetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);

}

function uitzetten() {
    zetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}

function maakRood() {
    stoplicht.src="./verkeer/stoplichtrood.png";

}

function maakgroen() {
    stoplicht.src="./verkeer/stoplichtgroen.png";
}

function maakgeel() {
    stoplicht.src="./verkeer/stoplichtgeel.png";

}

function zetUit() {
    stoplicht.src="./verkeer/stoplichtuit.png";
}


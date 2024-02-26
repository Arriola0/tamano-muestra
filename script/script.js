const E = document.getElementById("E");
const Z = document.getElementById("Z");
const p = document.getElementById("p");
const q = document.getElementById("q");
const btn = document.getElementById("btn");
const espacioResultado = document.getElementById("espacioResultado");




const Eformula2 = document.getElementById("Eformula2");
const Zformula2 = document.getElementById("Zformula2");
const pformula2 = document.getElementById("pformula2");
const qformula2 = document.getElementById("qformula2");
const btn2 = document.getElementById("btn2");
const espacioResultado2 = document.getElementById("espacioResultado2");



const Eformula3 = document.getElementById("Eformula3");
const Zformula3 = document.getElementById("Zformula3");
const Oformula3 = document.getElementById("Oformula3");
const btn3 = document.getElementById("btn3");
const espacioResultado3 = document.getElementById("espacioResultado3");




const Nformula4 = document.getElementById("Nformula4");
const Dformula4 = document.getElementById("Dformula4");
const btn4 = document.getElementById("btn4");
const espacioResultado4 = document.getElementById("espacioResultado4");



const Nformula5 = document.getElementById("Nformula5");
const Zformula5 = document.getElementById("Zformula5");
const Dformula5 = document.getElementById("Dformula5");
const pformula5 = document.getElementById("pformula5");
const qformula5 = document.getElementById("qformula5");
const btn5 = document.getElementById("btn5");
const espacioResultado5 = document.getElementById("espacioResultado5");




const Nformula6 = document.getElementById("Nformula6");
const Zformula6 = document.getElementById("Zformula6");
const Eformula6 = document.getElementById("Eformula6");
const Oformula6 = document.getElementById("Oformula6");
const btn6 = document.getElementById("btn6");
const espacioResultado6 = document.getElementById("espacioResultado6");




const Nformula7 = document.getElementById("Nformula7");
const btn7 = document.getElementById("btn7");
const espacioResultado7 = document.getElementById("espacioResultado7");





btn.addEventListener("click", ()=>{
    let valorE = parseFloat(E.value);
    let valorZ = parseFloat(Z.value);
    let valorp = parseFloat(p.value);
    let valorq = parseFloat(q.value);
   
    let pasoUno = valorZ * valorZ;
    let pasoDos = pasoUno * valorp * valorq;
    let pasoTres = valorE * valorE;
    let pasoCuatro = pasoTres.toFixed(4);
    let pasoCinco = pasoDos / pasoCuatro;

    

    espacioResultado.innerHTML = `Resultado = <b>${pasoCinco}</b>`;

});


btn2.addEventListener("click", ()=>{
    let valorE = parseFloat(Eformula2.value);
    let valorZ = parseFloat(Zformula2.value);
    let valorp = parseFloat(pformula2.value);
    let valorq = parseFloat(qformula2.value);

    let pasoUno = valorZ * valorZ;
    let pasoDos = pasoUno * valorq;
    let pasoTres = valorE * valorE;
    let pasoCuatro = pasoTres.toFixed(4);
    let pasoCinco = pasoCuatro * valorp;
    let pasoSeis = pasoDos / pasoCinco;



    espacioResultado2.innerHTML = `Respuesta = <b>${pasoSeis}</b>`;
})





btn3.addEventListener("click", ()=>{
    let valorE = Eformula3.value;
    let valorZ = Zformula3.value;
    let valorO = Oformula3.value;

    let pasoUno = valorZ * valorZ;
    let pasoDos = valorO * valorO;
    let pasoTres = pasoUno * pasoDos;
    let pasoCuatro = valorE * valorE;
    let pasoCinco = pasoCuatro.toFixed(4);
    let pasoSeis = pasoTres / pasoCinco;


    espacioResultado3.innerHTML = `Respuesta = <b>${pasoSeis}<b>`;
})



btn4.addEventListener("click", ()=>{
    let valorN = Nformula4.value;
    let valorD = Dformula4.value;

    let pasoUno = valorD * valorD;
    let pasoDos = (valorN * pasoUno) + 1;
    let pasoTres = valorN / pasoDos;

    espacioResultado4.innerHTML = `Resultado = <b>${pasoTres}</b>`;
})




btn5.addEventListener("click", ()=>{
    let valorN = Nformula5.value;
    let valorZ = Zformula5.value;
    let valorD = Dformula5.value;
    let valorp = pformula5.value;
    let valorq = qformula5.value;

    let pasoUno = valorZ * valorZ;
    let pasoDos = valorN * pasoUno * valorp * valorq;

    let pasoTres = valorD * valorD;
    let pasoCuatro = valorN - 1;
    let pasoCinco = (pasoTres * pasoCuatro) + (pasoUno * valorp * valorq);

    let pasoSeis = pasoDos / pasoCinco;


    espacioResultado5.innerHTML = `Resultado = <b>${pasoSeis}</b>`;

})



btn6.addEventListener("click", ()=>{
    let valorN = Nformula6.value;
    let valorZ = Zformula6.value;
    let valorE = Eformula6.value;
    let valorO = Oformula6.value;


    let pasoUno = valorZ * valorZ;
    let pasoDos = valorO * valorO;
    let pasoTres = valorN * pasoUno * pasoDos;

    let pasoCuatro = valorE * valorE;
    let pasoCinco = valorN - 1;
    let pasoSeis = (pasoUno * pasoDos) + (pasoCuatro * pasoCinco);

    let pasoSiete = pasoTres / pasoSeis;


    espacioResultado6.innerHTML = `Resultado = <b>${pasoSiete}</b>`;

})




btn7.addEventListener("click", ()=>{
    let valorN = Nformula7.value;

    let pasoUno = Math.sqrt(valorN);
    
    espacioResultado7.innerHTML = `Resultado = <b>${pasoUno}</b>`;
})





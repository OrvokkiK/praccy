'use strict';

// Analyysin tekstit
let lowBmi = `Jos painoindeksi on alle 18,5, se merkitsee liiallista laihuutta. Sen syynä voi olla jokin pitkällinen sairaus tai laihuushäiriö eli anoreksia. Jos varsinaista sairautta ei ole, mutta painoindeksi on laskenut alle 18,5:n, pitää hakeutua lääkäriin. Jos paino muutamassa kuukaudessa on laskenut yli 20:n tasolta reilusti, on varminta mennä lääkäriin jo painoindeksin lähestyessä 19:ää.`;

let normalBmi = `Normaaliksi on valittu se painoindeksin alue, jossa ihmisen terveys on parhaimmillaan. Normaali painoindeksin alue on välillä 18,5–25. Jos painoindeksi on pienempi kuin 18,5 tai suurempi kuin 25, sairauksien vaara suurenee. Painoindeksiä voidaan käyttää 18 vuoden iästä lähtien.`;

let highBmi = `Kun painoindeksi ylittää 25, ollaan liikapainon puolella. Liikakilojen määrä voi vaihdella erittäin paljon, muutamasta kilosta moniin kymmeniin kiloihin. Siksi on hyödyllistä täsmentää, kuinka suuresta ylipainosta on kyse.`;


// Näyttää analyysin sivulla
// hakee ensimmäisen, minkä löytää
 const analysis = document.querySelector('.analysis');
 console.log(analysis);
 // console.log(analysis.innerText);


//Tietoje muokkaus
analysis.textContent = '';

//Napin painallus, käyttäjä syötteen kontrollointi
const myButton = document.querySelector('.calculate');

myButton.addEventListener('click', function (evt) {

    const weight = Number(document.getElementById('weight').value);
    // console.log(weight);

    const height = Number(document.getElementById('height').value);
    if (!weight || !height || height < 0 || weight < 0) {
        window.alert('Muista antaa arvot!');
    } else {
        reset();
        bmicalc(weight, height);
    }
});

//Laskee BMI:n, näyttää analyysin, tekee highlightit
function bmicalc(weight, height) {
    console.log('Lasketaan BMI');
    let bmi = (weight / ((height * height) / 10000)).toFixed(1);
    console.log(bmi)
    document.querySelector('.bmi-score').textContent = bmi;

    if (bmi < 19) {
        console.log('Alipaino');
        document.querySelector('.analysis').textContent = lowBmi;
        document.querySelector('.bmi0-19').style.backgroundColor = 'orange';
    } else if (bmi > 25) {
        console.log('Ylipaino');
        document.querySelector('.analysis').textContent = highBmi;
        document.querySelector('.bmi25-30').style.backgroundColor = 'orange';
    } else {
        console.log('Normaalipaino');
        document.querySelector('.analysis').textContent = normalBmi;
        document.querySelector('.bmi19-25').style.backgroundColor = 'green';
        console.log('Mihin se väri meni?'); 
        document.querySelector('.bmi19-25').classList.add('normalBmi');
    }

};

//Palauttaa formin alkumuotoon ja  highlightit valkoiseksi
function reset() {
    document.querySelector('form').reset();
    console.log(' style reset');
    document.querySelectorAll('.bmi-table tbody tr').forEach(row => {
        row.style.backgroundColor = 'white';
    });

};

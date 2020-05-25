console.log('Ladattu: kuormitus.js');
// Valinnat

const tulosTaulu = document.getElementById('tulosA');
const yleinenTaulu = document.getElementById('yleinenA');

function calculate() {

    // Virrat

    let materiaaliValinta = document.getElementById('materiaali');
    let kaapelikokoValinta = document.getElementById('kaapelikoko');
    let asennustapaValinta = document.getElementById('asennustapa');
    let kuumatilaValinta = document.getElementById('kuumatila');

    let materiaali = materiaaliValinta.value;
    let kaapelikoko = kaapelikokoValinta.value;
    let asennustapa = asennustapaValinta.value;

    console.clear();

    console.log('Kaapelin materiaali: ' + materiaali);
    console.log('Kaapelin koko: ' + kaapelikoko);
    console.log('Kaapelin asennustapa: ' + asennustapa);

    let tulos;
    let yleinen;

    if (materiaali === '0' || kaapelikoko === '0' || asennustapa === '0') {
        tulos = '0';
        yleinen = '0';
    } else if (materiaali === 'kupari' && kaapelikoko === '1.5' && asennustapa === 'ua') {
        tulos = cu_1_5.ua;
        yleinen = cu_1_5.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '1.5' && asennustapa === 'pa') {
        tulos = cu_1_5.pa;
        yleinen = cu_1_5.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '1.5' && asennustapa === 'maa') {
        tulos = cu_1_5.maa;
        yleinen = cu_1_5.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '1.5' && asennustapa === 'ilma') {
        tulos = cu_1_5.ilma;
        yleinen = cu_1_5.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '2.5' && asennustapa === 'ua') {
        tulos = cu_2_5.ua;
        yleinen = cu_2_5.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '2.5' && asennustapa === 'pa') {
        tulos = cu_2_5.pa;
        yleinen = cu_2_5.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '2.5' && asennustapa === 'maa') {
        tulos = cu_2_5.maa;
        yleinen = cu_2_5.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '2.5' && asennustapa === 'ilma') {
        tulos = cu_2_5.ilma;
        yleinen = cu_2_5.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '6' && asennustapa === 'ua') {
        tulos = cu_6.ua;
        yleinen = cu_6.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '6' && asennustapa === 'pa') {
        tulos = cu_6.pa;
        yleinen = cu_6.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '6' && asennustapa === 'maa') {
        tulos = cu_6.maa;
        yleinen = cu_6.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '6' && asennustapa === 'ilma') {
        tulos = cu_6.ilma;
        yleinen = cu_6.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '10' && asennustapa === 'ua') {
        tulos = cu_10.ua;
        yleinen = cu_10.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '10' && asennustapa === 'pa') {
        tulos = cu_10.pa;
        yleinen = cu_10.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '10' && asennustapa === 'maa') {
        tulos = cu_10.maa;
        yleinen = cu_10.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '10' && asennustapa === 'ilma') {
        tulos = cu_10.ilma;
        yleinen = cu_10.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '16' && asennustapa === 'ua') {
        tulos = cu_16.ua;
        yleinen = cu_16.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '16' && asennustapa === 'pa') {
        tulos = cu_16.pa;
        yleinen = cu_16.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '16' && asennustapa === 'maa') {
        tulos = cu_16.maa;
        yleinen = cu_16.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '16' && asennustapa === 'ilma') {
        tulos = cu_16.ilma;
        yleinen = cu_16.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '25' && asennustapa === 'ua') {
        tulos = cu_25.ua;
        yleinen = cu_25.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '25' && asennustapa === 'pa') {
        tulos = cu_25.pa;
        yleinen = cu_25.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '25' && asennustapa === 'maa') {
        tulos = cu_25.maa;
        yleinen = cu_25.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '25' && asennustapa === 'ilma') {
        tulos = cu_25.ilma;
        yleinen = cu_25.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '35' && asennustapa === 'ua') {
        tulos = cu_35.ua;
        yleinen = cu_35.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '35' && asennustapa === 'pa') {
        tulos = cu_35.pa;
        yleinen = cu_35.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '35' && asennustapa === 'maa') {
        tulos = cu_35.maa;
        yleinen = cu_35.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '35' && asennustapa === 'ilma') {
        tulos = cu_35.ilma;
        yleinen = cu_35.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '50' && asennustapa === 'ua') {
        tulos = cu_50.ua;
        yleinen = cu_50.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '50' && asennustapa === 'pa') {
        tulos = cu_50.pa;
        yleinen = cu_50.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '50' && asennustapa === 'maa') {
        tulos = cu_50.maa;
        yleinen = cu_50.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '50' && asennustapa === 'ilma') {
        tulos = cu_50.ilma;
        yleinen = cu_50.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '70' && asennustapa === 'ua') {
        tulos = cu_70.ua;
        yleinen = cu_70.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '70' && asennustapa === 'pa') {
        tulos = cu_70.pa;
        yleinen = cu_70.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '70' && asennustapa === 'maa') {
        tulos = cu_70.maa;
        yleinen = cu_70.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '70' && asennustapa === 'ilma') {
        tulos = cu_70.ilma;
        yleinen = cu_70.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '95' && asennustapa === 'ua') {
        tulos = cu_95.ua;
        yleinen = cu_95.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '95' && asennustapa === 'pa') {
        tulos = cu_95.pa;
        yleinen = cu_95.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '95' && asennustapa === 'maa') {
        tulos = cu_95.maa;
        yleinen = cu_95.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '95' && asennustapa === 'ilma') {
        tulos = cu_95.ilma;
        yleinen = cu_95.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '120' && asennustapa === 'ua') {
        tulos = cu_120.ua;
        yleinen = cu_120.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '120' && asennustapa === 'pa') {
        tulos = cu_120.pa;
        yleinen = cu_120.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '120' && asennustapa === 'maa') {
        tulos = cu_120.maa;
        yleinen = cu_120.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '120' && asennustapa === 'ilma') {
        tulos = cu_120.ilma;
        yleinen = cu_120.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '150' && asennustapa === 'ua') {
        tulos = cu_150.ua;
        yleinen = cu_150.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '150' && asennustapa === 'pa') {
        tulos = cu_150.pa;
        yleinen = cu_150.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '150' && asennustapa === 'maa') {
        tulos = cu_150.maa;
        yleinen = cu_150.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '150' && asennustapa === 'ilma') {
        tulos = cu_150.ilma;
        yleinen = cu_150.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '185' && asennustapa === 'ua') {
        tulos = cu_185.ua;
        yleinen = cu_185.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '185' && asennustapa === 'pa') {
        tulos = cu_185.pa;
        yleinen = cu_185.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '185' && asennustapa === 'maa') {
        tulos = cu_185.maa;
        yleinen = cu_185.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '185' && asennustapa === 'ilma') {
        tulos = cu_185.ilma;
        yleinen = cu_185.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '240' && asennustapa === 'ua') {
        tulos = cu_240.ua;
        yleinen = cu_240.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '240' && asennustapa === 'pa') {
        tulos = cu_240.pa;
        yleinen = cu_240.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '240' && asennustapa === 'maa') {
        tulos = cu_240.maa;
        yleinen = cu_240.yleinen;
    } else if (materiaali === 'kupari' && kaapelikoko === '240' && asennustapa === 'ilma') {
        tulos = cu_240.ilma;
        yleinen = cu_240.yleinen;
    } else if (materiaali === 'alumiini' && kaapelikoko === '16' && asennustapa === 'ua') {
        tulos = cu_16.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '16' && asennustapa === 'pa') {
        tulos = cu_16.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '16' && asennustapa === 'maa') {
        tulos = cu_16.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '16' && asennustapa === 'ilma') {
        tulos = cu_16.au_ilma;
    } else if (materiaali === 'alumiini' && kaapelikoko === '25' && asennustapa === 'ua') {
        tulos = cu_25.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '25' && asennustapa === 'pa') {
        tulos = cu_25.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '25' && asennustapa === 'maa') {
        tulos = cu_25.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '25' && asennustapa === 'ilma') {
        tulos = cu_25.au_ilma;
    } else if (materiaali === 'alumiini' && kaapelikoko === '35' && asennustapa === 'ua') {
        tulos = cu_35.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '35' && asennustapa === 'pa') {
        tulos = cu_35.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '35' && asennustapa === 'maa') {
        tulos = cu_35.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '35' && asennustapa === 'ilma') {
        tulos = cu_35.au_ilma;
    } else if (materiaali === 'alumiini' && kaapelikoko === '50' && asennustapa === 'ua') {
        tulos = cu_50.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '50' && asennustapa === 'pa') {
        tulos = cu_50.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '50' && asennustapa === 'maa') {
        tulos = cu_50.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '50' && asennustapa === 'ilma') {
        tulos = cu_50.au_ilma;
    } else if (materiaali === 'alumiini' && kaapelikoko === '70' && asennustapa === 'ua') {
        tulos = cu_70.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '70' && asennustapa === 'pa') {
        tulos = cu_70.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '70' && asennustapa === 'maa') {
        tulos = cu_70.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '70' && asennustapa === 'ilma') {
        tulos = cu_70.au_ilma;
    } else if (materiaali === 'alumiini' && kaapelikoko === '95' && asennustapa === 'ua') {
        tulos = cu_95.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '95' && asennustapa === 'pa') {
        tulos = cu_95.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '95' && asennustapa === 'maa') {
        tulos = cu_95.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '95' && asennustapa === 'ilma') {
        tulos = cu_95.au_ilma;
    } else if (materiaali === 'alumiini' && kaapelikoko === '120' && asennustapa === 'ua') {
        tulos = cu_120.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '120' && asennustapa === 'pa') {
        tulos = cu_120.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '120' && asennustapa === 'maa') {
        tulos = cu_120.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '120' && asennustapa === 'ilma') {
        tulos = cu_120.au_ilma;
    } else if (materiaali === 'alumiini' && kaapelikoko === '150' && asennustapa === 'ua') {
        tulos = cu_150.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '150' && asennustapa === 'pa') {
        tulos = cu_150.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '150' && asennustapa === 'maa') {
        tulos = cu_150.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '150' && asennustapa === 'ilma') {
        tulos = cu_150.au_ilma;
    } else if (materiaali === 'alumiini' && kaapelikoko === '185' && asennustapa === 'ua') {
        tulos = cu_185.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '185' && asennustapa === 'pa') {
        tulos = cu_185.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '185' && asennustapa === 'maa') {
        tulos = cu_185.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '185' && asennustapa === 'ilma') {
        tulos = cu_185.au_ilma;
    } else if (materiaali === 'alumiini' && kaapelikoko === '240' && asennustapa === 'ua') {
        tulos = cu_240.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '240' && asennustapa === 'pa') {
        tulos = cu_240.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '240' && asennustapa === 'maa') {
        tulos = cu_240.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '240' && asennustapa === 'ilma') {
        tulos = cu_240.au_ilma;
    } else if (materiaali === 'alumiini' && kaapelikoko === '300' && asennustapa === 'ua') {
        tulos = cu_300.au_ua;
    } else if (materiaali === 'alumiini' && kaapelikoko === '300' && asennustapa === 'pa') {
        tulos = cu_300.au_pa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '300' && asennustapa === 'maa') {
        tulos = cu_300.au_maa;
    } else if (materiaali === 'alumiini' && kaapelikoko === '300' && asennustapa === 'ilma') {
        tulos = cu_300.au_ilma;
    } else {
        tulos = 'VIRHE ';
    }

    if (materiaali === 'alumiini' && kaapelikoko === '1.5') {
        alert('Alle 16mm2 alumiinikaapeleita ei ole!');
        materiaaliValinta.value = 16;
    } else if (materiaali === 'alumiini' && kaapelikoko === '2.5') {
        alert('Alle 16mm2 alumiinikaapeleita ei ole!');
        materiaaliValinta.value = 16;
    } else if (materiaali === 'alumiini' && kaapelikoko === '6') {
        alert('Alle 16mm2 alumiinikaapeleita ei ole!');
        materiaaliValinta.value = 16;
    } else if (materiaali === 'alumiini' && kaapelikoko === '10') {
        alert('Alle 16mm2 alumiinikaapeleita ei ole!');
        materiaaliValinta.value = 16;
    }

    if (materiaali === 'kupari' && kaapelikoko === '300') {
        alert('Yli 240mm2 kuparikaapeleita ei ole tässä ohjelmassa.')
        kaapelikokoValinta.value = 240;
    }

    if (kuumatilaValinta.checked == true) {
        tulos = tulos * 0.8;
    }


    tulosTaulu.innerText = Math.floor(tulos);
    yleinenTaulu.innerText = Math.floor(yleinen);
}
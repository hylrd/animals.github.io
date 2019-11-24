let animals = document.querySelectorAll('*[id]');
function spellAnimal (animal, lang) {
    let audio =  document.getElementById(`${animal}-${lang}`);
    audio.play()
}
// same thing
// console.log(dog + "-" + en);
// console.log(`${dog}-${en}`); template literal
function selectLang(lang) {
    for(let i = 0; i < animals.length; i++) {
        let name = animals[i].getAttribute("id");
        animals[i].setAttribute("onClick", `spellAnimal("${name}", "${lang}")`);
    }

    for(let i = 0; i < animals.length; i++) {
        console.log("-->> ", animals[i]);
    }
}

//https://ttsmp3.com/
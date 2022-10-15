const inputText = document.querySelector('#txt-input');
const btnTranslate = document.querySelector('#btn-translate');
const outputText = document.querySelector('#txt-output');

btnTranslate.addEventListener("click", translateHandler);

function translateHandler(){
    const readInput = inputText.value;
    const url = "https://api.funtranslations.com/translate/minion.json";
    const combinedUrl = url + "?text=" +readInput;
    
    fetch(combinedUrl)
    .then(response => response.json())
    .then(json => {
        const translatedtext = json.contents.translated;
        outputText.innerText = translatedtext;
    })
    .catch(err => console.log(err));
}

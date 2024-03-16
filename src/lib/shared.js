const t9Letters = {
    'abc': '2',
    'def': '3',
    'ghi': '4',
    'jkl': '5',
    'mno': '6',
    'pqrs': '7',
    'tuv': '8',
    'wxyz': '9'
};

function letterToT9(letter) {
    for (let key in t9Letters) {
        if (key.includes(letter)) {
            return t9Letters[key];
        }
    }
    return ''; 
}

function wordToT9(word) {
    return [...word].map(letter => letterToT9(letter.toLowerCase())).join('');
}

function getWords(t9) {
    
}

function createT9Map(dictionary) {
    const t9Map = {};
    for (let word of dictionary) {
        if (!t9Map[wordToT9(word)]) {
            t9Map[wordToT9(word)] = []
        }
        t9Map[wordToT9(word)].push(word);
    }
    return t9Map;
}


function downloadAsJson(dictionary) {

    // Objekt in JSON umwandeln
    const json = JSON.stringify(dictionary);

    // JSON-Datei zum Download erstellen
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json'; // Der Dateiname
    a.click();
    URL.revokeObjectURL(url);
}

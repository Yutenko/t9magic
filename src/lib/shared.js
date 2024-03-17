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

export async function fetchWithProgress(url, onProgress) {
    // Fetch the resource
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const contentLength = +response.headers.get('Content-Length');
    let receivedLength = 0; // bytes received from the start
    let chunks = []; // array of received binary chunks (comprises the body)

    while (true) {
        const { done, value } = await reader.read();

        if (done) {
            break;
        }

        chunks.push(value);
        receivedLength += value.length;

        // Call the onProgress callback function:
        onProgress(receivedLength, contentLength);
    }

    // Concatenate chunks into a single Uint8Array
    let chunksAll = new Uint8Array(receivedLength);
    let position = 0;
    for (let chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
    }

    // Decode into a text/string if necessary
    let result = new TextDecoder("utf-8").decode(chunksAll);

    // Do something with the result
    return result;
}


var input = document.querySelector("input");

console.log(input.value);

function criptografar() {
    let text = [];

    input.value.split('').forEach(t => {
        if (t == 'e')
            text.push('enter')
        else if (t == 'i')
            text.push('imes')
        else if (t == 'a')
            text.push('ai')
        else if (t == 'o')
            text.push('ober')
        else if (t == 'u')
            text.push('ufat')
        else
            text.push(t)
    })

    console.log(text.join(''));
    return input.value = text.join('')
}

function descriptografar() {
    let text = input.value.replace('ai', 'a')

    text = text.replaceAll('enter', 'e')
    text = text.replaceAll('imes', 'i')
    text = text.replaceAll('ober', 'o')
    text = text.replaceAll('ufat', 'u')


    console.log(text)

    return input.value = text;

    // console.log(text.join(''));
    // return input.value = text.join('')
}

// var encrypt = document.querySelector("encrypt");
// var descrypt = document.querySelector("descrypt");


// encrypt.onclick = criptografar;
// descrypt.onclick = descriptografar;
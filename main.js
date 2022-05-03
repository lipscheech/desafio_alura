var input = document.querySelector("textarea");
// document.getElementById('containerWithText').style.visibility = "none"
let textBoxText = document.getElementById('textBoxText')
let boxText = document.getElementById('boxText')
let boxTextAfter = document.getElementById('boxAfter')



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
    // document.getElementById('text').style.visibility = "none"
    // document.getElementById('containerWithText').style.visibility = "block"
    boxText.style.setProperty('display', 'none')
    boxTextAfter.style.setProperty('display', 'block')
    textBoxText.textContent = text.join('')
}

function descriptografar() {
    let text = input.value.replace('ai', 'a')

    text = text.replaceAll('enter', 'e')
    text = text.replaceAll('imes', 'i')
    text = text.replaceAll('ober', 'o')
    text = text.replaceAll('ufat', 'u')


    

    // return input.value = text;

    // console.log(text.join(''));
    // return input.value = text.join('')
}

// var encrypt = document.querySelector("encrypt");
// var descrypt = document.querySelector("descrypt");


// encrypt.onclick = criptografar;
// descrypt.onclick = descriptografar;
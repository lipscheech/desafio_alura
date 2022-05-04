var input = document.querySelector("textarea");
let textBoxText = document.getElementById('textBoxText')
let boxText = document.getElementById('boxText')
let boxTextAfter = document.getElementById('boxAfter')



console.log(input.value);

function criptografar() {
    let text = [];

    if (input.value) {
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

        boxText.style.setProperty('display', 'none')
        boxTextAfter.style.setProperty('display', 'block')
        textBoxText.textContent = text.join('')
    }
}

function descriptografar() {

    if (input.value) {
        let text = input.value.replace('ai', 'a')
        text = text.replaceAll('enter', 'e')
        text = text.replaceAll('imes', 'i')
        text = text.replaceAll('ober', 'o')
        text = text.replaceAll('ufat', 'u')

        textBoxText.textContent = text
    }
}
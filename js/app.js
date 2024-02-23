
const text = document.querySelector('#text')
let originalText = ''

const search = document.querySelector('#search')

// events

text.addEventListener('change', e => {
    originalText = text.value
})

search.addEventListener('change', e => {
    let textCopy = originalText

    // NEVEIKIA REGEX IR NEZINAU KODEL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // PRALEIDAU VISA LAIKA IESKANT KODEL
    textCopy.replace("ore","aaa");
    
    console.log(textCopy)
    text.value = textCopy
})

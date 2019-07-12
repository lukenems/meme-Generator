
let button = document.querySelector('button');
let memeArea = document.querySelector('.meme-area');

button.addEventListener('click', function(){
    event.preventDefault()
    let imgUrl = document.querySelector('#url').value;
    console.log('url(' + imgUrl + ');');
    let newDiv = document.createElement('div');
    newDiv.style.background = 'url(' +imgUrl+ ')';
    memeArea.insertAdjacentElement('beforeend', newDiv);
    document.querySelector('#url').value = '';
})


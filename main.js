
let button = document.querySelector('button');
let memeArea = document.querySelector('.meme-area');

button.addEventListener('click', function(){
    event.preventDefault()
    let imgUrl = document.querySelector('#url').value;
    let top = document.querySelector('#top_text').value;
    let bottom = document.querySelector('#bottom_text').value;

    let newDiv = document.createElement('div');
    let image = document.createElement('img')
    image.src = imgUrl;
    let p = document.createElement('p')
    p.innerHTML = top

    memeArea.insertAdjacentElement('beforeend', newDiv);
    newDiv.insertAdjacentElement('beforeend', image);
    newDiv.insertAdjacentElement('beforeend', p);

    document.querySelector('#url').value = '';
    document.querySelector('#top_text').value = '';
    document.querySelector('#bottom_text').value = '';
})


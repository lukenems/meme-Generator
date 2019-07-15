
let button = document.querySelector('button');
let memeArea = document.querySelector('.meme-area');

button.addEventListener('click', function(){
    console.log(event)
    event.preventDefault()
    let imgUrl = document.querySelector('#url').value;
    if(imgUrl === '' || !imgUrl.includes('http')){
        document.querySelector('#url').value = '';
        alert("Please enter a URL for the image")
        return 

    }
    let top = document.querySelector('#top_text').value;
    let bottom = document.querySelector('#bottom_text').value;

    let newDiv = document.createElement('div');
    newDiv.classList.add('meme');
    let image = document.createElement('img');
    image.src = imgUrl;


    let topText = document.createElement('p');
    topText.innerHTML = top;
    topText.classList.add('text');
    topText.id = 'top';
    topText.unselectable = 'on';

    let bottomText = document.createElement('p');
    bottomText.innerHTML = bottom;
    bottomText.classList.add('text');
    bottomText.id = 'bottom'
    bottomText.unselectable = 'on';

    memeArea.insertAdjacentElement('beforeend', newDiv);
    newDiv.insertAdjacentElement('beforeend', image);
    newDiv.insertAdjacentElement('beforeend', topText);
    newDiv.insertAdjacentElement('beforeend', bottomText);

    document.querySelector('#url').value = '';
    document.querySelector('#top_text').value = '';
    document.querySelector('#bottom_text').value = '';
})


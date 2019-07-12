console.log('running')
let button = document.querySelector('button')
let imgUrl = document.querySelector('#url')

button.addEventListener('click', function(){
    alert(imgUrl.value)
})

console.log(imgUrl)
const myLink = document.getElementById('hotels');
const myBox = document.querySelector('.information');

myLink.addEventListener('mouseover', ()=>{
    myBox.style['visibility'] = 'visible';
})

myLink.addEventListener('mouseout', ()=>{
    myBox.style['visibility'] = 'hidden';
})
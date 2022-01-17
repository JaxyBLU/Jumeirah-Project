const myLink = document.querySelectorAll('.expandable');
const myBox = document.querySelector('.information');

myLink.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        if(item.classList.contains('active')){
            myLink.forEach((element) => element.classList.remove('active'));
            myBox.classList.add('invisible');
            return;
        } else{
            myLink.forEach((element) => element.classList.remove('active'));
            item.classList.add('active');
            myBox.classList.remove('invisible');
        }
    });
})
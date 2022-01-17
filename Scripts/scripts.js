const myLink = document.querySelectorAll('.expandable');
const myBox = document.querySelector('.information');

const hotelsContent = `
    <h3>Our Hotels</h3>
    <ul>
        <li class="hotel">Jumeirah Al Naseem</li>
        <li class="hotel">Jumeirah Al Qasr</li>
        <li class="hotel">Burj Al Arab Jumeirah</li>
    </ul>
    <button class='infoclose'>Close</button>
`;

const lifestyleContent = `
    <h3>LifeStyle of Jumeirah</h3>
    <a href="#">Dining</a>
    <a href="#">Wellness</a>
    <a href="#">Occasion</a>
    <a href="#">Shop</a>
    <a href="#">Stories</a>
    <button class='infoclose'>Close the Page</button>
`;

const loyaltyContent = `
    <h3>Our Loyalty Programs</h3>
    <ul>
        <li>About Jumeirah One</li>
        <li>Collect</li>
        <li>Exchange</li>
        <li>Partners</li>
        <li>Offers</li>
        <li>Help and Support</li>
    </ul>
    <button class='infoclose'>CLose the Page</button>
`;

/* Functionality of Navigation Links and Dropdown Menu */
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
            if(item.id == 'hotels'){myBox.innerHTML = hotelsContent;} else
            if(item.id == 'lifestyle'){myBox.innerHTML = lifestyleContent;} else
            if(item.id == 'loyalty'){myBox.innerHTML = loyaltyContent;}
            const closingButtons = document.querySelectorAll('.infoclose');
            closingButtons.forEach((item)=>{
                item.addEventListener('click', ()=>{
                    myLink.forEach((element) => element.classList.remove('active'));
                    myBox.classList.add('invisible');
                })
            })
        }
    });
})

/*Event Listener For Closing '.information' div if user clicks outside of it *//*
window.addEventListener('mouseup', function(event){
    if(event.target != myBox && event.target.parentNode != myBox){
        myBox.classList.add('invisible');
        myLink.forEach((element) => element.classList.remove('active'));
    }
})*/
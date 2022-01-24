const myLink = document.querySelectorAll('.expandable');
const myBox = document.querySelector('.information');

const hotelsContent = `
    <button class='infoclose'><i class="fas fa-times"></i></button>
    <div class="info_container">
        <div id="first">
            <a href="https://www.jumeirah.com/en/collection/middle-east" target="_blank"><h3>Middle East</h3></a>
            <div class="wrapper">
                <div id="dubai">
                    <ul>
                        <li><a href="https://www.jumeirah.com/en/collection/dubai" target="_blank" class="upper">Dubai</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/burj-al-arab-jumeirah" target="_blank">Burj Al Arab</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/jumeirah-al-naseem" target="_blank">Jumeirah Al Naseem</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/jumeirah-al-qasr" target="_blank">Jumeirah Al Qasr</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/jumeirah-beach-hotel" target="_blank">Jumeirah Beach Hotel</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/jumeirah-dar-al-masyaf" target="_blank">Jumeirah Dar Al Masyaf</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/jumeirah-mina-a-salam" target="_blank">Jumeirah Mina A'Salam</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/jumeirah-zabeel-saray" target="_blank">Jumeirah Zabeel Saray - Palm Jumeirah</a></li>
                        <li><a href="https://www.jumeirah.com/en/article/announcements/jumeirah-marsa-al-arab-coming-soon" target="_blank">Coming soon: Jumeirah Marsa Al Arab</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/jumeirah-creekside-hotel" target="_blank">Jumeirah Creekside Hotel</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/jumeirah-emirates-towers" target="_blank">Jumeirah Emirates Towers</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/jumeirah-living-marina-gate" target="_blank">Jumeirah Living Marina Gate</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/jumeirah-living-world-trade-centre-residence" target="_blank">Jumeirah Living World Trade Centre Residences</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/dubai/zabeel-house-the-greens" target="_blank">Zabeel House The Greens</a></li>
                    </ul>
                </div>
                <div id="rest">
                    <ul>
                        <li><a href="https://www.jumeirah.com/en/collection/abu-dhabi" target="_blank" class="upper">Abu Dhabi</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/abu-dhabi/jumeirah-at-saadiyat-island-resort" target="_blank">Jumeirah At Saadiyat Island Resort</a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.jumeirah.com/en/stay/kuwait/jumeirah-messilah-beach-hotel-and-spa" target="_blank" class="upper">Kuwait</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/kuwait/jumeirah-messilah-beach-hotel-and-spa" target="_blank">Jumeirah Messilah Beach Hotel & Spa</a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.jumeirah.com/en/stay/oman/jumeirah-muscat-bay" target="_blank" class="upper">Oman</a></li>
                        <li><a href="https://www.jumeirah.com/en/stay/oman/jumeirah-muscat-bay" target="_blank">Jumeirah Muscat Bay</a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.jumeirah.com/en/article/coming-soon/coming-soon-jumeirah-jabal-omar" target="_blank" class="upper">Saudi Arabia</a></li>
                        <li><a href="https://www.jumeirah.com/en/article/coming-soon/coming-soon-jumeirah-jabal-omar" target="_blank"></a>Coming soon: Jabal Omar Jumeirah</li>
                    </ul>
                </div>>
            </div>
        </div>
        <div id="second">
            <a href="https://www.jumeirah.com/en/collection/europe" target="_blank"><h3>Europe</h3></a>
            <div class="wrapper2">
                <ul>
                    <li><a href="https://www.jumeirah.com/en/stay/italy/capri-palace-jumeirah" target="_blank" class="upper">Capri</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/italy/capri-palace-jumeirah" target="_blank">Capri Palace</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.jumeirah.com/en/stay/frankfurt/jumeirah-frankfurt" target="_blank" class="upper">Frankfurt</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/frankfurt/jumeirah-frankfurt" target="_blank">Jumeirah Frankfurt</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.jumeirah.com/en/collection/london" target="_blank" class="upper">London</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/london/the-carlton-tower" target="_blank">The Carlton Tower</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/london/jumeirah-lowndes-hotel" target="_blank">Jumeirah Lowndes Hotel</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.jumeirah.com/en/stay/mallorca/jumeirah-port-soller-hotel-and-spa" target="_blank" class="upper">Mallorca</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/mallorca/jumeirah-port-soller-hotel-and-spa" target="_blank"></a>Jumeirah Port Soller Hotel & Spa</li>
                </ul>
            </div>
        </div>
        <div id="third">
            <a href="https://www.jumeirah.com/en/collection/asia" target="_blank"><h3>Asia-Pacific</h3></a>
            <div class="wrapper3">
                <ul>
                    <li><a href="https://www.jumeirah.com/en/stay/bali/jumeirah-bali" target="_blank" class="upper">Bali</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/bali/jumeirah-bali" target="_blank">Coming soon: Jumeirah Bali</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.jumeirah.com/en/collection/jumeirah-guangzhou" target="_blank" class="upper">Guangzhou</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/guangzhou/jumeirah-guangzhou" target="_blank">Jumeirah Guangzhou</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/guangzhou/jumeirah-living-guangzhou" target="_blank">Jumeirah Living Guangzhou</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.jumeirah.com/en/stay/maldives/jumeirah-maldives" target="_blank" class="upper">Maldives</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/maldives/jumeirah-maldives" target="_blank">Jumeirah Maldives Olhahali Island</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.jumeirah.com/en/stay/nanjing/jumeirah-nanjing" target="_blank" class="upper">Nanjing</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/nanjing/jumeirah-nanjing" target="_blank">Jumeirah Nanjing</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.jumeirah.com/en/stay/shanghai/jumeirah-himalayas-hotel" target="_blank" class="upper">Shanghai</a></li>
                    <li><a href="https://www.jumeirah.com/en/stay/shanghai/jumeirah-himalayas-hotel" target="_blank">Jumeirah Himalayas Hotel</a></li>
                </ul>
            </div>
        </div>
    </div>
`;

const lifestyleContent = `
    <h3>Hello</h3>
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
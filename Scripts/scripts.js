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
                </div>
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

    <div class="hotels_footer">
    <div class="showcase_mother">
        <img src="Assets/Images/hotelcollectionbeachlover__square.webp" alt="Beach Lover">
        <div class="showcase_child">
            <h3>For the Beach Lover</h3>
            <a href="https://www.jumeirah.com/en/collection/beach-lover" target="_blank">
            <p class="button-font">explore collection <img src="Assets/Images/arrow-pointer.png" alt=""></p>
            </a>
        </div>
    </div>
    <div class="showcase_mother">
        <img src="Assets/Images/hotelcollectionislanderhero__square.webp" alt="Islander">
        <div class="showcase_child">
            <h3>For the Islander</h3>
            <a href="https://www.jumeirah.com/en/collection/island-lover" target="_blank">
            <p class="button-font">explore collection <img src="Assets/Images/arrow-pointer.png" alt=""></p>
            </a>
        </div>
    </div>
    <div class="showcase_mother">
        <img src="Assets/Images/urban__square.webp" alt="Urbanist">
        <div class="showcase_child">
            <h3>For the Urbanist</h3>
            <a href="https://www.jumeirah.com/en/collection/urban-lovers" target="_blank">
            <p class="button-font">explore collection <img src="Assets/Images/arrow-pointer.png" alt=""></p>
            </a>
        </div>
    </div>
    <div class="showcase_mother">
        <img src="Assets/Images/hotelcollectionexclusivecollectionhero__square.webp" alt="Exclusive Collection">
        <div class="showcase_child">
            <h3>Exclusive Collection</h3>
            <a href="https://www.jumeirah.com/en/stay/exclusive-collection-inspiration" target="_blank">
                <p class="button-font">explore collection <img src="Assets/Images/arrow-pointer.png" alt=""></p>
            </a>
        </div>
    </div>
</div>
`;

const lifestyleContent = `
<button class='infoclose'><i class="fas fa-times"></i></button>
<div class="info_container2">
    <div class="infobox">
        <img src="Assets/Images/lifestylecollectiondininghero__square.webp" alt="Jumeirah Dining" class="lifestyle_hero">
        <h3>Dining</h3>
        <a href="https://www.jumeirah.com/en/dine/f-and-b-inspiration-page" target="_blank">
            <p class="button-font">dining inspiration <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
        <a href="https://www.jumeirah.com/en/dine/collection" target="_blank">
            <p class="button-font">restaurant-listing <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
    <div class="infobox">
        <img src="Assets/Images/lifestylecollectionwellnesshero__square.webp" alt="Jumeirah Wellness" class="lifestyle_hero">
        <h3>Wellness</h3>
        <a href="https://www.jumeirah.com/en/rejuvenate/spa-inspiration" target="_blank">
            <p class="button-font">wellness inspiration <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
        <a href="https://www.jumeirah.com/en/rejuvenate/wellness-listing" target="_blank">
            <p class="button-font">wellness listing <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
    <div class="infobox">
        <img src="Assets/Images/lifestylecollectionoccasionhero__square.webp" alt="Jumeirah Occassions" class="lifestyle_hero">
        <h3>Occasion</h3>
        <a href="https://www.jumeirah.com/en/occasion/business-meetings/meeting-collection" target="_blank">
            <p class="button-font">meetings & events <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
        <a href="https://www.jumeirah.com/en/occasion/weddings/wedding-collection" target="_blank">
            <p class="button-font">weddings <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
    <div class="infobox">
        <img src="Assets/Images/lifestylecollectionshophero__square.webp" alt="Jumeirah Shop" class="lifestyle_hero">
        <h3>Shop</h3>
        <a href="https://jumeirahgifts.com/hotels" target="_blank">
            <p class="button-font">gift vouchers <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
    <div class="infobox">
        <img src="Assets/Images/lifestylecollectionstorieshero__square.webp" alt="Jumeirah Stories" class="lifestyle_hero">
        <h3>Stories</h3>
        <a href="https://www.jumeirah.com/en/article/stories" target="_blank">
            <p class="button-font">jumeirah journal <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
        <a href="https://www.jumeirah.com/en/jumeirah-group/press-centre/press-releases" target="_blank">
            <p class="button-font">press releases <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
</div>
`;

const loyaltyContent = `
<button class='infoclose'><i class="fas fa-times"></i></button>
<div class="info_container3">
    <div class="infobox3">
        <img src="Assets/Images/loyaltycollectionaboutjumeirahonehero__square.webp" alt="Jumeirah One" class="loyalty_hero">
        <a href="https://www.jumeirah.com/en/guest-user" target="_blank">
            <p class="button-font">about jumeirah one <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
    <div class="infobox3">
        <img src="Assets/Images/loyaltycollectioncollecthero__square.webp" alt="Jumeirah Collect" class="loyalty_hero">
        <a href="https://www.jumeirah.com/en/loyalty/collect" target="_blank">
            <p class="button-font">collect <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
    <div class="infobox3">
        <img src="Assets/Images/loyaltycollectionexchangehero__square.webp" alt="Jumeirah Exchange" class="loyalty_hero">
        <a href="https://www.jumeirah.com/en/loyalty/exchange" target="_blank">
            <p class="button-font">exchange <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
    <div class="infobox3">
        <img src="Assets/Images/loyaltycollectionpartnershero__square.webp" alt="Jumeirah Partners" class="loyalty_hero">
        <a href="https://www.jumeirah.com/en/loyalty/partners" target="_blank">
            <p class="button-font">partners <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
    <div class="infobox3">
        <img src="Assets/Images/loyaltycollectionoffershero__square.webp" alt="Jumeirah Offers" class="loyalty_hero">
        <a href="https://www.jumeirah.com/en/loyalty/offers" target="_blank">
            <p class="button-font">offers <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
    <div class="infobox3">
        <img src="Assets/Images/loyaltycollectionhelpsupporthero__square.webp" alt="Jumeirah Help & Support" class="loyalty_hero">
        <a href="https://www.jumeirah.com/en/loyalty/help-and-support/contact-us" target="_blank">
            <p class="button-font">help & support <img src="Assets/Images/arrow-pointer.png" alt=""></p>
        </a>
    </div>
</div>
<a href="https://www.jumeirah.com/en/guest-user" target="_blank"><button class="button-font joinnow">log in or join now</button></a>
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

import React from 'react'
import Navbar from './Navbar'

const Faq = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <h1 style={{fontsize:'5em',color:'blue'}}><b>Frequently Asked Questions</b></h1>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3"> 
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        1.Do I need a visa for Dubai?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <p>All visitors need a visa, unless you are from one of these countries:</p>
        <p>GCC (Gulf Cooperation Council) Countries: Bahrain, Kuwait, Oman, Qatar and Saudi Arabia.</p>
        <p>Western Europe, North America and Far East and Australasia : Depending on which country you are from you need to check the visa rules on the<code> General Directorate of Residency & Foreigner Affairs</code> website.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        2.How can I apply for a tourist visa to visit Dubai?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
       <p>Check the cost and procedure for applying for a UAE visa with the Dubai Department of Naturalisation and Residency website or call 800 5111 local, international +971 4 313 9999 for details.</p>
       <p>If a visa is required, you must apply before your arrival in the UAE.</p>
       <p>For queries regarding visas at the airport, you may visit the immigration and visa office in Terminal 3 arrivals near Entrance 1. The centre is open 24 hours a day.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        3.How long does the visa last?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        <p>A typical short-term tourist visa lasts 30 days from when you enter the UAE. A long-term visa lasts 90 days.</p>
        <p>The cost of applying for a visa can vary depending on the type and duration.</p>
        <p>For queries regarding visas at the airport, you may visit the immigration and visa office in Terminal 3 arrivals near Entrance 1. The centre is open 24 hours a day.</p>
      </div>
    </div>
  </div>
<div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapsefour">
        4.What are the Items you cannot bring into the UAE?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
      <div class="accordion-body">
        <li>All narcotic drugs,Gambling tools, machines,Ivory and rhinoceros horn,Trammel (fishing net with three layers),Forged or duplicate currency.</li>
        <li>Any printed material that contradicts Islamic teachings and/or decency, or that deliberately implies immorality or turmoil,Cooked and homemade foods,Radios.</li>
        <li>self-defense equipment, sharp-edged knives and swords.</li>
        <li>Pets and skins of endangered animals subject to CITES convention,Weapons, ammunition and military equipment,Fireworks and explosives,Trees, plants and soil.</li>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
     5.Are there fast-track facilities at Dubai Airports?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
      <div class="accordion-body">
        <p>Guests arriving and departing at DXB Terminal 3 can go through passport control in a matter of seconds using the enhanced Smart Gates, featuring a new contactless process. </p>
        <p>If you’re registered for the Smart Gates, you can pass through by simply looking at the green light, with no need to scan a document.</p>
        <p>Just remember to remove anything covering your face – such as masks, glasses and hats – and keep your passport and boarding pass ready in case they are needed.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
     6.Where is the airport?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
      <div class="accordion-body">
        <li>DXB,Terminal 1,Garhoud.</li>
        <li>Terminal 2,Al Quds Street,Terminal 3.</li>
        <li>Emirates Terminal 3 is located on Airport Road in Garhoud,DWC,Jebel Ali</li>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
     7.What are my parking options and rates at the Dubai’s airports?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse">
      <div class="accordion-body">
        <p>You’re more than welcome to bring a car. We have plenty of spaces, short and long-term, at all three terminals at DXB and at DWC. There are clear signs to both as you approach the airport. Find out more about parking rates and where to park.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
     8.How you can access Wi-Fi internet at both Dubai International (DXB) and Dubai World Central (DWC)?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse">
      <div class="accordion-body">
        <p>Guests can get unlimited, free, high-speed Wifi at both DXB and DWC. Simply select the “DXB Free Wifi” or "DWC Free Wifi" networks to connect.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
     9.What restaurants and shops are there at the airport?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse">
      <div class="accordion-body">
        <p>Dubai is a shopper’s and diner’s paradise. And are our airports. From local delicacies to luxury brands, travel essentials to tempting indulgences, we offer something for everyone.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
     10.What is the call centre number for Dubai International?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse">
      <div class="accordion-body">
        <p>You can call DXB at any time by dialing +971 4 224 5555</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false" aria-controls="panelsStayOpen-collapseEleven">
     11.What are the meet & greet options at the airport?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseEleven" class="accordion-collapse collapse">
      <div class="accordion-body">
        <p>Hospitality is at the heart of Arabic culture. Our airport honours this, with a range of special services to make your visit as smooth and special as possible. A variety of services are available here.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwelve" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwelve">
     12.What should I do if I’ve lost something inside the airport?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwelve" class="accordion-collapse collapse">
      <div class="accordion-body">
        <p>If you luggage is lost on route, you will need to check with your airline. However, in the unlikely event of your baggage going missing within our airport, we’ll work with you to resolve the situation. Find out more information on our<code>lost and found page</code></p>
      </div>
    </div>
  </div>
</div>
 </div>
  </div>
   </div>
  </div>
  </div>
  </div>
  )
}

export default Faq

import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>
      <div className="conatiner">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <h1 style={{fontSize:'4em',color:'blue',textAlign:'center'}}><b>Contact Us</b></h1>
                    <br />
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h4>
                        <li>At Dubai Airports, we always work towards providing the best customer service to the millions of passengers that visit our airports.</li>
                        <li>Our contact center team is available 24 hours a day, 7 days / week to answer your queries.</li>
                        <li>Alternatively, our live chat team is available 24/7 to deal with any question you may have.</li>
                        </h4>
                    </div>
                    <h1 style={{fontSize:'3em',color:'blue'}}> <b> Get In Touch</b> </h1>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card-group">
                    <div class="card">
                   <div class="card-body">
                   <h5 class="card-title"><b>Live Chat</b></h5>
                   <br /><br />
                   <p class="card-text">Live Chat Support</p>
                 </div>
               <div class="card-footer">
               <button className="btn btn-primary">Start Chat</button>
               </div>
              </div>
              <div class="card">
              <div class="card-body">
              <h5 class="card-title"> <b>Contact Centre</b></h5>
               <br /><br />
              <p class="card-text">Contact Center Support</p>
               </div>
             <div class="card-footer">
             <button className="btn btn-primary">+971 4 224 5555</button>
             </div>
             </div>
            <div class="card">
            <div class="card-body">
           <h5 class="card-title"><b>WhatsApp</b></h5>
          <br /><br />
          <p class="card-text">Customer Support</p>
         </div>
         <div class="card-footer">
         <button className="btn btn-primary">Start Chat</button>
             </div>
          </div>
         </div>
           </div>
           <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
         <div class="card">
        <div class="card-body">
        <h5 class="card-title" style={{fontSize:'2em',color:'blue'}}><b>Location-DXB</b></h5>
       </div>
       <div class="card-footer">
      <button className="btn btn-warning">DXB Location Map</button>
    </div>
  </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="card">
        <div class="card-body">
        <h5 class="card-title" style={{fontSize:'2em',color:'blue'}}><b>Location-DWC</b></h5>
       </div>
       <div class="card-footer">
      <button className="btn btn-warning">DWC Location Map</button>
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

export default Contact

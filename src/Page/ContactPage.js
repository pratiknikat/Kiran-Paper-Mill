import React from 'react'
import "../assets/contactUs/style.css"
import Map from "../Components/Map"
const ContactPage = () => {
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4"></div> 
                      <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" for="name">Full Name</label>
                              <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-md-6"> 
                            <div className="form-group">
                              <label className="label" for="email">Email Address</label>
                              <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" for="subject">Subject</label>
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" for="#">Message</label>
                              <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="submit" value="Send Message" className="btn btn-primary"  />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                      <h3>Let's get in touch</h3>
                      <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3 text-align:start">
                          <p><span>Address:</span> Kiran Paper & Board Industries Datala-443102, Buldhana Road , Taluka Malkapur, District Buldhana , India</p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p><span>Phone:</span> <a href="tel://9822699629">+91 9822699629 </a> <br></br> <a href="tel://9356652829">+91 9356652829 </a></p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3 d-flex align-items-start justify-content-start">
                          <p><span>Email:</span> <a href="mailto:kiranpapermill@gmail.com">kiranpapermill@gmail.com</a></p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{textAlign:"center"}}>
          {<Map/>}
        </div>
        
      </section>
    </div>
  )
}

export default ContactPage
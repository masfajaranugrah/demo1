import React from 'react'
import images1 from '@/assets/images/bisnis/about01.jpg'
import images2 from '@/assets/images/bisnis/about02.jpg'
import images3 from '@/assets/images/bisnis/about03.jpg'
 
const About = () => {
  return (
    <div>
      <section class="section bg-light" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="about-image position-relative">
                            <img src={images1} class="img-fluid rounded shadow" alt=""/>

                            <div class="about-image-position">
                                <img src={images2} class="img-fluid rounded shadow-lg" alt=""/>
                                <div class="play-icon">
                                    <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" class="play-btn lightbox">
                                        <i class="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="section-title ms-lg-5">
                            <h6 class="text-primary fw-normal">Creative Vision & Mission</h6>
                            <h4 class="title mb-4">We develop & create <br/> digital future.</h4>
                            <p class="text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <p class="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div class="mt-4 pt-2">
                                <a href="javascript:void(0)" class="btn btn-primary">Read More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div> 

            <div class="container mt-100 mt-60">
                <div class="row">
                    <div class="col-md-3 col-6">
                        <div class="counter-box position-relative text-center">
                            <h2 class="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><span class="counter-value" data-target="5458">3</span></h2>
                            <span class="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Investment Projects</span>
                        </div> 
                    </div> 

                    <div class="col-md-3 col-6">
                        <div class="counter-box position-relative text-center">
                            <h2 class="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><span class="counter-value" data-target="15">1</span></h2>
                            <span class="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Years of Experience</span>
                        </div> 
                    </div> 

                    <div class="col-md-3 col-6">
                        <div class="counter-box position-relative text-center">
                            <h2 class="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><span class="counter-value" data-target="54">0</span></h2>
                            <span class="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Offices in the World</span>
                        </div> 
                    </div> 

                    <div class="col-md-3 col-6">
                        <div class="counter-box position-relative text-center">
                            <h2 class="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><span class="counter-value" data-target="214">3</span></h2>
                            <span class="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Successful Cases</span>
                        </div> 
                    </div> 
                </div> 
            </div> 

            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-md-6 order-1 order-md-2">
                        <div class="ms-lg-5">
                            <img src={images3} class="img-fluid rounded shadow" alt=""/>
                        </div>
                    </div>

                    <div class="col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="section-title">
                            <h6 class="text-primary fw-normal">How it work?</h6>
                            <h4 class="title mb-4">Don't wait. <br/> The time will never be just right.</h4>
                            
                            <div class="accordion mt-4" id="buyingquestion">
                                <div class="accordion-item rounded shadow">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button fw-normal border-0 bg-light rounded shadow" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            How does it work ?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse border-0 collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#buyingquestion">
                                        <div class="accordion-body text-muted bg-transparent">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="accordion-item rounded shadow mt-2">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button fw-normal border-0 bg-light rounded shadow collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            Do I need a designer to use Fronter ?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#buyingquestion">
                                        <div class="accordion-body text-muted bg-transparent">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                        </div>
                                    </div>
                                </div>
    
                                <div class="accordion-item rounded shadow mt-2">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button fw-normal border-0 bg-light rounded shadow collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What do I need to do to start selling ?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#buyingquestion">
                                        <div class="accordion-body text-muted bg-transparent">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                        </div>
                                    </div>
                                </div>
    
                                <div class="accordion-item rounded shadow mt-2">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button fw-normal border-0 bg-light rounded shadow collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            What happens when I receive an order ?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#buyingquestion">
                                        <div class="accordion-body text-muted bg-transparent">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div> 
        </section>
    </div>
  )
}

export default About

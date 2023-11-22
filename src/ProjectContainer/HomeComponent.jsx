import React, { useState } from 'react'
import Joydeep from './joydeep.jpeg'
import "./Main.css"
import { Carousel, CarouselControl, CarouselItem, CarouselIndicators } from 'reactstrap'

function HomeComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = [{ caption: 'Certificate of SRF', src: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', altText: 'Slide one' },
  {
    caption: 'Certificate of JRF', src: "https://images.pexels.com/photos/974316/pexels-photo-974316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", altText: 'Slide two'
  }];
  const itemLength = items.length - 1;
  const previousButton = () => {
    if (animating) return;

    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  }
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem key={item.src} onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}>
        <img className="img img-fluid" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
  return (
    <div>
      <div className="vh-75">
        <div className='row col-12 d-flex justify-content-center align-items-center' style={{position: "absolute", zIndex: 10, marginTop:"70px"}}>
          <div className='col-10 col-md-7 text-center'><h1 style={{color:"white"}}>Laboratory of Plant Molecular Biology & Transgenics<br />
            Department of Agricultural and Food Engineering<br />
            Indian Institute of Technology Kharagpur</h1></div>
          <div className='d-none d-md-block col-md-3'>
            <img src='./kgplogowhite.png' className="img-fluid" alt="iitkgp logo" />
          </div>
        </div>
        <div className='spikes'></div>
      </div>
      <div className='home'>
        <h2 className='text-uppercase'>About the lab</h2>
        <div className="justify-text-evenly">
          <p className='lead'>In the Laboratory of Plant Molecular Biology & Transgenics at the Indian Institute of Technology Kharagpur, we aim to develop resilient crop plants by understanding the molecular mechanism of plant stress adaptation. Along with trangenic technology, functional genomics study is also an integral part of our research. In the lab we also explore the multidisciplinary research dimensions involving use of Aritificial Intelligence and Machine Learning in crop science.</p>
        </div>
        <div className='row mt-5'>
          <div className="col-md-9 text-end">
            <p className='h2 fw-bold'>Recent Advances</p><p className='text-decoration-underline h3'>Lentil Crop Modelling Using CNN</p>
            {/* <p className='h6 text-muted'>Associate Professor<br />Department of Agricultural and Food Engineering,<br /> Indian Institute of Technology Kharagpur</p> */}
            <p className='lead d-none d-sm-block justified-content-center'>Accurate yield estimation is essential for managing crop production and ensuring food security. Traditionally, yield estimation has been done using field-based methods, which are time-consuming and costly. In recent years, machine learning (ML) algorithms have been used to predict the yield of various crops, including lentil. ML offers a promising approach for predicting the yield of lentil crops based on various biophysical variables. </p>
          </div>
          <div className='col-md-3'>
            {/* <img className="img-fluid rounded img-thumbnail" alt='Dr. Joydeep Banerjee' src={Joydeep} /> */}
            <Carousel previous={previousButton} next={nextButton}
              activeIndex={activeIndex}>
              <CarouselIndicators items={items}
                activeIndex={activeIndex}
                onClickHandler={(newIndex) => {
                  if (animating) return;
                  setActiveIndex(newIndex);
                }} />
              {carouselItemData}
              <CarouselControl directionText="Prev"
                direction="prev" onClickHandler={previousButton} />
              <CarouselControl directionText="Next"
                direction="next" onClickHandler={nextButton} />
            </Carousel>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-3'>
            <Carousel previous={previousButton} next={nextButton}
              activeIndex={activeIndex}>
              <CarouselIndicators items={items}
                activeIndex={activeIndex}
                onClickHandler={(newIndex) => {
                  if (animating) return;
                  setActiveIndex(newIndex);
                }} />
              {carouselItemData}
              <CarouselControl directionText="Prev"
                direction="prev" onClickHandler={previousButton} />
              <CarouselControl directionText="Next"
                direction="next" onClickHandler={nextButton} />
            </Carousel>
          </div>
          <div className="col-md-9 text-start">
            <p className='h2 fw-bold'>Latest Technology for Cutting Edge Research</p><p className='text-decoration-underline h3'>Dr. Joydeep Banerjee</p>
            {/* <p className='h6 text-muted'>Associate Professor<br />Department of Agricultural and Food Engineering,<br /> Indian Institute of Technology Kharagpur</p> */}
            <p className='lead d-none d-sm-block justified-content-center'>Our facility is equipped with cutting-edge tools to support a wide range of research needs. Discover innovation at every turn as we provide everything you need for advanced plant molecular biology studies.</p>
          </div>
        </div>
        <div className='row mt-5'>
          <div className="col-md-9 text-end">
            <p className='h2 fw-bold'>Ongoing Projects</p><p className='text-decoration-underline h3'>Current Fully Funded Research Projects</p>
            {/* <p className='h6 text-muted'>Associate Professor<br />Department of Agricultural and Food Engineering,<br /> Indian Institute of Technology Kharagpur</p> */}
            <p className='lead d-none d-sm-block justified-content-center'>Elucidating Ca2+/CaM-master regulator(s) and their potential target proteins in rice aiming at abiotic stress mitigation Science and Engineering Research Board (SERB)
Understanding the Citrus Tristeza Virus Resistance Mechanisms in Citrus Species and Development of Disease-free Quality Planting Material of Khasi Mandarin (Citrus Reticulata Blanco) from North East India DBT, NEW DELHI
Understanding the Citrus Tristeza Virus Resistance Mechanisms in Citrus Species and Development of Disease-free Quality Planting Material of Khasi Mandarin (Citrus Reticulata Blanco) from North East India DBT, NEW DELHI</p>
          </div>
          <div className='col-md-3'>
            {/* <img className="img-fluid rounded img-thumbnail" alt='Dr. Joydeep Banerjee' src={Joydeep} /> */}
            <Carousel previous={previousButton} next={nextButton}
              activeIndex={activeIndex}>
              <CarouselIndicators items={items}
                activeIndex={activeIndex}
                onClickHandler={(newIndex) => {
                  if (animating) return;
                  setActiveIndex(newIndex);
                }} />
              {carouselItemData}
              <CarouselControl directionText="Prev"
                direction="prev" onClickHandler={previousButton} />
              <CarouselControl directionText="Next"
                direction="next" onClickHandler={nextButton} />
            </Carousel>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-3'>
            <Carousel previous={previousButton} next={nextButton}
              activeIndex={activeIndex}>
              <CarouselIndicators items={items}
                activeIndex={activeIndex}
                onClickHandler={(newIndex) => {
                  if (animating) return;
                  setActiveIndex(newIndex);
                }} />
              {carouselItemData}
              <CarouselControl directionText="Prev"
                direction="prev" onClickHandler={previousButton} />
              <CarouselControl directionText="Next"
                direction="next" onClickHandler={nextButton} />
            </Carousel>
          </div>
          <div className="col-md-9 text-start">
            <p className='h2 fw-bold'>Collaboration: The Key to Transformative Reasearch</p><p className='text-decoration-underline h3'>Dr. Joydeep Banerjee</p>
            {/* <p className='h6 text-muted'>Associate Professor<br />Department of Agricultural and Food Engineering,<br /> Indian Institute of Technology Kharagpur</p> */}
            <p className='lead d-none d-sm-block justified-content-center'>We take pride in collaborating with government research institutions and industries. Our lab is currently conducting research in collaboration with DBT & SERB along with State Universities.</p>
          </div>
        </div>
        <div className='row mt-5'>
          <div className="col-md-9 text-end">
            <p className='h2 fw-bold'>Meet Our Mentor</p><p className='text-decoration-underline h3'>Dr. Joydeep Banerjee</p>
            <p className='h6 text-muted'>Associate Professor<br />Department of Agricultural and Food Engineering,<br /> Indian Institute of Technology Kharagpur</p>
            <p className='lead d-none d-sm-block justified-content-center'>Dr. Joydeep Banerjee is currently employed as an Associate Professor at the Department of Agricutural and Food Engineering, Indian Institute of Technology Kharagpur, India. He heads the Laboratory of Plant Molecular Biology & Trangenics. He obtained his Ph.D. from IIT Kharagpur and did post-doctoral training at University of Kentucky and at University of Nebraska-Lincoln, USA. He has several research publications in reputed journals. He has been awarded several awards- Recieved Senior Research Fellowship during Ph.D. program from Council of Scientific and Industrial Research, Young Scientist Award from Crop and Weed Science Society (CWSS), BCKV (2018) & several others.</p>
          </div>
          <div className='col-md-3'>
            <img className="img-fluid rounded img-thumbnail" alt='Dr. Joydeep Banerjee' src={Joydeep} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent
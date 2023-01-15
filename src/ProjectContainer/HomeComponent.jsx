import React, {useState} from 'react'
import Joydeep from './joydeep.jpeg'
import "./Main.css"
import { Carousel, CarouselControl, CarouselItem, CarouselIndicators } from 'reactstrap'
function HomeComponent() {
  const [activeIndex, setActiveIndex]=useState(0);
  const [animating, setAnimating]=useState(false);
  const items=[{caption:'Certificate of SRF', src: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', altText: 'Slide one'},
  {caption:'Certificate of JRF', src: "https://images.pexels.com/photos/974316/pexels-photo-974316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", altText: 'Slide two'
  }];
  const itemLength =items.length -1;
  const previousButton =()=>{
    if(animating) return;
    
    const nextIndex = activeIndex===0? itemLength:activeIndex-1;
    setActiveIndex(nextIndex);
  }
  const nextButton = () => {
    if(animating) return;
    const nextIndex = activeIndex ===itemLength?0:activeIndex+1;
    setActiveIndex(nextIndex);
  }
  const carouselItemData = items.map((item)=>{
    return (
      <CarouselItem key={item.src} onExited={() => setAnimating(false)}
      onExiting={()=>setAnimating(true)}>
        <img className="img img-fluid" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
  return (
    <div>
    <div className="row text-center home">
      <p className='lead'>In the Laboratory of Plant Molecular Biology & Transgenics at the Indian Institue of Technology Kharagpur, we aim to develop resilient crop plants by understanding the molecular mechanism of plant stress adaptation. Along with trangenic technology, functional genomics study is also an integral part of our research. In the lab we also explore the multidisciplinary research dimensions involving use of Aritificial Intelligence and Machine Learning in crop science.</p>
        
    </div>
    <div className="row text-center home">
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
      <div className="col-md-9 text-end">
        <p className='h2 fw-bold'>Meet Our Mentor</p><p className='text-decoration-underline h3'>Dr. Joydeep Banerjee</p>
        <p className='h6 text-muted'>Associate Professor<br />Department of Agricultural and Food Engineering,<br /> Indian Institute of Technology Kharagpur</p>
        <p className='lead d-none d-sm-block justified-content-center'>Dr. Joydeep Banerjee is currently employed as an Associate Professor at the Department of Agricutural and Food Engineering, Indian Institute of Technology Kharagpur, India. He heads the Laboratory of Plant Molecular Biology & Trangenics. He obtained his Ph.D. from IIT Kharagpur and did post-doctoral training at University of Kentucky and at University of Nebraska-Lincoln, USA. He has several research publications in reputed journals. He has been awarded several awards- Recieved Senior Research Fellowship during Ph.D. program from Council of Scientific and Industrial Research, Young Scientist Award from Crop and Weed Science Society (CWSS), BCKV (2018) & several others.</p>
      </div>
      <div className='col-md-3'>
        <img className="img-fluid rounded img-thumbnail" src={Joydeep} />
      </div> 
    </div>
    
    </div>
  )
}

export default HomeComponent
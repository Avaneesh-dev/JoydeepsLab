import React, {useState} from 'react'
import { Carousel, CarouselControl, CarouselItem, CarouselIndicators } from 'reactstrap'
function ResearchComponent() {
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
    <div className="home my-10">
      <div className="header">
        <header className="display-5 p-5" >Research & Publications</header>
      </div>
      <div className='lead'>
        We work on plant breeding, plant stress physiology, biotechnological methods in plant science, plant tissue culture,  
      </div>
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
  )
}

export default ResearchComponent
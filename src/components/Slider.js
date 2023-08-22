import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = ({ data }) => {

    return (
        <div className='carousel-container'>
            <Carousel 
            className='carousel'
            width={'60vh'}
            showThumbs={true}
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}>
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={`${process.env.PUBLIC_URL}${item}`} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Slider
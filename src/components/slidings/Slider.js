import React from 'react'
import { Carousel } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Slider() {
    return (
        <div className="div-12">
            <hr />
            <div class="card mb-3 " style={{ maxWidth: '1235' }}>
                <div class="row g-0 ">
                    <div class="col-md-12">
                        <Carousel>
                            <Carousel.Item>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ph-GWJ2qWbwPwL1T9bEc0W5_2zvPprC_ztbVq4YLX0KZzalOcPUDr4oyfmTVVC4rCWc&usqp=CAU" alt="image1" height="300px" width="100%" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://hotdealszone.com/wp-content/uploads/2020/09/Flipkart-Big-Billion-Days-2020-Coming-Soon.jpg" alt="image1" height="300px" width="100%" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://hotdealszone.com/wp-content/uploads/2020/09/Flipkart-Big-Billion-Days-2020-Coming-Soon.jpg" alt="image2" height="300px" width="100%" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://hotdealszone.com/wp-content/uploads/2020/09/Flipkart-Big-Billion-Days-2020-Coming-Soon.jpg" alt="image3" height="300px" width="100%" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://hotdealszone.com/wp-content/uploads/2020/09/Flipkart-Big-Billion-Days-2020-Coming-Soon.jpg" alt="image4" height="300px" width="100%" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://hotdealszone.com/wp-content/uploads/2020/09/Flipkart-Big-Billion-Days-2020-Coming-Soon.jpg" alt="image5" height="300px" width="100%" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://hotdealszone.com/wp-content/uploads/2020/09/Flipkart-Big-Billion-Days-2020-Coming-Soon.jpg" alt="image6" height="300px" width="100%" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://hotdealszone.com/wp-content/uploads/2020/09/Flipkart-Big-Billion-Days-2020-Coming-Soon.jpg" alt="image7" height="300px" width="100%" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useRef, useEffect, useState } from 'react'
import { Col, Row, Carousel, Icon } from 'antd'
import './index.scss'

const CustomCarousel = ({ images }) => {
  const sliderRef = useRef(null)
  const dotsRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const goNext = () => {
    if (currentSlide + 1 > images.length - 1) setCurrentSlide(0)
    else setCurrentSlide(currentSlide + 1)
  }

  const goPrev = () => {
    if (currentSlide - 1 < 0) setCurrentSlide(images.length - 1)
    else setCurrentSlide(currentSlide - 1)
  }
  useEffect(() => {
    const slider = sliderRef.current

    let dots = dotsRef.current.childNodes

    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', () => {
        setCurrentSlide(i)
        slider.goTo(i)
      })
    }
  }, [])
  return (
    <div className="CustomCarousel">
      <Carousel ref={sliderRef} effect="fade">
        {images.map((image) => (
          <div className="CustomCarousel_ImgContainer">
            <img src={image} alt="slider image" />
          </div>
        ))}
      </Carousel>
      <div className="CustomCarousel_Container">
        <div
          onClick={() => {
            goPrev()
            sliderRef.current.prev()
          }}
          className="Dots_Navigation __Left"
        >
          <Icon type="left" />
        </div>
        <div className="CustomCarousel_Dots" ref={dotsRef}>
          {images.map((image, index) => (
            <div
              className={`CustomCarousel_Dots_Item ${currentSlide === index &&
                '__Active'}`}
            >
              <img src={image} alt="slider image" />
            </div>
          ))}
        </div>
        <div
          onClick={() => {
            goNext()
            sliderRef.current.next()
          }}
          className="Dots_Navigation __Right"
        >
          <Icon type="right" />
        </div>
      </div>
    </div>
  )
}

export default CustomCarousel

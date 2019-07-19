import PropTypes from "prop-types"
import React from "react"
import Slider from "react-slick"

const TestimonialCarousel = ({ data }) => {
  const { carouselData, companies } = data
  const settings = {
    // dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    
    
    // centerMode: true,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  }
  return (
    <section className="sharedSuccess section">
      <div className="container md-text-center">
        <div className="testimonial-content">
          <h3>What property managers are saying</h3>
          <p>100,374 contracts have been genereated by property managers.</p>
        </div>
        <div className="navigation-arrows">
          <span>Left</span>
          <span>Right</span>
        </div>
        <Slider {...settings} className="gallerCarousel">
          {carouselData.map(testimonial => {
            const { id, imgUrl, name, content, location } = testimonial
            return (
              <div className="testimonial-item" key={id}>
                <img src={imgUrl} alt={name} />
                <div className="card-content">
                  <p className="content">{content}</p>
                  <p className="name">{name}</p>
                  <p className="name">{location}</p>
                </div>
              </div>
            )
          })}
        </Slider>
        <div className="companies-section">
          <p>Used by Australia’s leading companies</p>
          <div className="customers-section">
            {companies.map(company => {
              const { id, imgUrl, imgAlt } = company
              return (
                <div className="customer-logo" key={id}>
                  <img
                    src={imgUrl}
                    alt={imgAlt}
                    title={imgAlt}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

TestimonialCarousel.propTypes = {
  data: PropTypes.object,
}

TestimonialCarousel.defaultProps = {
  siteTitle: null,
}

export default TestimonialCarousel

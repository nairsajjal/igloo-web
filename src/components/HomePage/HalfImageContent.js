import React from "react"
import PropTypes from "prop-types"

const HalfImageContent = ({ halfImageContent }) => {
  const {
    imgRight,
    imgUrl,
    imgAlt,
    maskImgUrl,
    maskImgAlt,
    title,
    content1,
    content2,
    paymentIcons
  } = halfImageContent
  const imgClass = imgRight ? "img-right" : ""
  return (
    <div className="half-image-wrapper">
      <img className={`half-image ${ imgClass }`} src={imgUrl} alt={imgAlt} />

      <img className={`mask-image ${ imgClass }`}src={maskImgUrl} alt={maskImgAlt} />
      <div className={`half-image-section ${ imgClass } container`} >
        <div className="content">
          {title && <h3>{title}</h3>}
          {content1 && <p>{content1}</p>}
          {content2 && <p>{content2}</p>}
          {paymentIcons && <div className="pay-app-wrapper">
            {paymentIcons.map(icon => {
              const { id, iconUrl, iconAlt } = icon
              return (
                <img src={iconUrl} alt={iconAlt} key={id} />
              )
            })}
          </div>}
        </div>
      </div>
    </div>
  )
}

HalfImageContent.propTypes = {
  halfImageContent: PropTypes.object,
}

HalfImageContent.defaultProps = {
  halfImageContent: null,
}

export default HalfImageContent

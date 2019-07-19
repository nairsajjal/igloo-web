import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
const TeamListContent = ({ teamListContent }) => {
  const { listName, members } = teamListContent

  return (
    <div className="teamlist-wrapper">
      <div className="container">
        {listName && <h4>{listName}</h4>}

        {members && (
          <div className="teamlist-section">
            {members.map(member => {
              const { id, imgUrl, imgAlt, name, post, btnUrl } = member
              return (
                <div className="member-container">
                  <img src={imgUrl} alt={imgAlt} key={id} />
                  <h5>{name}</h5>
                  <p>{post}</p>
                  <a>
                    <Link to="/">Learn more</Link>
                  </a>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

TeamListContent.propTypes = {
  teamListContent: PropTypes.object,
}

TeamListContent.defaultProps = {
  teamListContent: null,
}

export default TeamListContent

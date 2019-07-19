import { Link } from "gatsby"
import React from "react"
import { realTimeLedger } from "./Data"
import SubscriptionForm from "../Forms/SubscriptionForm"

const RealTimeLedger = () => {
  const { title, content, terms, termsLink } = realTimeLedger
  return (
    <div className="real-time-ledger-wrapper dark-bg md-text-center">
      <div className="real-time-ledger container">
        <div className="real-time-content">
          <span className="badge">Coming Soon</span>
          {title && <h3>{title}</h3>}
          {content && <p>{content}</p>}
          <SubscriptionForm />
          {terms &&
            <p className="text-sm">{terms}
              <Link to="/">{termsLink}</Link>
            </p>}
        </div>
      </div>
    </div>
  )
}

export default RealTimeLedger
import React, { useState } from 'react'
import { Button } from 'react-md'
import Validator from "react-forms-validator";

const SubscriptionForm = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmit] = useState(false)

  return (
    <div className="subscriptions-form-wrapper">
      <form id="subscriptionForm" noValidate>
        <div className="form-row">
          <input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="Email me when it’s ready"
            autoComplete="off"
            required
          />
          <Validator
            // isValidationError={this.isValidationError}
            isFormSubmitted={submitted}
            reference={{ Email: email }}
            validationRules={{ required: true, email: true }}
            validationMessages={{ required: "This field is required", email: "Please enter a valid email address" }}
          />
          <Button raised type="submit" className="btn primary">Submit</Button>
        </div>
        <div id="form-message" />
      </form>
    </div>
  )
}

export default SubscriptionForm
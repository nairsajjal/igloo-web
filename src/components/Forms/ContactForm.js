import React, { useState } from 'react'
import { TextField, Button, SVGIcon, SelectField } from 'react-md'
import Validator from "react-forms-validator";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

const ContactForm = () => {
  const icon = <SVGIcon use={ArrowDropDown.url} />;
  const STRING_ITEMS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  const [email, setEmail] = useState('')
  const [fname, setFname] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmit] = useState(false)
  return (
    <div className="contactform">
      <form id="contactform" noValidate>
        <div className="formgroup">
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="off"
            className="md-form-control"
          />
          <Validator
            // isValidationError={ this.isValidationError }
            // isFormSubmitted={ submitted }
            reference={{ email }}
            validationRules={{ required: true, email: true }}
            validationMessages={{
              required: "This field is required",
              email: "Please enter a valid email address"
            }}
          />
        </div>
        <div className="formgroup">
          <TextField
            id="fname"
            name="fname"
            type="text"
            placeholder="Full name"
            autoComplete="off"
            className="md-form-control"
          />
          <Validator
            // isValidationError={ this.isValidationError }
            // isFormSubmitted={ submitted }
            reference={{ fname }}
            validationRules={{ required: true }}
            validationMessages={{
              required: "This field is required"
            }}
          />
        </div>
        <div className="formgroup">
          <SelectField
            id="select-field"
             
            placeholder="What are you interested in?"
            dropdownIcon={icon}
            className="md-cell"
            menuItems={STRING_ITEMS}
            position={SelectField.Positions.BELOW}
            
          

          />
        </div>
        <div className="formgroup">
          <TextField
            id="message"
            rows={4}
            name="message"
            placeholder="Message"
            className="md-form-control"
            onChange={event => this.handleChange(event, "message")}
          />
          <Validator
            // isValidationError={this.isValidationError}
            isFormSubmitted={submitted}
            reference={{ message }}
            validationRules={{ required: true }}
            validationMessages={{ required: "This field is required" }}
          />
        </div>
        <Button raised type="submit" className="btn primary btn-fullwidth">Submit</Button>
        <div id="form-message" />
      </form>
    </div>
  )
}
export default ContactForm
import React from "react";
import PropTypes from "prop-types";
import Formsy, { HOC } from "formsy-react";

import theme from "../theme";
import FormContainer from "../Sharedy/FormContainer";
import {
  Form,
  Input,
  Select,
  Textarea,
  FormGroup,
  FormGroupHeadline
} from "../Sharedy/Form";

class FormContact extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  async submit(model) {
    dataLayer.push({
      formTitle: "Contact",
      event: "formSubmitted"
    });

    const response = await fetch("https://formspree.io/xgaewyjx", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(model)
    });
  }

  render() {
    return (
      <FormContainer submit={this.submit}>
        <FormGroup>
          <FormGroupHeadline>Your details (Required)</FormGroupHeadline>

          {/* Formspree filters */}
          <div style={{ display: "none" }}>
            <Input type="text" name="_gotcha" value="" />
          </div>
          <Input
            type="hidden"
            name="_subject"
            value="Strata website contact submission"
          />

          <Input placeholder="Your name*" name="name" required />
          <Input
            placeholder="Your email*"
            name="email"
            validations={{ isEmail: true }}
            validationErrors={{ isEmail: "Not a valid email" }}
            required
          />
          <Input
            placeholder="Your phone number*"
            name="phoneNumber"
            validations="isExisty"
            required
          />
          <Textarea placeholder="Add your comments…" name="comments" rows="7" />
        </FormGroup>
      </FormContainer>
    );
  }
}

FormContact.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default FormContact;

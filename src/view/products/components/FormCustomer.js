import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   imageUrl: props.coverImage
    }; 
  }
//   handleUploadFile = value => {
//     this.setState({
//       imageUrl: value.imageUrl
//     });
//   };

  render() {
    // const { imageUrl } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="columns is-centered ">
          <form className="column is-8" onSubmit={handleSubmit}>
            <div class="field ">
              <label class="label">Customer</label>
              <div class="control">
                <Field
                  name="name"
                  component="input"
                  type="text"
                  className="input"
                  placeholder="e.g. Product Name"
                />
              </div>
            </div>

            <div class="field ">
              <label class="label">Brand Name</label>
              <div class="control">
                <Field
                  name="brand"
                  component="input"
                  type="text"
                  className="input"
                  placeholder="e.g. Brand Name"
                />
              </div>
            </div>

            

            <div class="field">
              <label class="label">Product Feature</label>
              <div class="control">
                <Field
                  component="textarea"
                  name="feature"
                  className="textarea"
                  placeholder="e.g. Your product Feature"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Product Benefit</label>
              <div class="control">
                <Field
                  component="textarea"
                  name="benefit"
                  className="textarea"
                  placeholder="e.g. Your product Benefit"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Price</label>
              <div class="control">
                <Field
                  name="price"
                  component="input"
                  className="input"
                  type="number"
                  placeholder="e.g. 2000"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Quantity</label>
              <div class="control">
                <Field
                  name="quantity"
                  component="input"
                  class="input"
                  type="number"
                  placeholder="e.g. 50"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Warranty Period</label>
              
                <div class="select">
                  <Field component="select" name="warranty_p">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="999">Lift time</option>

                  </Field>
                </div>
              
            </div>

            <div class="field is-grouped is-grouped-right">
              <div class="control">
                <button class="button is-link" type="submit">
                  Submit
                </button>
              </div>
              <div class="control">
                <Link to="/products" class="button is-text">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "Customer-form",
  enableReinitialize: true
})(Form);

import React, { Component } from 'react';
import axios from 'axios';
import { Formik, Field } from 'formik';
import Moment from 'react-moment';

const apiEndPoint = "https://localhost:44317/events";
const apiEndPointLoc = "https://localhost:44317/locations";

export class EventEdit extends Component {
    eventId = this.props.match.params.id;

    state = {
        data: {
            name : "",
            description : "",
            date : "",
            free : false,
            locationId : "",
            location: {
                id: "", 
                name: "", 
                description: ""
            }            
        },
        locations : []
    };

    async componentDidMount() {
        const { data } = await axios.get(apiEndPoint + "/edit/" + this.eventId);
        this.setState({ data });
        console.log(this.state.data);

        const { data:locations } = await axios.get(apiEndPointLoc);
        this.setState({ locations });

    }
    render() {
        return (
            <div>
            <Formik
              initialValues={this.state.data}
              enableReinitialize='true'
              validate={values => {
                let errors = {};
                if (!values.name) {
                  errors.name = 'Required';
                }
                if (!values.locationId) {
                  errors.locationId = 'Required';
                }
                return errors;
              }}
              onSubmit={ (values, { setSubmitting }) => {
                axios.post(apiEndPoint + "/edit/" + this.eventId, values).then(response => {
                  setSubmitting(false);
                  this.props.history.push('/events/details/'+ (response.data.id));
                })
                .catch(error => {
                  console.log(error.response);
              });
            }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <Field
                        className="form-control"
                        name="name" 
                    />
                    {errors.name && touched.name && errors.name}
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <Field
                        className="form-control"
                        name="description"
                    />
                    {errors.description && touched.description && errors.description}
                    </div>


                    <div className="form-group">
                        <label>Date</label>
                        <input
                        className="form-control"
                        type="text"
                        name="date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.date}
                    />
                    </div>
                    

                    <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" 
                        type="checkbox" 
                        name="free" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.free} value={values.free} />
                          Free
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Location</label>
                        <Field as="select" className="custom-select" name="locationId"
                              value={values.locationId}
                              onChange={handleChange}
                              onBlur={handleBlur}>
                            <option>Select</option>
                            {this.state.locations.map(location => (
                                <option key={location.id} value={location.id}>{location.name}
                                </option>
                            ))}

                        </Field>
                        {errors.locationId && touched.locationId && errors.locationId}

                    </div>

                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        )
    }
}

export default EventEdit

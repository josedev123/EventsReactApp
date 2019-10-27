import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

const apiEndPoint = "https://localhost:44317/events/details";


export class EventDetails extends Component {
    eventId = this.props.match.params.id;

    state = {
        data: {
            name : "",
            description : "",
            date : "",
            free : false,
            locationId : "",
            location: {
                id: 0, 
                name: "", 
                description: ""
            }            
        }
    };

    async componentDidMount() {
        const { data } = await axios.get(apiEndPoint + "/" + this.eventId);
        console.log(data);
        this.setState({ data });
    }

    render() {
        return (
            <div>
                <h2>{this.state.data.name}</h2> 
                <p>Description</p>

                <div className="event-description">
                {this.state.data.description}
                </div>

                <p>Date:&nbsp; 
                    <Moment format="YYYY/MM/DD">
                      {this.state.data.date}
                    </Moment>  </p>
                <p>Location: {this.state.data.location.name}</p>
            </div>
        )
    }
}

export default EventDetails

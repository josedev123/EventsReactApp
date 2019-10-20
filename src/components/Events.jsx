import React, { Component } from 'react'
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';

const apiEndPoint = "https://localhost:44317/events";
class Events extends Component {

    state = {
        events: []
      };
    
      async componentDidMount() {
        const { data:events } = await axios.get(apiEndPoint);
        this.setState({ events });
      }

      handleAdd = async () => {
          const object = { 
          "name": "Language Class",
          "locationId": 1,
          "description" : "Language class description",
          "free" : false };
          const { data: event } = await axios.post(apiEndPoint + '/create', object);
          console.log(event);
      }
    
    render() {
        return (
            <div>
                <button className="btn btn-primary mb-3" onClick={this.handleAdd}>
                     Add
                </button>
               <table className="table">
                   <thead>
                       <tr>
                           <th>Title</th>
                           <th>Date</th>
                           <th>Update</th>
                       </tr>
                   </thead>
                   <tbody>
                   {this.state.events.map(event => (
                    <tr key={event.id}>
                           <td>{event.name}</td>
                            <td>
                                <Moment format="YYYY/MM/DD">
                                    1976-04-19T12:59-0500
                                </Moment>                          
                            </td>
                           <td>Edit</td>
                       </tr>
                   ))}                     
                   </tbody>
               </table>
            </div>
        )
    }
}

export default Events

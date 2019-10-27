import React, { Component } from 'react';
import axios from 'axios';

const apiEndPoint = "https://localhost:44317/locations";
export class Locations extends Component { 

    state = {
        locations: []
    };
    
    async componentDidMount() {
        const { data:locations } = await axios.get(apiEndPoint);
        this.setState({ locations });
    }

    render() {
        return (
            <div>
                <table className="table">
                   <thead>
                       <tr>
                           <th>Number</th>
                           <th>Name</th>
                           <th>Description</th>
                       </tr>
                   </thead>
                   <tbody>
                   {this.state.locations.map((location, index) => (
                    <tr key={location.id}>
                            <td>
                           {index + 1}    
                           </td>
                           <td>
                           {location.name}    
                           </td>
                            <td>
                            {location.description} 
                            </td>
                       </tr>
                   ))}                     
                   </tbody>
               </table>
            </div>
        )
    }
}

export default Locations
 
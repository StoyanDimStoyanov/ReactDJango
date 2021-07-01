import React, { Component } from 'react';

import { getPetDetails } from '../../services/data';

export default class PetDetails extends Component {
    constructor({props}) {
        super(props)
        this.state = {
          
        }
    }

    async componentDidMount() {
        const id  = this.props.match.params.id
        const pet =  await getPetDetails(id)
        this.setState(pet)
        console.log(this.state);
    
    }
       
        
    
    render() {
      
        return (
            <div style={{display:'flex'}}>
                <div style={{maxWidth:'20%', height:'20%'}}>
                   <img style={{width:'100%', height:'100%', margin:'20px'}} src={this.state.image} alt={'No image at the moment'} />
                </div>
                <div style={{margin:'60px'}}>
                  <h3>Name: {this.state.name}</h3>
                  <h3>Age: {this.state.age}</h3>
                  {/* <h3>Owner: {this.state.owner}</h3> */}
                  </div>
            </div>
        )
    }
}

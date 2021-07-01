import React, { Component } from 'react'
import { getAllPets } from '../../services/data'
import Pet from '../Pet/Pet'
export default class Pets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pets: []
        }
      
    }

    async componentDidMount() {
        const pets = await getAllPets()
        this.setState({pets})
       
       
    };
    
    
    render(){  
        return (
          <div style={{ display:'flex'}}>
             {this.state.pets.map(x => {return <Pet id={x.id} key={x.id} name={x.name} image={x.image} discription={x.discription} age={x.age} />})}
          </div>
        )
    }
}

import React, { Component } from 'react';
//var Modal = require('react-bootstrap-modal')
import 'react-responsive-modal/lib/react-responsive-modal.css';
import Modal from 'react-responsive-modal';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      home:"",
      species:""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }



  closeModal() {
    this.setState({modalIsOpen: false});
  }
  getHome (){
    return axios.get(this.props.character.homeworld).then((response) => {
      this.setState( {
        home: response.data.name
      } );
    });
  }
  getSpecies (){
    return axios.get(this.props.character.species).then((response) => {
      this.setState( {
        species: response.data.name
      } );
    });
  }
  componentDidMount(){
    if (this.props.show=== 'characters'){
      this.getHome();
      this.getSpecies();
    }
  }

  render(){
    const name = this.props.character.name;
    const picName = this.props.character.name.split(' ').join('-')+'-star-wars';
    const img = 'http://images.google.com/search?tbm=isch&q='+picName
    const show = this.props.show;
      if (show === 'characters'){
        return(
        <tr>
          <td className="char-name" onClick={this.openModal} >{name}
          <div>
            <Modal open={this.state.modalIsOpen} onClose={this.closeModal} little>
              <div> <h2>{name}</h2></div>
              <div>{name} comes from {this.state.home}.</div>
              <div>{name} is {this.state.species}.</div><br />
              <div><b>Additional Information:</b></div>
              <div>Hair Color: {this.props.character.hair_color}.</div>
              <div>Skin Color: {this.props.character.skin_color}</div>
              <div>Eye Color: {this.props.character.eye_color}</div>
              <div>Birth Year: {this.props.character.birth_year}</div>
              <div>Gender: {this.props.character.gender}</div>
              <div><a href={img}>{name} Pictures </a></div>
            </Modal>
         </div>
         </td>
         <td className="char-name">{this.state.home}
         </td>
      </tr>
      );
    }
    else if(show === 'Planets'){
      return(
      <tr>
        <td className="char-name" onClick={this.openModal} >{name}
        <div>
          <Modal open={this.state.modalIsOpen} onClose={this.closeModal} little>
            <div> <h2>{name}</h2></div>
            <div>{name} is a {this.props.character.terrain} planet.</div>
            <div>{name} has a population of {this.props.character.population}.</div><br />
            <div><b>Additional Information:</b></div>
            <div>Rotation Period: {this.props.character.rotation_period}.</div>
            <div>Orbital Period: {this.props.character.orbital_period}.</div>
            <div>Diameter: {this.props.character.diameter}.</div>
            <div>Climate: {this.props.character.climate}.</div>
            <div>Gravity: {this.props.character.gravity}.</div>
            <div>Surface Water: {this.props.character.surface_water}.</div>
            <div><a href={img}>{name} Pictures. </a></div>
          </Modal>
        </div>
        </td>
        <td className="char-name">{this.props.character.terrain}
        </td>
        <td className="char-name">{this.props.character.population}
        </td>
      </tr>
    );
   }
  }
}


export default TableRow;

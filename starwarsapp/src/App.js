import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';
import { Button } from 'react-bootstrap'
import H1 from './H1';
import './App.css';
const APIurlChar = "https://swapi.co/api/people/";
const APIurlPlanets = "https://swapi.co/api/planets/";
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      people:[],
      next:"",
      back:"",
      show: 'characters'
    };
    this.getDetailes = this.getDetailes.bind(this);
  }

  getDetailes (){
    return axios.get(APIurlChar).then((response) => {
      this.setState( {
        people: response.data.results,
        next: response.data.next,
        back: response.data.previous
      } );

    });
  }


  componentDidMount(){
    this.getDetailes();
  }

  render() {
    const {people} = this.state;
    const show = this.state.show;
    return (


      <div className="App">
        <H1 show={show} />
        <Button className='charButton' onClick={()=>{
          axios.get(APIurlChar).then((response) => {
            this.setState( {
              people: response.data.results,
              next: response.data.next,
              back: response.data.previous,
              show: 'characters'
            } );
          });
         }}
         bsStyle="primary">Characters!</Button>

        <Button  onClick={()=>{
          axios.get(APIurlPlanets).then((response) => {
            this.setState( {
              people: response.data.results,
              next: response.data.next,
              back: response.data.previous,
              show: 'Planets'
            } );
          });
        }}
        bsStyle="primary">Planets!</Button>

        <Table className="table" people={people} show = {show} />
        <Button onClick={()=>{
          if (this.state.back){
            axios.get(this.state.back).then((response) => {
              this.setState( {
                people: response.data.results,
                next: response.data.next,
                back: response.data.previous
              });
            });
          }
        }}
        className="back-button" bsStyle="primary">back</Button>

        <Button onClick={()=>{
          if (this.state.next){
            axios.get(this.state.next).then((response) => {
              this.setState( {
                people: response.data.results,
                next: response.data.next,
                back: response.data.previous
              });
            });
          }
        }}
        className="next-button" bsStyle="primary">next</Button>
      </div>


    );
  }
}

export default App;

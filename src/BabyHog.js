import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state ={
      weight: 1,
      dimensions: {height: 200, width: 200}
    }
  }

  imageMap = {
    "blue": BlueBaby,
    "sun": SunBaby,
    "glowing": GlowingBaby
  }

  fatten(){ 
    let w = this.state.weight + 10
    let h = this.state.dimensions.height + 20
    let wide = this.state.dimensions.width + 20
    return [w, h, wide]
  }

  thinner(){
    let w = this.state.weight - 10
    let h = this.state.dimensions.height - 20
    let wide = this.state.dimensions.width - 20
    return [w, h, wide]
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.fatten()) : (this.thinner())
    this.setState({
      weight: newWeight[0],
      dimensions: {height: newWeight[1], width: newWeight[2]}
    })
  }

  render() {
    console.log(this.props)
    return (
      <li className="hogbabies">
        <h1>Name: {this.props.pig.name} </h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.pig.hobby}</h3>
       <h4>Eye Color: {this.props.eyeColor}</h4>
          
        <Button onClick={this.changeWeight} name="+">
          Increase Weight
        </Button>
        <Button onClick={this.changeWeight} name="-">
          Decrease Weight
        </Button>

        <div id="babycon" className="hb-wrap">
          <img id="baby" src={this.imageMap[this.props.eyeColor]} style={{height: `${this.state.dimensions.height}px`}, {width: `${this.state.dimensions.width}px`}} alt="a baby hog by the name of MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}

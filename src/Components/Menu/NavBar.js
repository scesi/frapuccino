import React, { Component } from 'react'
import Career from './Career'
class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      careerName: 'Seleccione una carrera'
    }
  }

  selectedCareer (name) {
    this.setState({careerName: name})
  }

  render() {
  let name = this.state.careerName
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">{name}</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <Career className="right hide-on-med-and-down" selectedCareer={this.selectedCareer.bind(this)} />
        </div>
      </nav>
    </div>)
  }
}

export default NavBar

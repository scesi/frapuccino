import React, { Component } from 'react'
import DataService from '../../services/DataService'

class Career extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carrers: []
    }
  }

  componentWillMount () {
    this.service = new DataService()
  }

  componentDidMount () {
    this.service.getCareer().then((data) => {
      this.setState({carrers: data.data})
    })
  }
  
  render() {
    let {
      selectedCareer,
      ...passProps
    } = this.props
    let {carrers} = this.state
    return (
      <ul {...passProps}>
        {carrers.map(carrer => <li key={carrer.code}>
          <a onClick={() => { selectedCareer(carrer.name) }}>{carrer.name}</a>
        </li>)}
      </ul>
    );
  }
}

export default Career

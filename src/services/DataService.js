import axios from 'axios'

const semester = '2018-01'
const queryUrl = {
  carrers: `${semester}.json`
}

class DataService {
  constructor() {
    this.baseUrl = 'http://localhost:3000/'
    // this.baseUrl = 'http://pt.cappuchino.scesi.umss.edu.bo/data/FCyT/'      
  }

  getCareer () {
    return axios.get(`${this.baseUrl}${queryUrl.carrers}`)
  }
}

export default DataService
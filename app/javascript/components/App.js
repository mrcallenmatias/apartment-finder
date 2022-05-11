import React, { Component } from "react"
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Index from './pages/Index'
import Edit from './pages/Edit'
import New from './pages/New'
import NotFound from './pages/NotFound'
import Show from './pages/Show'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    this.readApartments()
  }

  readApartments = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => response.json())
    .then(load => this.setState({apartments: load}))
    .catch(errors => console("Error: ", errors ))
  }

  createApartment = (newApartment) => {
    fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json)
    .then(payload => this.readApartments())
    .catch(errors => console.log("Error: ", errors))
  }

  render () {
    
    return (
      <Router>
        <Navigation {...this.props} />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route 
            path="/index" 
            render={(props) => <Index apartments={this.state.apartments} />} 
          />
          <Route path="/show/:id"
            render={(props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === +id)
              return <Show apartment={apartment} />
            }}
          />
          <Route path="/edit" component={Edit}/>
          <Route path="/new" 
            render={props => <New createApartment={this.createApartment} />}
          />
          <Route path="/notfound" component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App

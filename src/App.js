import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AboutComponent from './components/About'
import WorkComponent from './components/Work'
import SkillsComponent from './components/Skills'
import AcademicComponent from './components/Academic'
import httpClient from './utils/ApiClientHelper'

class App extends Component {
  state = {
    isLoadingResume: true,
    resumeData: null,
  }

  componentDidMount() {
    const client = new httpClient()
    client.get(`${process.env.REACT_APP_BASEURL}/resume`,
      (response) => {
        this.setState({ isLoadingResume: false, resumeData: response.data || null })
      },
      (error) => {
        this.setState({ isLoadingResume: false, resumeData: null })
      })
  }

  render() {
    return (
      this.state.isLoadingResume ? (<div>Loading...</div>) :
        ( this.state.resumeData? (<div className="App">
          <MuiThemeProvider>
            <AboutComponent data={this.state.resumeData.about}/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <WorkComponent data={this.state.resumeData.work}/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <SkillsComponent data={this.state.resumeData.skills}/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <AcademicComponent data={this.state.resumeData.education}/>
          </MuiThemeProvider>
        </div>): (<div>No data available</div>))
    );
  }
}

export default App;



import React, {useEffect} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';

import Footer from './components/Footer';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import PortfolioMain from './pages/PortfolioMainPage';
import Portfolio from './pages/PortfolioPage';
import Achievements from './pages/AchievementsPage';
import Hobbies from './pages/HobbiesPage';
import Achievement from './pages/Achievement';
import Hobby from './pages/Hobby';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Dylan Tyrie-Dron',
      headerLinks: [
        {title: 'Home', path:'/'},
        {title: 'About', path:'/about'},
        {title: 'Contact', path:'/contact'}
      ],
      home: {
        title: 'Dylan Tyrie-Dron',
        subTitle: 'Graduate Software Engineer',
      },
      about: {
        title: 'About me',
      },
      portfolioMainPage: {
        title: 'My Projects!',
      },
      achievements:{
        title: 'My Achievements!',
      },
      hobbies:{
        title: 'My Interests!',
      },
      contact: {
        title: 'Get in touch with me',
      },
      
      
    }
  }
  
  render(){
    return (
              <BrowserRouter >
                <Container className="p-0" fluid={true}>

                  <Navbar className="border-bottom" bg="transparent" expand="lg">
                    <Navbar.Brand>Dylan Tyrie-Dron</Navbar.Brand>

                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                    <Navbar.Collapse id="navbar-toggle">
                      <Nav className="ml-auto">
                        <Link className="nav-link" to={process.env.PUBLIC_URL + '/'}>Home</Link>
                        <Link className="nav-link" to={process.env.PUBLIC_URL + '/about'}>About</Link>
                        <Link className="nav-link" to={process.env.PUBLIC_URL + '/PortfolioMainPage'}>Portfolio</Link>
                        <Link className="nav-link" to={process.env.PUBLIC_URL + '/achievements'}>Achievements</Link>
                        <Link className="nav-link" to={process.env.PUBLIC_URL + '/hobbies'}>Hobbies</Link>
                        <Link className="nav-link" to={process.env.PUBLIC_URL + '/contact'}>Contact</Link>

                      </Nav>
                    </Navbar.Collapse>
                    

                  </Navbar>

                  <Route exact path={process.env.PUBLIC_URL + '/'} render={()=> <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}/>
                  <Route path={process.env.PUBLIC_URL + '/about'} render={()=> <About title={this.state.about.title}/>}/>
                  <Route path={process.env.PUBLIC_URL + '/PortfolioMainPage'} render={()=> <PortfolioMain title={this.state.portfolioMainPage.title}/>}/>
                  <Route path={process.env.PUBLIC_URL + '/achievements'} render={()=> <Achievements title={this.state.achievements.title}/>}/>
                  <Route path={process.env.PUBLIC_URL + '/hobbies'} render={()=> <Hobbies title={this.state.hobbies.title}/>}/>
                  <Route path={process.env.PUBLIC_URL + '/contact'} render={()=> <Contact title={this.state.contact.title}/>}/>
                  <Route path={process.env.PUBLIC_URL + '/PortfolioPage'} render={()=> <Portfolio />}/>
                  <Route path={process.env.PUBLIC_URL + '/Achievement'} render={() => <Achievement/>}/>
                  <Route path={process.env.PUBLIC_URL + '/Hobby'} render={() => <Hobby/>}/>

                  <Footer />

                </Container>
              </BrowserRouter>
            

          
        
    );
  }
  
}

export default App;

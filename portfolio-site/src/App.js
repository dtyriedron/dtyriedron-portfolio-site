import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
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
        title: 'Sesh.',
        subTitle: 'Projects that make a difference',
      },
      about: {
        title: 'About me',
      },
      portfolioMainPage: {
        title: 'My projects!',
      },
      achievements:{
        title: 'My achievements!',
      },
      hobbies:{
        title: 'My interests!',
      },
      contact: {
        title: 'Get in touch with me',
      },
      
      
    }
  }
  render(){
    return (
      <HashRouter>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Dylan Tyrie-Dron</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" exact to="https://dtyriedron.github.io/dtyriedron-portfolio-site/">Home</Link>
                <Link className="nav-link" exact to="https://dtyriedron.github.io/dtyriedron-portfolio-site/about">About</Link>
                <Link className="nav-link" exact to="https://dtyriedron.github.io/dtyriedron-portfolio-site/PortfolioMainPage">Portfolio</Link>
                <Link className="nav-link" exact to="https://dtyriedron.github.io/dtyriedron-portfolio-site/achievements">Achievements</Link>
                <Link className="nav-link" exact to="https://dtyriedron.github.io/dtyriedron-portfolio-site/hobbies">Hobbies</Link>
                <Link className="nav-link" exact to="https://dtyriedron.github.io/dtyriedron-portfolio-site/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>
            

          </Navbar>

          <Route exact path="https://dtyriedron.github.io/dtyriedron-portfolio-site/" render={()=> <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}/>
          <Route exact path="https://dtyriedron.github.io/dtyriedron-portfolio-site/about" render={()=> <About title={this.state.about.title}/>}/>
          <Route exact path="https://dtyriedron.github.io/dtyriedron-portfolio-site/PortfolioMainPage" render={()=> <PortfolioMain title={this.state.portfolioMainPage.title}/>}/>
          <Route exact path="https://dtyriedron.github.io/dtyriedron-portfolio-site/achievements" render={()=> <Achievements title={this.state.achievements.title}/>}/>
          <Route exact path="https://dtyriedron.github.io/dtyriedron-portfolio-site/hobbies" render={()=> <Hobbies title={this.state.hobbies.title}/>}/>
          <Route exact path="https://dtyriedron.github.io/dtyriedron-portfolio-site/contact" render={()=> <Contact title={this.state.contact.title}/>}/>
          <Route exact path="https://dtyriedron.github.io/dtyriedron-portfolio-site/PortfolioPage" render={()=> <Portfolio />}/>

          <Footer />

        </Container>
      </HashRouter>
    );
  }
  
}

export default App;
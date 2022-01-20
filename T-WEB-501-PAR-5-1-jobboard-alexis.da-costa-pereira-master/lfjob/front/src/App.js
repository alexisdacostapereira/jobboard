import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Employeur from './pages/Employeur';
import Seconnecter from './pages/Seconnecter';
import Creationcomptepro from './pages/Creationcomptepro';
import Creationcomptepar from './pages/Creationcomptepar';
import Admin from './pages/Admin'
import './App.css';
import './index.css';
import Navbar from './Navbar'
import Footer from './Footer'



class App extends React.Component {
    render() {
        return <BrowserRouter>
        <div className="page-container">
        
        
            
            <Navbar />
            <div className="content-wrapper">
                <Switch>
                    
                        <Route  path="/" exact component={Home} />
                        <Route  path="/employeur" exact component={Employeur} />
                        <Route  path="/seconnecter" exact component={Seconnecter} />
                        <Route  path="/creationcomptepro" exact component={Creationcomptepro} />
                        <Route  path="/creationcomptepar" exact component={Creationcomptepar} />
                        <Route  path="/admin" exact component={Admin} />
                    
                 </Switch>

                 </div>
            <Footer />
            </div>
        </BrowserRouter>;

    }
}

export default App;
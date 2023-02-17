import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css";
import Navbar from "./components/navegacion/Navbar"
import Inicio from "./components/paginas/Inicio"
import Inicio_productor from "./components/paginas/Inicio_productor"


function App(){
    return(
        <div className="App">
            <Router>
                <Navbar>
                    <Switch>
                        <Route path="/" exact component={Inicio}/>
                        <Route path="/inicio_productor.js" component={Inicio_productor}/>
                    </Switch>
                </Navbar>
            </Router>

        </div>
    );
}

export default App;


import Header from "../header";

import './app.css';

const App=()=>{
    return(
        <div>
            <Header/>
            <RandomPlanet />
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails/>
                </div>
            </div>
        </div>
    );
}
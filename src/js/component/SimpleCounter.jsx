import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
// Creamos el componente SimpleCounter
export const SimpleCounter = () => {
    const [count, setCount] = useState(0);
    


    useEffect(() => {
      const interval =  setInterval (() => {
        setCount (count => count + 1);
    }, 1000);

    }, []);

    //Retorno un solo elemento HTML
    return (
        <div className="Container-fluid text-center">
                <h1 className="my-4">Simple Counter</h1>
                <div className="d-flex justify-content-center align-items-center">
            <div className="boxes">
                <div>
                <i className="fa-regular fa-clock" style={{color: "#ebedef;"}}></i>
                </div>
                <div className="large-text">{Math.floor(count / 100000 % 10)}</div>
                <div className="large-text">{Math.floor(count / 10000 % 10)}</div>
                <div className="large-text">{Math.floor(count / 1000 % 10)}</div>
                <div className="large-text">{Math.floor(count / 100 % 10)}</div>
                <div className="large-text">{Math.floor(count  / 10 % 10)}</div>
                <div className="large-text">{Math.floor(count % 10)}</div>
            </div>
        </div> 
        </div>

    );
}
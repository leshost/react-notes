import React, {useEffect} from 'react';

export const About = () => {
    
    useEffect(() => {
        document.title = "Про програму"
     }, []);

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Нотатки</h1>
                <p className="lead">Версія програми <strong>1.0.0</strong></p>
            </div>
        </div>
    )
}
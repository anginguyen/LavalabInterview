import { useState } from 'react';
import '../css/Card.css';

export default function Card(props) {
    const [toggle, setToggle] = useState(false);
    const alt = props.app.name + ' logo';

    var buttonClassName = "card-button";
    var buttonText = "Connect"

    if (toggle) {
        buttonClassName = buttonClassName + " card-button--selected";
        buttonText = "Connected";
    }

    return (
        <div className='card'>
            <div className='card-top-row'>
                <img src={props.app.logo} alt={alt} className='card-logo' />
                <button className={buttonClassName} onClick={() => setToggle(!toggle)}>{buttonText}</button>
            </div>

            <p className='card-name'>{props.app.name}</p>
            <p className='card-description'>{props.app.description}</p>
        </div>
    )
}
import React from 'react';
import LanguageContext from '../context/LanguageContext';


class Field extends React.Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        return(
            <div className='ui field'>
                <h1>Translate</h1>
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field;
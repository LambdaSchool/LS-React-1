import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

class Button extends React.Component {
    render() {
        return (<button>How Do I?</button>);
    }
}

render(<App />, document.getElementById('root'));

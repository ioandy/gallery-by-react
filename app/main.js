//main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//ʹ��require����css�ļ�

render(<Greeter />, document.getElementById('root'));
 
//var greeter = require('./Greeter.js');
//document.getElementById('root').appendChild(greeter());
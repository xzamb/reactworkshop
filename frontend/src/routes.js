import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './views/login';
import Main from './views/main';
import Video from './views/video';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/main" component={Main}/>
            <Route path="/new" component={Video}/>
        </BrowserRouter>
    );
}
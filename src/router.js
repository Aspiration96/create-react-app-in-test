import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './layouts/LoginLayout/DefaultLayout';
import LoginUser from './layouts/LoginUser/LoginUser';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Article from './routes/Article/Article';
import Resource from './routes/Resource/Resource';
export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                    <Route path="/" component={LoginUser} exact />
                        <Route path="/home" component={DefaultLayout} />
                        {/*<Route path='*' component={LoginUser} />*/}
                        {/*<Redirect from='*' to='/404' />*/}
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
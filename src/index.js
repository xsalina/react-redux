import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import {addstate,reducestate,reducer,removeAsync} from './redux/index.js'
import App from './App';
import * as serviceWorker from './serviceWorker';



const devToolsExtension = window.devToolsExtension ? window.devToolsExtension():()=> {}
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        devToolsExtension
    )
)
render()
function render(){
    ReactDOM.render(
        <App 
            store={store}
            addnum = {addstate}
            reducenum = {reducestate}
            rmasync={removeAsync}
        />, 
    document.getElementById('root'));
}
store.subscribe(render);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//mideleware 中间件
//脚手架 集成项目开发环境  不需要开发者各种配置

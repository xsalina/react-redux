import React from 'react';
import ReactDOM from 'react-dom';
//Provider 组件 负责数据处理 （容器）
import {Provider} from "react-redux";
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import {reducer} from './redux/index.js'
import App from './App';
import * as serviceWorker from './serviceWorker';


//调试工具
const devToolsExtension = window.devToolsExtension ? window.devToolsExtension():()=> {}
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        devToolsExtension
    )
)

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,

    document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//mideleware 中间件
//脚手架 集成项目开发环境  不需要开发者各种配置

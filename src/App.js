import React, { Component } from 'react';
import {connect} from "react-redux";
import {addstate,reducestate,removeAsync} from './redux/index.js';
// //把state 映射到props中去   意思是吧redux的reducers返回的 新的状态 映射到react中的props中去
// //见名知义
// const mapStateToProps = state =>{
//           return {xyz:state}
// }
// // 把各种dispatch也变成props 让你能够通过props使用
// const mapDispatchToProps = {addstate,reducestate,removeAsync}
//
//
// //连接 mapStateToProps，mapDispatchToProps
// App = connect(mapStateToProps,mapDispatchToProps)(App)


@connect(
    state=>({xyz:state}),
    {addstate,reducestate,removeAsync}
)

class App extends Component {

  render() {

    return (
    <div className="todoapp">
      <div>
        <h2>redux</h2>
        <hr />
        <input 
          type="button" 
          defaultValue="增加数量" 
          onClick={()=>{
              this.props.addstate()
          }} 
        />
        <br /> 
        <br />
        <h3>{this.props.xyz}</h3>
        <br />
        <hr />
        <input 
          type="button" 
          defaultValue="减少数量" 
          onClick={()=>{
            this.props.reducestate()
          }} 
        />
        <br/>
        <br/>
        <input
            type="button"
            defaultValue="异步操作减少数量state"
            onClick={()=>{
              this.props.removeAsync()
            }}
        />
        <br/>
      </div>
    </div>
    )}
}



// //把state 映射到props中去   意思是吧redux的reducers返回的 新的状态 映射到react中的props中去
// //见名知义
// const mapStateToProps = state =>{
//           return {xyz:state}
// }
// // 把各种dispatch也变成props 让你能够通过props使用
// const mapDispatchToProps = {addstate,reducestate,removeAsync}
//
//
// //连接 mapStateToProps，mapDispatchToProps
// App = connect(mapStateToProps,mapDispatchToProps)(App)

export default App;



import React, { Component } from 'react';
import {removeAsync} from "./redux";
class App extends Component {
  render() {
    const {store,addnum,reducenum,rmasync} = this.props;
    return (
    <div className="todoapp">
      <div>
        <h2>redux</h2>
        <hr />
        <input 
          type="button" 
          defaultValue="增加数量" 
          onClick={()=>{
            store.dispatch(addnum())
          }} 
        />
        <br /> 
        <br />
        <h3>{store.getState()}</h3>
        <br />
        <hr />
        <input 
          type="button" 
          defaultValue="减少数量" 
          onClick={()=>{
            store.dispatch(reducenum())
          }} 
        />
        <br/>
        <br/>
        <input
            type="button"
            defaultValue="异步操作减少数量"
            onClick={()=>{
              store.dispatch(rmasync())
            }}
        />
        <br/>
      </div>
    </div>
    )}
}



export default App;
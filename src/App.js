import React, { Component } from 'react';
class App extends Component {
  render() {
    const {store,addnum,reducenum} = this.props;
    return (
    <div className="todoapp">
      <div>
        <h2>redux</h2>
        <hr />
        <input 
          type="button" 
          defaultValue="增加数量" 
          onClick={()=>{
            store.dispatch({
              type:addnum
            })
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
            store.dispatch({
              type:reducenum
            })
          }} 
        />
      </div>
    </div>
    )}
}



export default App;
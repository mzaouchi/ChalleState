import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tasks : [
        { text: 'Buy tabbac', id : 0 , isDone:false},
        {text: 'Buy more tabbac', id:1 , isDone:true},
        {text:'Quit smoking', id:2, isDone:false}
          ],
        textP : ""
    }
  }
  addTask=()=> this.setState({...this.state,tasks : [...this.state.tasks,{text:this.state.textP, id:Math.random(), isDone:false}]})
  deleteTask=(a)=> this.setState({...this.state,tasks : this.state.tasks.filter(el=> el.id != a)})
  editTask=(a)=> this.setState({...this.state,tasks : this.state.tasks.map(el=> el.id ==a ? {...el,isDone : !el.isDone} : el ) })
  render(){
    return(
      <div>
        <h1>Challenge State</h1>
        {
          this.state.tasks.map(el=> 
          <div>
            <h2>{el.text}</h2>
            <button onClick={()=>this.editTask(el.id)}>{el.isDone ==true ? "Undone" : "Done"}</button>
            <button onClick={()=>this.deleteTask(el.id)} >Delete</button>
          </div>)
        }
        <br/>
        <input type='text' onChange={(e)=>this.setState({...this.state,textP : e.target.value})}/>
        <button onClick={this.addTask}>Add</button>
      </div>
    )
  }
}
export default App;

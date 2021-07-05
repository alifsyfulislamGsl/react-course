import React from 'react'
import State from './components/State'
import StudentList from './components/StudentList'
// import ReactDOM from 'react-dom';
import './App.css';

function App() {

  const element = React.createElement(
      'h1',
      {
        className : 'text-primary'
      },
      'Hello World!'
  )

  const elementJSX = (
      <h3 className="text-primary">Hello! I am JSX</h3>
  );

  // the deference between function and class

  const Welcome = (props) =>{
    return <h1>Hello, {props.name}.</h1>
  }

  // console.log(Welcome)

  class EntryMessage extends React.Component{
    render(){
      console.log(this)
      return (
          // element
          <div>
            <div>{element}</div>
            <div>{elementJSX}</div>
            <h1 className={'text-primary'}>Hello, Dhaka. {this.props.msg}</h1>
            <h1>Hello, {this.props.msg}</h1>
            <State msg={this.props.msg}/>
            <StudentList/>
          </div>
      )
    }
  }
  console.log(EntryMessage);
  // props is not changeable
  // state can be changeable on current component

  /*<div>
    <Welcome name={'Alif'}/>
    <EntryMessage msg='Good Morning!'/>
  </div>*/

  /*<React.Fragment>
    <Welcome name={'Alif'}/>
    <EntryMessage msg='Good Morning!'/>
  </React.Fragment>*/

  return (
      <>
        <Welcome name={'Alif'}/>
        <EntryMessage msg='Good Morning!'/>
      </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

// class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state  = {
//       count: 0
//     }
//   }

//   render() {
//     console.log(this.props);
//     // Declara una nueva variable de estado, la cual llamaremos “count”

//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         {this.state.count > 10 ? <h1>Es mayor a 10</h1> : 'Es menor a 10'}
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
//       </div>
//     );
//   }
// }

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <button type='button'>{this.props.index}</button>;
//   }
// }

// const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

ReactDOM.render(
  // <Example title='example' description="description example"></Example>,
  // (buttons.map((index) => index % 2 === 0 && <Button index={index}></Button>)),
  <App></App>,
  document.getElementById('root')
);

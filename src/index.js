// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   // <React.StrictMode>
//     <HeadNav />,
//   // {/* </React.StrictMode>, */}
//   document.getElementById('root')
// );

// export default class DefaultLayout extends Component{
//   render(){
//       return (
//           <div id="root">
//               <HeadNav/>
//           </div>
//       )
//   }
// }




ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // {/* </React.StrictMode>, */}
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeadNav from './HeadNav';
import RouterWrap from './router';
import reportWebVitals from './reportWebVitals';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import './HeadNav.less';

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
    <RouterWrap />,
  // {/* </React.StrictMode>, */}
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

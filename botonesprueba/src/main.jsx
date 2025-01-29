import React from 'react';
import ReactDOM from 'react-dom/client'
import {App} from "./App.jsx";
import './index.css'

const wakanda = ReactDOM.createRoot(document.getElementById('wakanda'))


wakanda.render(
    <React.Fragment>
       <App/>
    </React.Fragment>
)

// const wakanda = ReactDOM.createRoot(document.getElementById('wakanda'))
//
// // PascalCase
// // camelCase
// // snake_Case
// // kebab-case
//
// const Botoncito = ({text}) =>{
//     return(
//         <button>
//             <svg fill="none" xmlns="http://www.w3.org/2000/svg"
//                  viewBox="0 0 25 20"><path d="M22.3958 9.08333V3.41667c0-1.25-.6666-1.75-2.3229-1.75h-4.2083c-1.6563 0-2.3229.5-2.3229 1.75v5.66666c0 1.24997.6666 1.74997 2.3229 1.74997h4.2083c1.6563 0 2.3229-.5 2.3229-1.74997ZM11.4583 10.9167v5.6666c0 1.25-.6666 1.75-2.32288 1.75H4.92708c-1.65625 0-2.32291-.5-2.32291-1.75v-5.6666c0-1.25003.66666-1.75003 2.32291-1.75003h4.20834c1.65628 0 2.32288.5 2.32288 1.75003ZM22.3958 16.5833V14.25c0-1.25-.6666-1.75-2.3229-1.75h-4.2083c-1.6563 0-2.3229.5-2.3229 1.75v2.3333c0 1.25.6666 1.75 2.3229 1.75h4.2083c1.6563 0 2.3229-.5 2.3229-1.75ZM11.4583 5.75V3.41667c0-1.25-.6666-1.75-2.32288-1.75H4.92708c-1.65625 0-2.32291.5-2.32291 1.75V5.75c0 1.25.66666 1.75 2.32291 1.75h4.20834c1.65628 0 2.32288-.5 2.32288-1.75Z" fill="#000"/></svg>
//             {text}
//         </button>
//     )
// }
//
// wakanda.render(
//     <React.Fragment>
//         <Botoncito text='Kelmita' />
//         <Botoncito text='Bianquita' />
//         <Botoncito text='La Pequeña' />
//         <Botoncito text='Leche Gloria' />
//
//         <input type="submit" value="KYAAA"/>
//     </React.Fragment>
// )



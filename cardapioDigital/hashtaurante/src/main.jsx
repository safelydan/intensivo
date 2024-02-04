import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx' //entre cholchetes se importa funções

// utiliza o método createRoot do ReactDOM para renderizar a aplicação React
// o método createRoot é usado para criar uma "raiz" para a renderização, permitindo o uso de características experimentais do React.
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode é um componente utilizado para destacar potenciais problemas durante o desenvolvimento
  // ele realiza verificações adicionais e emite avisos no console sobre práticas de código que podem levar a problemas futuros.
  <React.StrictMode>
    {/* o componente principal da aplicação, geralmente chamado de <App />, está envolto por <React.StrictMode> */}
    <App />
  </React.StrictMode>,
);

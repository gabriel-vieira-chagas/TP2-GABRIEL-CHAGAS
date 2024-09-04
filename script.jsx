import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
      <>
        <h1 className="title">Hello, React!</h1>
        <p className="description">Welcome to my React App.</p>
        <section className="grid"></section>
        <a href="https://www.youtube.com/watch?v=Sx86-18V3m8">
            <h2>Gabriel Vieira Chagas</h2>
            <p>O link leva para o hino do maior time do planeta terra, o Clube de Regatas do Flamengo.</p>
        </a>
      </>
    );
  };
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import React from "react";
import '../styles/App.css';



const App = (props) => {
  const { data } = props;
  document.querySelector('title').textContent = `${data.companyName} Eats`;
  return (
    <>
      <div className='App'>
        <nav className='nav-container'>
          <h1 className='company-name'>{data.companyName} Eats</h1>
          <div className='navBtns'>
            <button>Home</button>
            <button>Help</button>
          </div>
        </nav>
      </div>

    </>
  );
};
export default App;

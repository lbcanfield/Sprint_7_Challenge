import React from "react";



const App = (props) => {
  const { data } = props;
  document.querySelector('title').textContent = `${data.companyName} Eats`;
  return (
    <>
      <h1>{data.companyName} Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;

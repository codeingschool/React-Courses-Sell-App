import React from 'react';

import './App.css';

import Courcesels from './Components/Cources';

function App() {

  // Getting some course value, might be it comes from api or db
  var courses = [
    {
      name : "noje.Js course",
      price : 199
    },
    {
      name : "react.Js course",
      price : 299
    },
    {
      name : "iOS course",
      price : 399
    },
    {
      name : "Android course",
      price : 499
    }
  ];

  return (
    <div className="App">
      <Courcesels items={courses}/> {/* the courses value will sent to course.js as a propes */}
    </div>
  );
}

export default App;

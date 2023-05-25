import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Step1 from './component/Step1';
import Step2 from './component/Step2';
import Step3 from './component/Step3';
import Result from './layout/Result';

const App =  () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" component={<Step1/>}/>
        <Route path="/step2" component={<Step2/>}/>
        <Route path="/step3" component={<Step3/>}/>
        <Route path="/result" layout={<Result/>}/>
      </Routes>  
    </Router>
  );
};

export default App;

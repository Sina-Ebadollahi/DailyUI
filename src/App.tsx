import './App.css';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Daily1 from './Pages/Daily1/Daily1';
import NotFound from './Pages/NotFound/NotFound';
import IPUtility from './IPmanager/IPUtility';
import Daily2 from './Pages/Daily2/Daily2';

function App() {
  // get ip
  IPUtility();
  
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Daily1' element={<Daily1 />}/>
          <Route path='Daily2' element={<Daily2 />} />


          <Route path="*"  element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

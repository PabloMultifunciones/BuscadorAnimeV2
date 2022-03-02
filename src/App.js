import BoxBrowser from './components/boxBrowser.js';
import BoxResults from './components/boxResults.js';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('waiting');
  const [clave, setClave] = useState('');
  const [filter, setFilter] = useState([]);
  
  return (
    <div>
      <BoxBrowser 
        search={setState} 
        setClave={setClave}
        filter={filter}
        setFilter={setFilter}
      />
      <BoxResults 
        setState={setState} 
        state={state} 
        clave={clave}
        filter={filter}
      />
    </div>
  );
}

export default App;

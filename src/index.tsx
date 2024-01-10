import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

function App () {
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [chackValue, setCheckValue] = useState<string | null>(null);

  return (
    <section>
      <div>
        いつまでに欲しい？
        <select>
          <option>3日以内</option>
          <option>1週間以内</option>
          <option>2週間以内</option>
        </select>
      </div>
      <div>
        JCB <input type="checkbox" value="jcb" /><br />
        VISA <input type="checkbox" value="visa" /><br />
        Master Card <input type="checkbox" value="mastercard" />
      </div>
    </section>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
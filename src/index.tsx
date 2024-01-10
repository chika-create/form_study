import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

function App () {
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [chackValue, setCheckValue] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // チェックが付いた場合、配列に追加
      setCheckValue(prevValues => [...prevValues, value]);
    } else {
      // チェックが外れた場合、配列から削除
      // prevValues配列からvalueと一致する要素を除外し、新しい配列を作成
      setCheckValue(prevValues => prevValues.filter(item => item !== value));
    }
  };

  return (
    <section>
      <div>
        いつまでに欲しい？
        <select onChange={event => setSelectValue(event.target.value)}>
          <option>3日以内</option>
          <option>1週間以内</option>
          <option>2週間以内</option>
        </select>
      </div>
      <div>
        JCB <input type="checkbox" value="jcb" onChange={handleCheckboxChange} /><br />
        VISA <input type="checkbox" value="visa" onChange={handleCheckboxChange} /><br />
        Master Card <input type="checkbox" value="mastercard" onChange={handleCheckboxChange} />
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
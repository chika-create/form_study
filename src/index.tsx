import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

function App () {
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [checkValue, setCheckValue] = useState<string[]>([]);
  const [textBoxValue, setTextBoxValue] = useState<string>("");

  // checkboxが変更された場合
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

  // textboxが変更された場合
  const handleTextBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextBoxValue(event.target.value);
  }

  return (
    <div>
      <section>
        <h1>クレジットカードを検索する</h1>
        <div>
          <h2>いつまでに欲しい？</h2>
          <select onChange={event => setSelectValue(event.target.value)}>
            <option>3日以内</option>
            <option>1週間以内</option>
            <option>2週間以内</option>
          </select>
        </div>
        <div>
          <h2>希望の国際ブランドは？</h2>
          JCB <input type="checkbox" value="jcb" onChange={handleCheckboxChange} /><br />
          VISA <input type="checkbox" value="visa" onChange={handleCheckboxChange} /><br />
          Master Card <input type="checkbox" value="mastercard" onChange={handleCheckboxChange} />
        </div>
        <div>
          <h2>ご自身の年齢は？</h2>
          <label>
            <input type="radio" value="25歳以下" />
            25歳以下
          </label>
          <label>
            <input type="radio" value="25〜35歳" />
            25〜35歳
          </label>
          <label>
            <input type="radio" value="35歳〜" />
            35歳〜
          </label>
        </div>
        <div>
          <h2>感想</h2>
          <input type="text" value={textBoxValue} onChange={handleTextBoxChange} />
        </div>
      </section>
      <section>
        <h1>変更された値</h1>
        <ul>
          <li>いつまでに欲しい？：{selectValue}</li>
          <li>選択されたチェックボックス：{checkValue.join(", ")}</li>
          <li>選択されたラジオボタン：</li>
          <li>感想に入力された内容：{textBoxValue}</li>
        </ul>
      </section>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
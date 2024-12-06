import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState<number | null>(null);
  const [waterAmount, setWaterAmount] = useState<number | null>(null);
  const [theme, setTheme] = useState('light');

  const calculateWater = () => {
    if (weight) {
      const result = weight * 2.2 * (30 / 2);
      setWaterAmount(result.toFixed(2)); // จำกัดทศนิยม 2 ตำแหน่ง
    }
  };

const toggleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
};

  return (
    <div className={`App ${theme}`}>
      <h1>คำนวณปริมาณน้ำที่ควรดื่มต่อวัน</h1>
      <input
        type="number"
        placeholder="กรอกน้ำหนัก (kg.)"
        value={weight || ''}
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <button onClick={calculateWater}>คำนวณ</button>
      {waterAmount && <h3>คุณควรดื่มน้ำ {waterAmount} มิลลิลิตร ต่อวัน</h3>} <br />
      <button onClick={toggleTheme}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
      <p>สูตรคํานวณ: น้ำหนัก x 2.2 x (30/2) = ปริมาณน้ำ(มิลลิลิตร) </p>
    </div>
  );
}

export default App;
import './App.css';
import { useState } from 'react'

function App() {

  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState('male')
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)



  function calculate(e) {
    e.preventDefault();
    let promillit = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);

    if (gender === 'male') {
      promillit = gramsLeft / (weight * 0.7);
    }
    else {
      promillit = gramsLeft / (weight * 0.6);
    }
     setResult(promillit);
  }


  return (
    <>
    <h3>Veren alkoholipitoisuuden laskeminen</h3>
    <form onSubmit={calculate}>
      <div>
        <label>Paino: </label>
        <input name='weight' type='number' step='1' value={weight} onChange={e => setWeight(e.target.value)}  />
      </div>
      <div>
        <label>Tölkkejä: </label>
        <select name='time' value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
      </div>
      <div>
        <label>Aika (h) </label>
        <select name='time' value={time} onChange={e => setTime(e.target.value)}>
        <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
      </div>
      <div>
          <label>Sukupuoli: </label>
          <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)} /><label>Mies</label>
          <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)} /><label>Nainen</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button>Laske</button>
    </form>
    </>
  );
}

export default App;

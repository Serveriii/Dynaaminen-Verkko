import { useState } from 'react';
import './App.scss';


function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  const bottlesIndex = Array.from(Array(19).keys());
  const timeIndex = Array.from(Array(25).keys());

  function amountGrams(){
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let gramsLeft = grams - ((weight/10) * time);
    return gramsLeft
}

  function Calculate(e){
    e.preventDefault();
    let results = 0;

    document.getElementById("alcolevel").className = "";

    if (gender === "male"){
    results = amountGrams() / (weight*0.7);
    } else {
      results = amountGrams() / (weight*0.6);
    }
    if (results <= 0 || results < 0.2){
      results = 0;
    }
    if (results >= 0.2 && results < 0.45 ) {
      document.getElementById("alcolevel").classList.add('mild');
    } else if (results >= 0.45 && results < 1) {
      document.getElementById("alcolevel").classList.add('semi');
    } else if (results >= 1) {
      document.getElementById("alcolevel").classList.add('very');
    }
    setResult(results)
  }

  return (
    <>
    <h3 className='container'>Calculate blood alcohol level</h3>
    <form onSubmit={Calculate}>
      <div>
        <label>Weight(kg)</label>
        <input type="number" id='weight' value={weight} onChange={e => setWeight(e.target.value)}  />
      </div>
      <div>
        <label>Bottles</label>
        <select name="bottles" id="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
        {
          bottlesIndex.map(opt=><option>{opt}</option>)
        }
        </select>
        <div>
          <label>Time(h)</label>
          <select name="time" id="time" value={time} onChange={e => setTime(e.target.value)}>
          {
            timeIndex.map(opt=><option>{opt}</option>)
          }
          </select>
        </div>
      </div>
      <div>
      <input type="radio" name='gender' value={"male"} onChange={e => setGender(e.target.value)} /> <label className='gender'>Male</label>
      <input type="radio" name='gender' value={"female"} onChange={e => setGender(e.target.value)}/> <label className='gender'>Female</label>
      </div>
      <div>
        <p>Your blood alcohol level is:</p>
        <output id='alcolevel'>{result.toFixed(2)}</output>
        <button className='btn btn-primary'>Calculate</button>
      </div>
    </form>
    </>
  );
}

export default App;

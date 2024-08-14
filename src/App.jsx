import React,{useState} from 'react'
import './App.css'

function App() {
  const [minVal , setMinVal] = useState(0);
  const [maxVal , setMaxVal] = useState(10);
  const [randomNum , setRandomNum] = useState();
  const giveRandomNumber = () => {
    if (minVal > maxVal) {
      alert('Minimum değer maksimum değerden büyük olamaz!');
      return;
    }
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };
  return (
    <>
    <div className='container mx-auto w-full h-full py-24 px-12 bg-[#ffffff] shadow-lg rounded-lg'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-row w-full relative'>
          <input className='pl-44' type="text" id='randomNum' name='randomNum' value={randomNum}/>
          <label htmlFor="randomNum" className='absolute left-4 top-1/2 transform -translate-y-1/2'>RANDOM NUMBER : </label>
        </div>
        <div className="flex flex-row justify-between gap-5">
          <div className="flex flex-col items-start">
          <label htmlFor="min">MIN</label>
          <input type="number" min="0" id='min' name='min' value={minVal} onChange={e => setMinVal(+e.target.value)}/>
          </div>
          <div className="flex flex-col items-start">
          <label htmlFor="max">MAX</label>
          <input type="number" min="0" id='max' name='max' value={maxVal} onChange={e => setMaxVal(+e.target.value)}/>
          </div>
        </div>
        <div className="flex flex-row">
          <button 
          className='bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400'
          onClick={giveRandomNumber}
          >Get Random Number </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

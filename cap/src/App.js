import React,{useState} from "react";
import './App.css';
 const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]


function App() {
  const [capital,setCapital]=useState(countryAndCapitalsList[0].id)

  const onCapital=(e)=>{
    setCapital(e.target.value)
  }
  const final=countryAndCapitalsList.find(each=>
    each.id===capital)
    


  return (
    <div>
     <h1>Capitals</h1>
     <select onChange={onCapital}>
      {countryAndCapitalsList.map((each=>{
       return  <option key={each.id} value={each.id}>{each.capitalDisplayText}</option>
      }))}
     </select>
     <p>{final.country}</p>

    </div>
  );
}

export default App;

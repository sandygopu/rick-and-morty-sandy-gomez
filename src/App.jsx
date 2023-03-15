
import reactLogo from './assets/react.svg'
import './App.css'
import ResidentInfo from './components/ResidentInfo'
import axios from 'axios'
import { useEffect, useState } from 'react' //Para que la peticion de Api sea controlada (useEffect) y guardada la informacion (useState)
import NavBar from './components/NavBar'
import Location from './components/Location'


function App() {
  const [locationData, setLocationData] = useState("") //Llaves porque en la Api la informacion viene en informacion de objeto
  const [ data, setData ] = useState();
  const [ idResidents, setIdResidents] = useState();
  const [ residents, setResidents ]  = useState();

  
  const getIdsFromArray = (array) => {
    const numbers= []
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
      numbers.push(element.split("/")[element.split("/").length-1])
      
    }
    return numbers.join()
  }


  useEffect(() => {
    if (locationData) {
  
    
    axios.get(`https://rickandmortyapi.com/api/location/${ locationData }`)
      .then((resp) => {
        console.log(resp)
        setData(resp.data)
        setIdResidents( getIdsFromArray( resp.data.residents) )
      })
      .catch((err) => {
        console.log(err)
      })  }
  }, [locationData])
  
  
  useEffect(() => {
    if(idResidents) {
      axios.get(`https://rickandmortyapi.com/api/character/${idResidents}`)
        .then((resp) => {
          console.log(resp)
          setResidents(resp.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }

  },[idResidents])




  return (

    <div className='App-container'>
   
      <NavBar
      setLocationData={setLocationData} 
       />

      {data && <Location 
      data={data}
      />}

      

    <div className="App">

    <ul>
      
      { residents &&
       residents.map(data => (
       <ResidentInfo  
       key={data.id}
       dataCharacter={ data }
      />
      ))
      }
      </ul>
     
      
      {/* {characterData &&  <Characters
      data={characterData}
      />} */}
    </div>
    </div>
  )
}

export default App

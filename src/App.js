import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card.js';

function App() {

  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState(data)
  const [universityName, setUniversityName] = useState("")

  const handleSearch = (e) => {

    e.preventDefault()

    const update = data.filter((item) => {
      return item.name.toLowerCase().search(universityName.toLowerCase()) !== -1
    })
    setFilterData(update)

  }

  useEffect(() => {

    fetch("http://universities.hipolabs.com/search?all", {
      method: "GET"
    }).then((res) => res.json()).then((res) => setData(res))

  }, [])

  useEffect(() => {

    const update = data.filter((item) => {
      return item.name.toLowerCase().search(universityName.toLowerCase()) !== -1
    })
    setFilterData(update)

  }, [data, universityName])

  const renderComponent = () => {
    if(data.length === 0){

      return(
        <div className='loader'>
          <div className='spinner'></div>
        </div>
      )

    }else{
      if(filterData.length === 0){
        return <h4 className='invalid'>University Not Found</h4>
      }else{
        return(
          filterData.map((item, index) => <Card data={item} key={index}/>)
        )
      }
    }
  }

  return (
    <>

      <div className='header'>

        <h1>All Universities({data.length})</h1>

        <div className='form-container'>
          <form onSubmit={(e) => handleSearch(e)}>
            <input type={"text"} placeholder={"Type University Name Here..."} value={universityName} onChange={(e) => setUniversityName(e.target.value)}/>
            <button type='submit'>Find</button>
          </form>
        </div>

      </div>

      <div className="App">

        <div className='container'>
        {
          renderComponent()
        }
        </div>
          
      </div>

    </>
  );
}

export default App;

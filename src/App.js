import React, { useState } from 'react'
import Header from './components/Header'
import Graph from './components/Graph'
import Posts from './components/Posts'

const App = () => {

  const mystyle = {
    textAlign: "center",
    color: "white",
    backgroundColor: "#A5B3C5",
    padding: "10px",
    fontFamily: "Andale Mono, monospace",
    fontWeight: "100"
  };

  const [data, setData] = useState([])

  const getCoinData = async () => {
    const url = "https://index-api.bitcoin.com/api/v0/history"
    const coinResponse = await fetch(url)
    const data = await coinResponse.json()
    setData(data)
  }

  getCoinData()

  return (
    <div style = {mystyle}>
      <Graph data={data} />
      <h1 style={mystyle}>
      <Header />
      </h1>
      <div>
        <Posts data={posts} />
      </div>

  </div>
  )
}

export default App

import React from 'react'
import '../css/index.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useState } from 'react'
// import Footer from '../components/Footer'

export default function Home() {

  const [shake, setShake] = useState(false)

  const animate = () => {
    setShake(true)
    setTimeout(() => {
      setShake(false)
    }, 500)
  }

  // <Link>
  // <button onClick = {animate} className = {shake ? `shake` : null}>Week 4</button>
  // </Link>
  return (
        <>
          <Header></Header>
          
          <div className={"blocks_holder"}>
            <ul>
              <li>
                <Link to={"/1"}>
                <button>Week 1</button>
                </Link>
              </li>
              <li>
                <Link to={"/2"}>
                <button>Week 2</button>
                </Link>
              </li>
              <li>
                <Link to={"/3"}>
                <button>Week 3</button>
                </Link>
              </li>

              <li >
              <Link to={"/4"}>
                <button>Week 4</button>
                </Link>
              </li>
              <li>
              <Link to={"/5"}>
                <button>Week 5</button>
                </Link>
              </li>

              <li >
              <Link to={"/6"}>
                <button>Week 6</button>
                </Link>
              </li>
              <li>
              <Link to={"/7"}>
                <button>Week 7</button>
                </Link>
              </li>

              <li>
                <Link>
                <button onClick = {animate} className = {shake ? `shake` : null}>Week 8</button>
                </Link>
              </li>
              <li>
                <Link>
                <button onClick = {animate} className = {shake ? `shake` : null}>Week 9</button>
                </Link>
              </li>
              <li>
                <Link>
                <button onClick = {animate} className = {shake ? `shake` : null}>Week 10</button>
                </Link>
              </li>
              
            </ul>
          </div>
        
        </>
  )
}
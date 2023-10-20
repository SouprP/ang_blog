import React from 'react'
import '../css/index.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useState } from 'react'

export default function Home() {

  const [shake, setShake] = useState(false)

  const animate = () => {
    setShake(true)
    setTimeout(() => {
      setShake(false)
    }, 500)
  }

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
                <Link>
                <button onClick = {animate} className = {shake ? `shake` : null}>Week 4</button>
                </Link>
              </li>
              <li>
                <Link>
                <button onClick = {animate} className = {shake ? `shake` : null}>Week 5</button>
                </Link>
              </li>
              
            </ul>
          </div>
          
        </>
  )
}
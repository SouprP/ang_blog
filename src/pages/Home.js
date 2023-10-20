import React from 'react'
import '../css/index.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Home() {
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
                <Link>
                <button>Week 2</button>
                </Link>
              </li>
              <li>
                <Link>
                <button>Week 3</button>
                </Link>
              </li>

              <li >
                <Link>
                <button>Week 4</button>
                </Link>
              </li>
              <li>
                <Link>
                <button>Week 5</button>
                </Link>
              </li>
              
            </ul>
          </div>
          
        </>
    )
}
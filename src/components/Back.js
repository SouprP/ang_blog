import React from 'react'
import '../css/back.css'
import { Link } from 'react-router-dom'

export default function Back() {
    return (
        <>
        <div className={"back_button_holder"}>
          <Link to={"/"}>
            <button >Home Page</button>    
          </Link>
        </div>
        </>
    )
}
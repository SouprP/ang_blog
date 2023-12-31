import React from 'react'
import Header from '../components/Header'
import Back from '../components/Back'
import "../css/week.css"

export default function Week1() {
    return (
        <>
        <Header></Header>
        <Back></Back>

        <div className={"week_about"}>
            <h1>Week 1</h1>
            <p>During the first week we only had one lesson and we spent it on trying to get to know each other better and talked about our interests. 
                We also discussed the requirements in order to complete this course and watched a TED talk.
            </p>
        </div>
        </>
    )
}
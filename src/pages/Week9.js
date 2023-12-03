import React from 'react'
import Header from '../components/Header'
import Back from '../components/Back'
import "../css/week.css"

export default function Week9() {
    return (
        <>
        <Header></Header>
        <Back></Back>

        <div className={"week_about"}>
            <h1>Week 9</h1>
            <p>
                This week was actually more like a continuation of the previous one, we were still working on <u>cleft sentences</u>, but this time 
                the <u>inversed</u> ones and focused more on emphasis. We also again played one game of <u>Devil's Advocate</u>, but this time the topic was "Gun Controls Laws" 
                and I again was the devil's advocate. 
            </p>
        </div>
        </>
    )
}
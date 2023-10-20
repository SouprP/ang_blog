import React from 'react'
import Header from '../components/Header'
import Back from '../components/Back'
import "../css/week.css"

export default function Week3() {
    return (
        <>
        <Header></Header>
        <Back></Back>

        <div className={"week_about"}>
            <h1>Week 3</h1>
            <p>The third week started off by playing a game. Depending on where you were standing in the room you either agreed, 
                disagreed or had no opinion on the matter of the statement read out loud by the teacher, here are some examples: 
                <br/>
                <br/>
                - I like dogs, <br/>
                - I get inspired during laboratory classes,
                <br/>
                <br/>
                Also, we got another exercise about summaries, but this time we first had to find one ourselves on the internet. 
                After that we were divided into small groups and were told to choose one person who will try being a host 
                for a show and introduce a guest named "Graham Hill".
            </p>
        </div>
        </>
    )
}
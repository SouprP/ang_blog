import React from 'react'
import Header from '../components/Header'
import Back from '../components/Back'
import "../css/week.css"

export default function Week7() {
    return (
        <>
        <Header></Header>
        <Back></Back>

        <div className={"week_about"}>
            <h1>Week 7</h1>
            <p>The seventh week wasn't as hardworking as others, but the preparations for the monday lesson were enormous in time consumption!
                Our task was to find a <u>lengthy and specialized article</u> regarding a topic connected to our studies, in my case it was about Schottky Diodes, 
                which I absolutely love.
                <br></br>
                <br></br>
                During the week we also tried doing a <u>work interview</u> in groups of 3 people, one person was an interviewer, the other one was 
                an interviewee and the last one was an observer. After the "interview", the observer gave feedback to the other two. 
                <br></br>
                <br></br>
                The other thing we were doing during the week were exercices around <u>describing quantaties</u>, which of course wasn't as interesting as the other 2 things we did,
                but still an important matter.
            </p>
        </div>
        </>
    )
}
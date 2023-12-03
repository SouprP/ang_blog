import React from 'react'
import Header from '../components/Header'
import Back from '../components/Back'
import "../css/week.css"

export default function Week8() {
    return (
        <>
        <Header></Header>
        <Back></Back>

        <div className={"week_about"}>
            <h1>Week 8</h1>
            <p>
                In the 8th week of the semester one of our tasks included working with two short articles which we hand-picked from the internet.
                We discucced them in groups of 3 to 4 people and talked about the diffrences and simmilarities between their aproach to the given topic.

                <br></br>
                <br></br>

                One thing thing we focused on were <u>cleft sentences </u> and also at the end of the week we played a game called <u>Devil's Advocate</u>,
                during the first and only around, I was the devil's advocate and I had to argue against 3 other people. The topic was "Euthanasia" and
                at first the arguements were about the use of drugs and then funnily enough the arguements shifted to religion and what God would think of euthanasia.

                <br></br>
                <br></br>

                This week in my opinion was one of the funniest and most relaxing ones.
            </p>
        </div>
        </>
    )
}
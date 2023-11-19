import React from 'react'
import Header from '../components/Header'
import Back from '../components/Back'
import "../css/week.css"

export default function Week5() {
    return (
        <>
        <Header></Header>
        <Back></Back>

        <div className={"week_about"}>
            <h1>Week 5</h1>
            <p>The fifth week was a short one because of dean's hours, but I still learned a lot, especially about hedgings expressions and some new vocabulary 
                connected to camping and planning a trip. We also brought 2 graphs/charts of our own choosing to talk about them in a small group. 
                I chose a graph about the work threshold of a Schotky Diode and a bar chart about benefits of automation in diffrent ways.
                <br></br>
                <br></br>
                And actually after some thinking I assumed that It would be a pretty good idea to try to use hedgings 
                expressions a lot more often in my daily life. For example, <u>I personally feel ...</u> sounds a lot better than 
                <u>I think ...</u> or <u>I believe ...</u>.
            </p>
        </div>
        </>
    )
}
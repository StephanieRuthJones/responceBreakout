import React from "react"

const Content2 = () => {
    return (
        <div className="picContainer">
            <img className="pic" alt="a photograph" src={require("./photos/photo1.jpeg")} />
            <img className="pic" alt="a photograph" src={require("./photos/photo2.jpeg")} />
            <img className="pic" alt="a photograph" src={require("./photos/photo3.jpeg")} />
        </div>
    )
}
export default Content2
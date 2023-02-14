function App(){
    const [bar1, setBar1] = React.useState(false)
    const [bar2, setBar2] = React.useState(false)
    const [bar3, setBar3] = React.useState(false)

    function toggle1(){
        if(bar1 && bar2 && bar3){
            setBar3(false)
        }else if(bar1 && bar2){
            setBar2(false)
        }else{
            setBar1(false)
        }
    }

    function toggle2(){
       if (bar1 === false){
        setBar1(true)
       } 
     else if(bar1 && bar2 === false){
        setBar2(true)
       }else(
        setBar3(true)
       )
    }

    
    return(
        <div className="container">
            <div className="progress-bar">
                <div className="progress-container">
                    <p className="prog-text">1</p>
                    <div className="progress">
                        <span className={bar1 ? "react" : ""}></span>
                    </div>
                </div>
                <div className="progress-container">
                    <p className="prog-text">2</p>
                    <div className="progress">
                        <span className={bar2 ? "react" : ""}></span>
                    </div>
                </div>
                <div className="progress-container">
                    <p className="prog-text">3</p>
                    <div className="progress">
                        <span className={bar3 ? "react" : ""}></span>
                    </div>
                </div>
                <div className="progress-container">
                    <p className="prog-text">4</p>
                </div>
            </div>
            <div className="buttons">
                <p onClick={toggle1} className={bar1 ? 'click' : 'unclick'}>Prev</p>
                <p onClick={toggle2} className={bar3 ? 'unclick' : 'click'}>Next</p>
            </div>

        </div>
    )
}

ReactDOM.render(<App/>,  document.getElementById('root'))
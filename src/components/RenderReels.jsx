import Reel from "./Reel"
import { ConfigContext } from "../context/ConfigProvider"
import { useContext, useEffect, useState } from "react"


function RenderReels(){
    
    const {reelsCount,range,startAllAtSameTime} = useContext(ConfigContext)

    const [reels, setReels] = useState([])
    const [startAll,setStartAll] = useState(false)

    useEffect(()=>{ renderReels() },[reelsCount,range,startAll])

    function renderReels(){
        setReels(() =>{
            const arr = Array(reelsCount).fill(0);
            return arr.map((value,index)=>{
                return <Reel key={index} maxRange={range} repeat={4+index} startAll={startAll}></Reel>
            })
        })
    }

    const handleClick =() =>{
      setStartAll(value => !value)
    }

    return(
        <>
            <main>
            {
                reels
            }

            {
                startAllAtSameTime ? 
                <button className='start-all-button' onClick={handleClick}>
                    {startAll? 'Reset' : 'Start'}
                </button>
                :
                ' '
            }
            </main>
        </>
    )
}

export default RenderReels;
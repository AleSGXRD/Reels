import { useContext, useEffect, useMemo, useState } from "react";
import { GetListNumbers } from "../logic/logic";
import './Reel.css'
import { ConfigContext } from "../context/ConfigProvider";

function Reel({repeat = 4, maxRange = 300, startAll}){
    const {startAllAtSameTime} = useContext(ConfigContext)

    const [positionTo, setPositionTo] = useState(0);

    const [startSpin, setStartSpin] = useState(false);
    const numbersLimit = useMemo(() => GetListNumbers(maxRange,repeat),[repeat,maxRange]);

    useEffect(()=>{
        if(startAllAtSameTime){
            if(startAll)
                HandleStart()
            else
                HandleReset()
        }
    },[startAll])

    function HandleStart(){
        setPositionTo(150 * ((repeat-1) * maxRange) + (150 * Math.round(Math.random() * (maxRange-1))))
        setStartSpin(true)
    }
    function HandleReset(){
        setPositionTo(0);
        setStartSpin(false);
    }

    function renderReel(){
        const list = numbersLimit.map((value, index)=>{
            return <li key={index}>{parseInt(value)}</li>
        })
        return list
    }

    const classSpin = startSpin == false ? 'reel-numbers' : 'reel-numbers-start';
    const duration = startSpin == false  ? 0 : 5000 + 1250 * repeat;
    const actionButton = startSpin == false  ? HandleStart : HandleReset;
    const descriptionButton = startSpin == false   ? "Start" : "Reset";

    return(
        <section className="reel">
            <div className="reel-zone">
                <ul className={classSpin} style={{"--duration" : `${duration}ms`, "--pos-y" : `-${positionTo}px`}} id='watch' >
                    {
                        renderReel()
                    }
                </ul>
            </div>
            {
                !startAllAtSameTime?
                <button className="start-spin-button" onClick={actionButton}>{descriptionButton}</button>
                :
                ''
            }
        </section>
    );
}

export default Reel;
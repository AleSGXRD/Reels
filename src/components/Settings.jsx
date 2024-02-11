import { useContext, useState } from "react";
import './Settings.css'
import { ConfigContext } from "../context/ConfigProvider";

function Settings(){
    const [show,setShow] = useState(false)
    const { reelsCount, addReel, removeReel,
            range, setRange,
            startAllAtSameTime,setStartAllAtSameTime } = useContext(ConfigContext)
    const numberOfReels = reelsCount

    function handleClick(){
        setShow((value)=> !value)
    }

    const curtain = show ==true ? 'curtain':'none';
    const tagName = show ==true ? 'settings-section sm':'settings-section sm hide';

    const handleClickRangeUp = ()=>{
        setRange((value) => {
            if( value >= 500 ) return 500;
            return value + 1;
        })
    }
    const handleClickRangeDown = ()=>{
        setRange((value) => {
            console.log(value)
            if( value <= 1 ) return 1;
            return value - 1;
        })
    }
    const onChangeRange = (value)=>{
        const val = parseInt(value);
        if(Number.isNaN(val)) return;
        if(val>500){
            setRange(500);
            return;
        }
        if(val<0){
            setRange(0);
            return;
        }
        setRange(val);
    }

    return(
        <>
            <div className={curtain} onClick={show==true?handleClick:()=>{}}></div>
            
            <button onClick={handleClick} className='settings-button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.013 2.475T12.05 15.5"/></svg>
            </button>
            <section className={tagName} >
                <header>
                    <p>Configurations</p>
                </header>
                <section className="setting">
                    <div className="setting-element">
                        <p>Reels</p>
                        <div className="setting-element-options">
                            <svg onClick={ removeReel } xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15 7a1 1 0 0 0-1.707-.707l-5 5a1 1 0 0 0 0 1.414l5 5A1 1 0 0 0 15 17z" clipRule="evenodd"/></svg>
                                <div>{numberOfReels}</div>
                            <svg onClick={ addReel } xmlns="http://www.w3.org/2000/svg" width="14px" height="40px" viewBox="0 0 24 24"><path fillRule="evenodd" d="M9 17a1 1 0 0 0 1.707.707l5-5a1 1 0 0 0 0-1.414l-5-5A1 1 0 0 0 9 7z" clipRule="evenodd"/></svg> 
                        </div>
                    </div>
                    <div className="setting-element">
                        <p>Range</p>
                        <div className="setting-element-options">
                            <svg onClick={ handleClickRangeDown } xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15 7a1 1 0 0 0-1.707-.707l-5 5a1 1 0 0 0 0 1.414l5 5A1 1 0 0 0 15 17z" clipRule="evenodd"/></svg>
                                <input type="text" name="range" id="range" value={range} onChange={(value)=>onChangeRange(value.target.value)} />
                            <svg onClick={ handleClickRangeUp} xmlns="http://www.w3.org/2000/svg" width="14px" height="40px" viewBox="0 0 24 24"><path fillRule="evenodd" d="M9 17a1 1 0 0 0 1.707.707l5-5a1 1 0 0 0 0-1.414l-5-5A1 1 0 0 0 9 7z" clipRule="evenodd"/></svg> 
                        </div>
                    </div>
                    <div className="setting-element">
                        <p>Start joined</p>
                        <div className="setting-element-options" onClick={()=> setStartAllAtSameTime((value)=> !value)}>
                            {
                                startAllAtSameTime == false?
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5z"/></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2h14v14H5zm11.95 4.795a1 1 0 1 0-1.414-1.414l-4.95 4.95l-2.121-2.121a1 1 0 0 0-1.415 1.414l2.758 2.758a1.1 1.1 0 0 0 1.556 0z"/></g></svg>
                            }
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Settings;
import { createContext, useEffect, useState } from "react";


export const ConfigContext = createContext();

export function ConfigProvider({children}){
    const [reelsCount, setReelsCount] = useState(()=>{
        const reelsCountFromStorage = window.localStorage.getItem('reelsCount');
	    return reelsCountFromStorage ? JSON.parse(reelsCountFromStorage):1;
    });
    const [range, setRange] = useState(()=>{
        const rangeFromStorage = window.localStorage.getItem('range');
	    return rangeFromStorage ? JSON.parse(rangeFromStorage):300;
    });
    
    const [startAllAtSameTime, setStartAllAtSameTime] = useState(()=>{
        const startAllAtSameTimeFromStorage = window.localStorage.getItem('startAllAtSameTime');
	    return startAllAtSameTimeFromStorage ? JSON.parse(startAllAtSameTimeFromStorage):true;
    });
    
    function addReel(){
        setReelsCount((value) =>{
            console.log(value)
            if( value >= 30 ) return 30;
            return value + 1;
        })
    }
    
    function removeReel(){
        setReelsCount((value) =>{
            if(value <= 1) return 1;
            return value - 1;
        })
    }
    useEffect(()=>{
        window.localStorage.setItem('reelsCount',JSON.stringify(reelsCount))
        window.localStorage.setItem('range',range)
        window.localStorage.setItem('startAllAtSameTime',startAllAtSameTime)
    },[reelsCount,range,startAllAtSameTime])

    return (
        <ConfigContext.Provider 
            value={{reelsCount,
                range,
                startAllAtSameTime,
                addReel,
                removeReel,
                setRange,
                setStartAllAtSameTime
            }}>
            {children}
        </ConfigContext.Provider>
    )
}
import React, { useEffect, useState } from "react";
import {Text,Button, View} from 'react-native';
export default function Home(props){
    const [timerCount, setTimer] = useState(parseInt(props.time))
    const [timepair,setTimePair] = useState([[0,0]])
    const [start,setStart] = useState(false)
    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(lastTimerCount => {
                //lastTimerCount <= 0 && clearInterval(interval);
                //console.log(lastTimerCount)
                if (lastTimerCount === 0){
                    return props.time
                } else{
                    return lastTimerCount - 1
                }
            });
            setTimePair(lasttimepair=>{
                let timepair = JSON.parse(JSON.stringify(lasttimepair))
                timepair.push([timepair[timepair.length-1][0]+1,(new Date()).getTime()]) 
                return timepair
            });
        }, 1000); //each count lasts for a second
       //cleanup the interval on complete
        return () => clearInterval(interval)
    }, []);
    return (
        <View>
            <Text>{timerCount}</Text>
            <Text>{timepair[timepair.length-1][0]} {timepair[timepair.length-1][1]}</Text>
            <Button title = "start" onPress = {()=>setStart(startstatus=>{return !startstatus})}/>
            <Text>{String(start)}</Text>
        </View>
    )
}
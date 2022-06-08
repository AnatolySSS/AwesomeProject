import { Alert } from "native-base"
import React, { useRef, useState, useEffect, FC } from "react"
import { Text, View } from "react-native"

export const CountdownTimer: FC = () => {
    const [time, setTime] = useState(10)
    const timerRef = useRef(time)

    useEffect(() => {
        const timerId = setInterval(() => {
            timerRef.current -= 1;
            if (timerRef.current < 0) {
                clearInterval(timerId)
            } else {
                setTime(timerRef.current)
            }
        }, 1000)
         return () => clearTimeout(timerId)
    },[])

    return(
        <View>
            <Text>{ time }</Text>
        </View>
    )
}
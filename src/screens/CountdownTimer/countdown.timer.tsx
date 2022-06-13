import { Center } from 'native-base'
import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button } from 'react-native'

export const CountdownTimer = () => {
  const intervalRef = useRef()
  const [count, setCount] = useState(0)

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setCount((count) => count + 1),
      1000
    )

    return () => {
      clearInterval(intervalRef.current)
    }
  })

  return (
    <View style={{ flex: 1}}>
      <Text style={{ fontSize: 120 }}>{count}</Text>
      <Button
        title="Start"
        onPress={() => {
          setCount(0)
        }}
      />
      <Button
        title="Stop"
        onPress={() => {
          clearInterval(intervalRef.current)
        }}
      />
    </View>
  )
}
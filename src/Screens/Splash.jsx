import { View, Text, Image, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

import { COLORS, FONT, SIZES, SHADOWS } from '../Styles/Theme'
import { LogoImage } from '../Components/LogoImage'
import PatternedBG from '../assets/images/324-ai.svg'
import { SafeAreaView } from 'react-native-safe-area-context'

const Splash = () => {
  // const { width, height } = useWindowDimensions()

  const navigate = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigate.replace('Signup')
    }, 5000)
  }, [])

  return (
    <View style={{ backgroundColor: COLORS.primary, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SafeAreaView style={{backgroundColor: "transparent"}} />
      <StatusBar style='light' />
      <PatternedBG fill={"#ffffff40"} width={"150%"} height={"150%"} style={{position: 'absolute', top: "-15%", left: -20}} />
      <LogoImage tint={"white"} width={320} height={null} />
    </View>
  )
}

export default Splash
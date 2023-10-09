import { Image } from 'react-native'

const logo = require('../assets/images/green-basket-logo.png')
const icon = require('../assets/images/green-basket-icon.png')
const logo_small = require('../assets/images/green-basket-logo-small.png')

const LogoIcon = ({ tint, width, height }) => {
  return (
    <Image
      source={icon}
      style={{ width: width, height: height, tintColor: tint, aspectRatio: 1.5, resizeMode: 'contain' }}
    />
  )
}

const LogoImage = ({ tint, width, height }) => {
  return (
    <Image
      source={logo}
      style={{ width: width, height: height, tintColor: tint, aspectRatio: 1.5, resizeMode: 'contain' }}
    />
  )
}

const LogoImageSmall = ({ tint, width, height }) => {
  return (
    <Image
      source={logo_small}
      style={{ width: width, height: height, tintColor: tint, aspectRatio: 1.5, resizeMode: 'contain' }}
    />
  )
}

export {LogoImage, LogoImageSmall, LogoIcon}
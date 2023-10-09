import { Platform, Pressable as RNPressable, TouchableHighlight as RNTouchable } from 'react-native'

const Button = ({ children, style, ...otherProps }) => {
  // const _style = useCallback(() => [style && style], [style])

  if (Platform.OS === "android") {
    return (
      <RNPressable style={style} {...otherProps}>
        {children}
      </RNPressable>
    )
  }

  return (
    <RNTouchable style={style} {...otherProps}>
      {children}
    </RNTouchable>
  )
}

export default Button
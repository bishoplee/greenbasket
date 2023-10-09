import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { Checkbox } from 'expo-checkbox'
import uuid from 'react-native-uuid'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

import { authentication, database } from './../../firebase.config'
import { generatePasscode, validateEmail, AndroidSafeArea } from '../Utils/'

import { COLORS, FONT, SIZES, CAPTION } from '../Styles/Theme'
import { LogoImageSmall } from '../Components/LogoImage'

import PatternedBG from '../assets/images/324-ai.svg'
import Button from '../Shared/Button';

const handleNavigation = (link) => {
  navigation.navigate(link);
}

const Login = () => {
  const navigation = useNavigation()
  const [isChecked, setIsChecked] = useState(false);

  /* const [userEmailCredential, setUserEmailCredential] = useState({
    email: "",
  }) */
  const [userEmailCredential, setUserEmailCredential] = useState("")
  // const { email } = userEmailCredential
  const [isValid, setIsValid] = useState(null)

  const uid = uuid.v4()

  const userAuthentication = () => {
    const password = generatePasscode(16)

    createUserWithEmailAndPassword(authentication, userEmailCredential, password)
    .then(() => {
      console.log('User account created & signed in!');
      
      navigation.navigate("Login")
      
      setDoc(doc(database, "users", uid), {
        username: "",
        email: userEmailCredential,
        password: password,
        _id: authentication.currentUser.uid
      })
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        navigation.navigate("Login")
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }

  return (
    <SafeAreaView style={[AndroidSafeArea.safeArea, {backgroundColor: COLORS.light}]} >
      <StatusBar style="dark" />

      <View style={styles.container}>
        <PatternedBG fill={COLORS.grey2} width={"150%"} height={"150%"} style={styles.bgimage} />

        <View style={styles.formWrapper}>
          {/* <View style={styles.logoIconContainer}>
            <LogoImageSmall tint={COLORS.primary} width={120} height={null} />
          </View> */}

          <View style={{ marginTop: 64 }}>
            <Text style={CAPTION.title1}>Log in</Text>
          </View>

          <View style={{ marginTop: 70 }}>
            <Text style={styles.helpText}>Enter your email address to create an account.</Text>
          </View>

          <View style={[styles.inputFieldContainer, {backgroundColor: "#d2e9d34d"}]}>
            <Ionicons name="at-sharp" size={24} color={COLORS.primary} />
            <TextInput
              value={userEmailCredential}
              onChangeText={(v) => {
                // console.log(v)
                // setInputFieldValue({...v, email: v})
                setUserEmailCredential(v)
              }}
              onBlur={() => {
                const valid = validateEmail(userEmailCredential)
                // console.log(valid)
                if(valid) {
                  setIsValid(true)
                } else {
                  setIsValid(false)
                }
              }}
              inputMode="email"
              keyboardType="email-address"
              maxLength={30}
              textContentType="emailAddress"
              returnKeyType="done"
              style={styles.inputField}
              placeholder="Enter email address"
              autoComplete="off"
              autoCapitalize = "none"
            />
            {isValid && (
              <>
                <Feather name="check" size={24} color="green" />
              </>
            )}
          </View>

          <View style={styles.flexD}>
            <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.primary : COLORS.grey1}
            />

            <Text>Remember me</Text>
          </View>

          <View style={styles.tsspContainer}>
            <Button
              style={styles.button}
              onPress={userAuthentication}
              android_ripple={{ color: 'rgba(132, 247, 147, 0.5)' }}
              underlayColor={COLORS.primary1}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </Button>
          </View>

          <View style={styles.tsppTextContainer}>
            <Text style={[styles.tsppText, { marginTop: 24 }]}>
              Already have an account?{' '}
              <Text
                onPress={() => {
                  // Linking.openURL('');
                  handleNavigation("Login")
                }}
                style={styles.hyperlinkStyle}
              >Sign in</Text>
            </Text>
          </View>

        </View>

        <View style={styles.ctaWrapper}>
          <TouchableOpacity style={styles.ctaButton}>
            <Image style={styles.ctaButtonImage} source={require('../assets/icon/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ctaButton}>
            <Image tint={"#4267B2"} style={styles.ctaButtonImage} source={require('../assets/icon/facebook_icon.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    // borderWidth: 3,borderColor: "red"
  },
  flexD: {
    flexDirection: 'row',
    // marginVertical: 2,
    marginTop: -12,
    marginBottom: 24,
    marginLeft: 8,
    alignItems: 'center'
  },
  formWrapper: {
    height: "80%",
    paddingHorizontal: 32,
    backgroundColor: COLORS.light,
    paddingBottom: 56,
    borderBottomRightRadius: 48,
    borderBottomLeftRadius: 48
  },
  ctaWrapper: {
    flex: 1,
    paddingTop: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 24,
  },
  ctaButton: {
    backgroundColor: COLORS.light,
    padding: 16,
    borderRadius: 100,
  },
  ctaButtonImage: {
    width: 32,
    height: 32,
  },
  logoIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
  },
  inputFieldContainer: {
    marginVertical: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    backgroundColor: COLORS.grey2,
    borderRadius: 5
    // paddingVertical: 4,
    // lineHeight: 1,
    // height: 48,
  },
  inputField: {
    paddingVertical: 20,
    borderRadius: 8,
    color: COLORS.dark,
    fontSize: SIZES.large - 2,
    letterSpacing: 1,
    flex: 1
  },
  inputFieldImage: {
    width: 24,
    height: 24,
  },
  helpText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.dark,
    letterSpacing: .5,
  },
  hyperlinkStyle: {
    color: COLORS.secondary,
    fontFamily: FONT.bold,
  },
  tsspContainer: {
    paddingBottom: Platform.OS === "ios" ? 24 : 56,
  },
  tsppText: {
    textAlign: 'center',
    color: COLORS.dark,
    fontSize: 13,
    fontFamily: FONT.medium,
    lineHeight: 20,
    letterSpacing: Platform.OS === "android" ? .45 : .15,
  },
  button: {
    backgroundColor: COLORS.secondary,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    fontSize: SIZES.large - 2,
    letterSpacing: 2,
    color: COLORS.white,
    fontWeight: "600"
  },
  bgimage: {
    position: 'absolute',
    top: "-15%",
    left: -20
  },
})

export default Login
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

import { COLORS, FONT, SIZES, SHADOWS } from '../Styles/Theme'
import AndroidSafeArea from '../Utils/AndroidSafeArea'
import { LogoImageSmall } from '../Components/LogoImage'

import PatternedBG from '../assets/images/324-ai.svg'
import Button from '../Shared/Button'

const Signup = () => {
  const navigation = useNavigation();

  const handleNavigation = (link) => {
    navigation.navigate(link);
  };

  return (
    <SafeAreaView style={[AndroidSafeArea.safeArea, {backgroundColor: COLORS.light2}]}>
      <StatusBar style="dark" />

      <PatternedBG fill={COLORS.accent2} width={"150%"} height={"150%"} style={styles.bgimage} />

      <View style={styles.container}>
        <View style={styles.logoIconContainer}>
          <LogoImageSmall tint={COLORS.primary} width={120} height={null} />
        </View>

        <View style={{ marginTop: 70, marginBottom: 48, }}>
          <Text style={styles.titleText}>Join GreenBasket</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-start'}}>
          <Button
            style={styles.cta}
            onPress={() => {}}
            android_ripple={{ color: '#d2e9d34d' }}
            underlayColor={COLORS.accent2}
          >
            <>
              <Image style={styles.ctaImage} source={require('../assets/icon/google.png')} />
              <Text style={styles.ctaText}>Sign up with Google</Text>
            </>
          </Button>

          <Button
            style={styles.cta}
            onPress={() => {}}
            android_ripple={{ color: '#d2e9d34d' }}
            underlayColor={COLORS.accent2}
          >
            <>
              <Image tint={"#4267B2"} style={styles.ctaImage} source={require('../assets/icon/facebook_icon.png')} />
              <Text style={styles.ctaText}>Sign up with Facebook</Text>
            </>
          </Button>

          <Button
            style={styles.cta}
            onPress={() => {
              handleNavigation("EmailSignUp")
            }}
            android_ripple={{ color: '#d2e9d34d' }}
            underlayColor={COLORS.accent2}
          >
            <>
              <Image style={styles.ctaImage} source={require('../assets/icon/email_icon2.png')} />
              <Text style={styles.ctaText}>Sign up with Email</Text>
            </>
          </Button>
          
          <Text style={[styles.tspp, { marginTop: 16 }]}>
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

        <View style={styles.tsspContainer}>
          <Text style={styles.tspp}>
            By signing up, you agree to our{' '}
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                // Linking.openURL('');
                handleNavigation("TermsOfServiceScreen")
              }}
            >Terms of Service</Text>{' '}
            and acknowledge that our{' '}
            <Text
              style={styles.hyperlinkStyle}
              onPress={() => {
                // Linking.openURL('');
                handleNavigation("PrivacyPolicyScreen")
              }}
            >Privacy Policy</Text>{' '}
            applies to you.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32 
  },
  logoIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
  },
  bgimage: {
    position: 'absolute',
    top: "-15%",
    left: -20},
  cta: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.accent5,
    borderRadius: 8,
  },
  ctaImage: {
    width: 24,
    height: 24,
  },
  ctaText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.dark,
    letterSpacing: .5,
    textAlign: 'center',
    flex: 1,
  },
  hyperlinkStyle: {
    color: COLORS.secondary,
    fontFamily: FONT.bold,
  },
  titleText: {
    textAlign: 'center',
    color: COLORS.dark,
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.esteban,
    fontWeight: '600'
  },
  tspp: {
    textAlign: 'center',
    color: COLORS.dark,
    fontSize: 13,
    fontFamily: FONT.regular,
    lineHeight: 18,
    letterSpacing: Platform.OS === "android" ? .45 : .15,
  },
  tsspContainer: {
    paddingBottom: Platform.OS === "ios" ? 24 : 56,
  }
})

export default Signup
import {
  ActivityIndicator,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useStyles } from 'react-native-unistyles';
import { loginStyles } from '@unistyles/authStyles';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import CustomText from '@components/global/CustomText';
import BreakerText from '@components/ui/BreakerText';
import PhoneInput from '@components/ui/PhoneInput';
import { resetAndNavigate } from '@utils/NavigationUtils';
import SocialLogin from '@components/ui/SocialLogin';
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight';

const LoginScreen: FC = () => {
  const animatedValue = useSharedValue(0);
  const keyboardOffsetHeight = useKeyboardOffsetHeight();
  const { styles } = useStyles(loginStyles);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (keyboardOffsetHeight == 0) {
      animatedValue.value = withTiming(0, {
        duration: 500,
      });
    } else {
      animatedValue.value = withTiming(-keyboardOffsetHeight * 0.25, {
        duration: 500,
      });
    }
  }, [keyboardOffsetHeight]);
  const handleLogin = () => {
    setLoading(false);
    setTimeout(() => {
      resetAndNavigate('userBottomTab');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />

      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />

      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        style={{ transform: [{ translateY: animatedValue }] }}
        contentContainerStyle={styles.bottomContainer}
      >
        <CustomText fontFamily="Okra-Bold" variant="h2" style={styles.title}>
          India's #1 Foof delivery and dining app
        </CustomText>

        <BreakerText text="Log in or sign up" />

        <PhoneInput
          onFocus={() => {}}
          onblur={() => {}}
          value={phone}
          onChangeText={setPhone}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={loading}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText color="#fff" fontFamily="Okra-Medium" variant="h5">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>

        <BreakerText text="or" />

        <SocialLogin />
      </Animated.ScrollView>
      <View style={styles.footer}>
        <CustomText>By continuing , you agree to our</CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms of service</CustomText>
          <CustomText style={styles.footerText}>Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policies</CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

import { View, Text, Pressable, TextInput } from 'react-native';
import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { phoneStyles } from '@unistyles/phoneStyles';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import CustomText from '@components/global/CustomText';

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onblur?: () => void;
}
const PhoneInput: FC<PhoneInputProps> = ({
  value,
  onChangeText,
  onFocus,
  onblur,
}) => {
  const { styles } = useStyles(phoneStyles);
  return (
    <View style={styles.container}>
      <Pressable style={styles.countryPickerContainer}>
        <Icon
          iconFamily="Ionicons"
          name="caret-down-sharp"
          color={Colors.lightText}
          size={18}
        />
      </Pressable>

      <View style={styles.phoneInputContainer}>
        <CustomText fontFamily="Okra-Bold">+91</CustomText>
        <TextInput
          placeholder="ENter Mobile Number"
          keyboardType="phone-pad"
          value={value}
          maxLength={10}
          placeholderTextColor={Colors.lightText}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onblur}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default PhoneInput;

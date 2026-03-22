import { View, TouchableOpacity, Image } from 'react-native';
import React, { FC } from 'react';
import { phoneStyles } from '@unistyles/phoneStyles';
import Icon from '@components/global/Icon';
import { RFValue } from 'react-native-responsive-fontsize';
import { useStyles } from 'react-native-unistyles';

const SocialLogin: FC = () => {
  const { styles } = useStyles(phoneStyles);
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity>
        <Image
          source={require('@assets/icons/google.png')}
          style={styles.gimg}
        />
        <TouchableOpacity>
          <Icon
            name="logo-apple"
            iconFamily="Ionicons"
            color="#222"
            size={RFValue(18)}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="ellipsis-horizontal-sharp"
            iconFamily="Ionicons"
            color="#222"
            size={RFValue(18)}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

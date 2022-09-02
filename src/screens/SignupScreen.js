import { StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3 style={{ textAlign: 'center' }}>
          Sign Up for Tracker
        </Text>
      </Spacer>
      <Input label='Email' />
      <Spacer />
      <Input label='Password' />
      <Spacer>
        <Button title='Sign Up' />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;

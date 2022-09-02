import { StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  return (
    <Spacer>
      <Text h3>Sign Up for Tracker</Text>
      <Input label='Email' />
      <Input label='Password' />
      <Button title='Sign Up' />
    </Spacer>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;

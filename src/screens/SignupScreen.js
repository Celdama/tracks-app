import { StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text h3>Sign Up for Tracker</Text>
      <Input label='Email' />
      <Input label='Password' />
      <Button title='Sign Up' />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;

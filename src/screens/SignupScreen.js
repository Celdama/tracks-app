import { Button, StyleSheet, Text } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        title='Go to signin'
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title='Go to mainFlow'
        onPress={() => navigation.navigate('mainFlow')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;

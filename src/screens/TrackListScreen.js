import { Button, StyleSheet, Text } from 'react-native';

const AccountScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button
        title='Go to track detail'
        onPress={() => {
          navigation.navigate('TrackDetail');
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;

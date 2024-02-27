import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CurrencyConverter from './CurrencyConverter';
// import Input from './Component/CurrencyComponent';

export default function App() {
  return (
    <>
      <CurrencyConverter/>
      {/* <Input/>  */}
      <StatusBar style="auto" />
    </>
  );
}

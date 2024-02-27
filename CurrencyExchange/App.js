import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CurrencyConverter from './CurrencyConverter';

export default function App() {
  return (
    <>
      <CurrencyConverter/>
      <StatusBar style="auto" />
    </>
  );
}
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import SplashScreen from 'react-native-splash-screen';
import StackScreen from './src/navigations/screen';
const queryClient = new QueryClient();

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <StackScreen />
    </QueryClientProvider>
  );
}



export default App;

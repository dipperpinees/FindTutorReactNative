import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from './src/components/SignIn';
import SignUpScreen from './src/components/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="SignIn"
        component={SignInScreen}
        options={{ title: 'Đăng nhập' }}
      />
      <Stack.Screen 
        name="SignUp"
        component={SignUpScreen}
        options={{ title: 'Đăng kí tài khoản' }}
      />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


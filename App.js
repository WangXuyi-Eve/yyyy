/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import type {Node} from 'react';
import {Hello} from './View/hello'
import HomeTab from './View/HomeTab'
import {UserInfoSetting} from './View/UserInfoSetting'

const App: () => Node = () => {
  return(
   <HomeTab/>
  )
};

export default App;

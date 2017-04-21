'use strict';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native';
import Hello from "./Hello";

export default function () {
  return (
    <View style={styles.container}>
      <Hello />
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:120
  },
});

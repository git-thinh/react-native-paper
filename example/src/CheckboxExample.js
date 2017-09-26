/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Paragraph,
  Checkbox,
  Colors,
  TouchableRipple,
} from 'react-native-paper';

export default class CheckboxExample extends Component {
  static title = 'Checkbox';

  state = {
    checkedNormal: true,
    checkedCustom: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableRipple
          onPress={() =>
            this.setState(state => ({
              checkedNormal: !state.checkedNormal,
            }))}
        >
          <View style={styles.row}>
            <Paragraph>Normal (click list item)</Paragraph>
            <View pointerEvents="none">
              <Checkbox checked={this.state.checkedNormal} />
            </View>
          </View>
        </TouchableRipple>
        <View style={styles.row}>
          <Paragraph>Custom (click checkbox)</Paragraph>
          <Checkbox
            color={Colors.blue500}
            checked={this.state.checkedCustom}
            onPress={() =>
              this.setState(state => ({ checkedCustom: !state.checkedCustom }))}
          />
        </View>
        <View style={styles.row}>
          <Paragraph>Checked (Disabled)</Paragraph>
          <Checkbox checked disabled />
        </View>
        <View style={styles.row}>
          <Paragraph>Unchecked (Disabled)</Paragraph>
          <Checkbox checked={false} disabled />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

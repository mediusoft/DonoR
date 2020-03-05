import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import * as theme from '../theme'

export default class Block extends React.Component {
  render(){
    const {
      flex, 
      center, 
      middle,
      left,
      right, 
      color,
      card, 
      row,
      shadow, 
      column,
      space, 
      style, 
      children, 
      ...props
    } = this.props
    const blockStyles = [
    styles.block,
    flex && {flex},
    flex === false && {flex:0},// reset/disable flex
    middle && styles.middle,
    card && styles.card,
    space && {justifyContent: `space-${space}`},
    shadow && styles.shadow,
    center && styles.center,
    row && styles.row,
    left && styles.left,
    right && styles.right,
    column && styles.column,
    color && styles[color],//predefined bg colors
    color && !styles[color] && {backgroundColor: color},//custom bg colors
    style
    ]
    return (
      <View style={blockStyles} {...props} >
        {children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  block: {
      flex: 1,
  },
  row: {
      flexDirection: 'row',
  },
  card: {
      borderRadius: theme.sizes.border,
  },
  column: {
      flexDirection: 'column'
  },
  center: {
      alignItems: 'center',
  },
  middle: {
      justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
},
left: {
  justifyContent: 'flex-start',
},
  shadow: {
      shadowColor: theme.colors.black,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 10,
  },
  accent: {backgroundColor: theme.colors.accent},
  primary: {backgroundColor: theme.colors.primary},
  secondary: {backgroundColor: theme.colors.secondary},
  tertiary: {backgroundColor: theme.colors.tertiary},
  black: {backgroundColor: theme.colors.black},
  white: {backgroundColor: theme.colors.white},
  gray: {backgroundColor: theme.colors.gray},
  gray2: {backgroundColor: theme.colors.gray2},
})
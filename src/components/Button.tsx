import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeProvider, Button} from 'react-native-elements';

const theme = {
  colors: {
    primary: '#71dfaf',
  },
};

export default function ButtonComponet({text}: {text: string}) {
  return (
    <ThemeProvider theme={theme}>
      <Button raised title={text} type="solid" style={styles.button} />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
  },
});

import { Text, View, StyleSheet, ScrollView } from 'react-native';
import {aboutText} from '@/lib/NEOcontent';

export default function Index() {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>{aboutText.header}</Text>
        <Text style={styles.text}>{aboutText.intro}</Text>
        <Text style={styles.subheader}>{aboutText.subheader}</Text>
        <Text style={styles.text}>{aboutText.details}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignContent: 'center',

  },
  scrollContainer:{
    paddingBottom: 40,

  },
  text: {
    fontSize: 18,
    color: '#ffff',
    padding:20,
  },
  header:{
    paddingTop: 20,
    paddingBottom:5,
    fontSize: 48,
    color: '#ffff',
    textAlign: 'center',
  },
  subheader:{
    paddingTop: 10,
    paddingBottom:5,
    fontSize: 20,
    color: '#ffff',
    textAlign: 'center',

  }

  

});

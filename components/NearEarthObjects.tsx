import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NEO } from '@/utils/fetchNEOs'; 

interface NEOListProps {
  neos: NEO[];
}


export default function NEOList({ neos }: NEOListProps) {
  if (neos && !neos.length) {
    return <Text style={styles.text}>No NEOs for this date.</Text>;
  }

  return (
    <ScrollView>
    <View>
      {neos.map((neo, index) => (
        <Text key={index} style={styles.text}>Name: {neo.name + '\n' + 'Diameter: ' + neo.diameter.toFixed(2) + ' ft\n' + 'Velocity: ' +
   neo.velocity + ' mph\n' + 'Miss distance: ' +
   neo.missDistance + ' mi\n' +
   'Hazardous: ' + (neo.isHazardous ? 'Yes' : 'No')}
        </Text>
      ))}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    marginVertical: 4,
  },
});

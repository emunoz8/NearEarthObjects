import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { isValidDate, formatDate } from '@/utils/dateUtils'; 
import { fetchNEOs, NEO } from '@/utils/fetchNEOs'; 
import { API_KEY } from '@env';
import NEOList from '@/components/NearEarthObjects'

export default function AboutScreen() {
  const [neoDataByDate, setNeoDataByDate] = useState<{ [date: string]: NEO[] }>({});
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [inputDate, setInputDate] = useState('');
  const [error, setError] = useState('');

  const handleDateChange = (date: string) => {
    setInputDate(date);
  };


  useEffect(() => {
    const today = formatDate(new Date());
    fetchAndStoreNEOs(today);
  }, []);

  const fetchAndStoreNEOs = async (dateStr: string) => {
    const date = new Date(dateStr);
    setSelectedDate(date);
    const formattedDate = formatDate(date);
  
    if (!neoDataByDate[formattedDate]) {
      try {
        const fetchedNeos = await fetchNEOs(API_KEY, formattedDate);
        setNeoDataByDate((prevData) => ({
          ...prevData,
          [formattedDate]: fetchedNeos,
        }));
      } catch (error) {
        console.error(error);
        setError('Error fetching NEO data. Please try again.');
      }
    }
  };
  
  const handleSubmit = async () => {
    if (isValidDate(inputDate)) {
      setError('');
      await fetchAndStoreNEOs(inputDate);
    } else {
      setError('Invalid date format. Please use YYYY-MM-DD.');
    }
  };

  const neosForDate = neoDataByDate[formatDate(selectedDate)] || [];

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Enter Date (YYYY-MM-DD):</Text>
      <TextInput
        style={styles.input}
        value={inputDate}
        onChangeText={handleDateChange}
        placeholder="YYYY-MM-DD"
        placeholderTextColor="#ccc"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Submit" onPress={handleSubmit} />
      <Text style={styles.text}>Input Date: {formatDate(selectedDate)}</Text>
      <NEOList neos={neosForDate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    width: '80%',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

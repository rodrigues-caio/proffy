import React, { useState } from 'react';
import { View, ScrollView, Text, Picker } from 'react-native';
import { TextInput, BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [subject, setSubject] = useState('Java');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState();

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        });

        setFavorites(favoritedTeachersIds);
      };
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  };

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setIsFilterVisible(false);
    setTeachers(response.data);
  }

  function handleConfirmHour(hour: any) {
    setTime(hour);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible} >
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        )} 
      >
      
        { isFilterVisible && (
          <View style={styles.searchForm}>
            
            <Text style={styles.label}>Matéria</Text>
            <RectButton style={styles.input}>
            <Picker
              selectedValue={subject}
              onValueChange={value => setSubject(value)}
            > 
              <Picker.Item label="Matemática" value="Matemática" />
              <Picker.Item label="Português" value="Português" />
              <Picker.Item label="Física" value="Física" />
              <Picker.Item label="Química" value="Química" />
              <Picker.Item label="História" value="História" />
              <Picker.Item label="Filosofia" value="Filosofia" />
              <Picker.Item label="Inglês" value="Inglês" />
              <Picker.Item label="Geografia" value="Geografia" />
              <Picker.Item label="Biologia" value="Biologia" />
            </Picker>
            </RectButton>

            { /*<Text style={styles.label}>Matéria</Text>

            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"/> */}

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <RectButton style={styles.input}>
                  <Picker
                    selectedValue={week_day}
                    onValueChange={value => setWeekDay(value)}
                  >
                    <Picker.Item value="0" label="Dom" />
                    <Picker.Item value="1" label="Seg" />
                    <Picker.Item value="2" label="Ter" />
                    <Picker.Item value="3" label="Qua" />
                    <Picker.Item value="4" label="Qui" />
                    <Picker.Item value="5" label="Sex" />
                    <Picker.Item value="6" label="Sáb" />
                  </Picker>
                </RectButton>
              </View>
              {/*<View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>*/}

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                {/*<TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                /> */}
                <TextInput style={styles.input}>
                <DateTimePickerModal 
                  mode="time"
                  onConfirm={handleConfirmHour}
                  onChange={handleConfirmHour}
                  onCancel={handleConfirmHour}
                  isVisible={true}
                />
                </TextInput>
              </View>
                
            </View>

            <RectButton 
              onPress={handleFiltersSubmit} 
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >

        {teachers.map((teacher: Teacher) => (
          <TeacherItem 
            key={teacher.id} 
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}

      </ScrollView>
    
    </View>
  );
};

export default TeacherList;
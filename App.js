import React, { useState } from 'react';
import {Text,TouchableHighlight,} from 'react-native';
import styles from './src/Styles'
import Quiz from './src/Quiz';
export default function App() {
  const [current,setCurrent] = useState('Home')
  const Home = ( <>
    <Text style={styles.sectionTitle}>
      Welcome to My Quiz App
      </Text>
    <TouchableHighlight style={styles.submit}
    onPress={()=>setCurrent(QuizScreen)}
    >
    <Text style={[styles.submitText]}>
      START QUIZ
      </Text>
    </TouchableHighlight>
  </>
  )
  const QuizScreen =(<>
    <Quiz></Quiz>
    </>
  )
  return current === "Home" ? Home : current;
};

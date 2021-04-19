import { StyleSheet } from 'react-native';
import {Colors,} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({

  next: {
    marginTop: 20,
    color: Colors.dark,
    marginRight:40,
marginLeft:300,
paddingTop:10,
paddingBottom:53,
borderRadius:50,
paddingLeft: 10,
},
quizTop: {
  flexDirection: 'row',
  marginTop: '10%',
  },  
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
      marginLeft: 50,
      marginTop: 250,
    },
    question: {
        fontSize: 22,
        fontWeight: '600',
        color: Colors.black,
        marginLeft: 50,
        marginTop: 30,
      },
    answers: {
        marginTop: 28,
        marginRight:40,
        marginLeft:40,
        paddingTop:20,
        paddingBottom:20,
        borderWidth: 1,
        borderColor: 'black',
        overflow: "hidden",
      },
      answersText: {
        fontSize: 22,
        fontWeight: '800',
        color: Colors.dark,
        textAlign: "center",
        fontFamily: "Bold",
      },
     
      quizTopText: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
      },
      submit:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#2EDA00',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: "hidden",
      },
      submitText:{
        color:'#fff',
        textAlign:'center',
        fontSize: 30,
    },
  });
  
  
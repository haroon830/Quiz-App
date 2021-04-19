import React from 'react';
import {
  Text,
  Button,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './Styles'
import questions from './Dummy'
import App from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight,faCheckCircle, faTimesCircle,faarrowcircleright } from '@fortawesome/free-solid-svg-icons'

let tempArr = []
const bgColor = ['#69CDD2','#69CDD2','#69CDD2','#69CDD2']



class QuizComponent extends React.Component{

  constructor(props){
    super(props)
    this.qno = 0;
    this.score=0;
    tempArr = Object.keys(questions).map(function(k){return questions[k]})
    let randomQuestion = tempArr.sort(() => .5 - Math.random()).slice();

 this.state = {
   question: tempArr[this.qno].question,
   answers: tempArr[this.qno].answers,
   correct: tempArr[this.qno].correct,
   finish: false,
   current: 'Quiz',
   icon: ['','','',''],
   disabled: false,
   selected: false,
   bgColor,
   countCheck: 0,
 }  
 this.answer = this.answer.bind(this);
 this.next = this.next.bind(this);
 this.finish = this.finish.bind(this);
}

next(){  
  if(this.qno < 4){
  for(let i=0;i<4;i++){
    this.state.bgColor[i]='#69CDD2'
    this.state.icon[i]=''
  }
  this.setState({disabled: false,selected: false})
  if(this.qno < tempArr.length-1){
    this.qno++
    this.setState({ countCheck: 0, question: tempArr[this.qno].question, answers: tempArr[this.qno].answers, correct : tempArr[this.qno].correct})
  }else{
    this.setState({disabled: true})
  }
   }
}

answer(ans){
  if(this.qno==4 ){
    this.setState({finish: true})
  }
  const count = this.state.countCheck;
  this.setState({disabled: true,selected: true})
  for (let index = 0; index < 4; index++) {
    if(index != ans && index != this.state.correct){
      this.state.bgColor[index]='#69CDD2'
    }    
  }
  if(ans == this.state.correct){
       count + 1;
      this.setState({ countCheck: count })
      this.state.bgColor[ans]='#2EDA00'
      if( count < 6){
        this.score += 1
      }
    }
    else{
      this.setState({ countCheck: count })
      this.state.bgColor[ans]='#f44336'
      this.state.bgColor[this.state.correct]='#2EDA00'
    }
}

finish(){
  this.setState({current:"Home"})
  for(let i=0;i<4;i++){
    this.state.bgColor[i]='#b2ebf2'
  }
}

Icon(k){
  if(this.state.bgColor[k]=="#2EDA00"){
    return(
      <View style={{width:0,height:26}}>
    <FontAwesomeIcon size={30}  icon={this.state.icon[k]=faCheckCircle}/> 
    </View>
    )
  }
  else if(this.state.bgColor[k]=="#f44336"){
    return(
      <View style={{flex:1,width:0,height:26}}>
      <FontAwesomeIcon size={30}  icon={this.state.icon[k]=faTimesCircle}/> 
      </View>
      )
  }
}

render(){    
  const currentOptions = this.state.answers
  let _this = this
  var Next = '';
  if(!this.state.finish && this.qno !=4){
  Next =(
    <>
    <TouchableHighlight 
      style={[styles.next,{backgroundColor: this.state.selected ? '#58D558': 'lightgray' }]} 
      activeOpacity = { .5 }
      onPress={_this.next}
      disabled={!this.state.selected}
      >
      <View style={{flex:1,width:20,height:21}}>
      <FontAwesomeIcon size={50} icon={ faArrowRight } />
      </View>
      </TouchableHighlight>
    </>
  )
  }else {
    Next=(
      <>
      <TouchableHighlight 
        style={[styles.answers,{backgroundColor: this.state.finish ? '#58D558': '#607D8B'}]} 
        onPress={_this.finish}
        disabled={!this.state.finish}
        >
        <Text style={styles.answersText}> Finish
        </Text>
        </TouchableHighlight>
      </>
    )
  }
  const renderedButtons = Object.keys(currentOptions)
  .map(
    function(k){
    return(
      <TouchableHighlight 
      style={[styles.answers,{backgroundColor:  _this.state.bgColor[k]}]} 
      onPress={() => _this.answer(k)}
      disabled={_this.state.disabled}
      >
      <Text style={styles.answersText}> {currentOptions[k][k]}  {_this.Icon(k)}  </Text>
      </TouchableHighlight>
    )
  })

var view = (
       <>
        <View style={styles.quizTop}>
        <Text style={[styles.quizTopText,{marginLeft: '5%'}]} >Score: {this.score}</Text>
        <Text style={[styles.quizTopText,{marginLeft:'25%'}]}>Question: {this.qno+1}/5</Text>
        </View>
        <Text style={styles.question}>{this.state.question}
        </Text>
        {renderedButtons}
        {Next}
</>
)

if(this.state.current!="Quiz"){
  view =(
    <>
    <App></App>
    </>
  )
}
return (
  <>
    {view} 
  </>
  )
}    
}

export default QuizComponent;
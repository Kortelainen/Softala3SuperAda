import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import {post} from '../../utils/api';
import * as NavigationState from '../../modules/navigation/NavigationState';

var radio_props = [
  {label: ' Kyllä  ', value: 'Kyllä'},
  {label: ' Ei  ', value: 'Ei'}
];

var radio_props2 = [
  {label: '   1   ', value: 1 },
  {label: '   2   ', value: 2 },
  {label: '   3   ', value: 3 },
  {label: '   4   ', value: 4 },
  {label: '   5  ', value: 5 }
];

const FeedbackView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      value: 0
    }
  },

  async _saveFeedback() {

    console.log(this.state.question_1 + " " + this.state.question_2  + " " + this.state.question_3 + " " + this.state.question_4 + " " + this.state.question_5 + " " + this.state.question_6)

    const response = await post('/feedback', {
        schoolGrade: this.state.question_1,
        answer1: this.state.question_2,
        answer2: this.state.question_3,
        answer3: this.state.question_4,
        answer4: this.state.question_5,
        answer5: this.state.question_6,
    });

  },

  goodbyefeedback(){
    this._saveFeedback();
    this.props.dispatch(NavigationState.pushRoute({
      key: 'GoodbyeFB',
      title: 'Kiitos palautteestasi'
    }));
  },

  render() {
    return (
     <View style = {styles.container}>
      <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
        automaticallyAdjustContentInsets={false}
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={styles.scrollView}>
        <Text style={styles.baseText}>Super-Adan järjestäjät ovat kiinnostuneita kokemuksistanne tapahtumassa. Vastaamalla autat meitä tekemään tapahtumasta paremman!</Text>
        <Text style={styles.boldText}>Anna kouluarvosana tapahtumalle (1-5):</Text>

          <RadioForm
            style={styles.button}
            radio_props={radio_props2}
            initial={null}
            onPress={(value) => {this.setState({'question_1':value})}}
            formHorizontal={true}
            buttonColor={'#ff5454'}
          />

        <Text style={styles.boldText}>Mistä sait tiedon tapahtumasta?</Text>
          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input]}
                onChangeText={(value) => this.setState({'question_2':value})}
                value={this.state.answerText_1}
                />
            </View>
          </View>
          <Text style={styles.boldText}>Innostuitko IT-alasta?</Text>
            <RadioForm
              style={styles.button}
              radio_props={radio_props}
              initial={null}
              onPress={(value) => {this.setState({'question_3':value})}}
              formHorizontal={true}
              buttonColor={'#ff5454'}
              />
            <Text style={styles.boldText}>Muuttuiko käsityksesi IT-alasta?</Text>
              <RadioForm
                style={styles.button}
                radio_props={radio_props}
                initial={null}
                onPress={(value) => {this.setState({'question_4':value})}}
                formHorizontal={true}
                buttonColor={'#ff5454'}
                />
            <Text style={styles.boldText}>Voisitko kuvitella meneväsi IT-alalle töihin?</Text>
              <RadioForm
                style={styles.button}
                radio_props={radio_props}
                initial={null}
                onPress={(value) => {this.setState({'question_5':value})}}
                formHorizontal={true}
                buttonColor={'#ff5454'}
                />
            <Text style={styles.boldText}>Kehitysehdotuksia seuraavan Super-Ada -tapahtuman järjestäjille?</Text>
            <View style={styles.inputs}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input]}
                  onChangeText={(value) => this.setState({'question_6':value})}
                  value={this.state.answerText_6}
                  />
              </View>
            </View>
            <TouchableOpacity onPress={this.goodbyefeedback}>
              <View style={styles.send}>
                  <Text style={styles.whiteFont}>LÄHETÄ</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  scrollView: {
    backgroundColor: 'rgba(245,245,245,1)',
    flex: 1
  },
  button: {
    left: 10,
    top: 10,
    padding: 5
  },
  baseText: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    fontSize: 16,
    marginBottom: 20,
    color: 'black'
  },
  boldText: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  input: {
    position: 'absolute',
    left: 10,
    right: 10,
    fontSize: 16,
    height: 50,
    paddingBottom: 0
  },
  inputs: {
    marginTop: 2,
    marginBottom: 2,
    flex: .25
  },
  inputContainer: {
    padding: 0,
    borderWidth: 1,
    borderColor: 'transparent',
    height: 45
  },
  send: {
    backgroundColor: '#ff5454',
    padding: 20,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    alignItems: 'center'
  },
  whiteFont: {
    color: '#FFF',
    fontSize: 18
  }
});
export default FeedbackView;

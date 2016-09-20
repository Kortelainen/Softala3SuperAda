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

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import * as NavigationState from '../../modules/navigation/NavigationState';

var radio_props = [
  {label: '  Kyllä', value: 0 },
  {label: '  Ei', value: 1 }
];

const FeedbackView = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
        value: 0,
    }
  },

  popRoute(){
  this.props.dispatch(NavigationState.popRoute({
        key: 'CounterView',
       }));
    },


  render: function() {
      var _scrollView: ScrollView;
       return (
         <View>
          <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
            style={styles.scrollView}>
            <Text style={styles.baseText}>Super-Adan järjestäjät ovat kiinnostuneita kokemuksistanne tapahtumassa. Vastaamalla autat meitä tekemään tapahtumasta paremman!</Text>
            <Text style={styles.boldText}>Anna kouluarvosana tapahtumalle (4-10):</Text>
            <View style={styles.inputs}>
              <View style={styles.inputContainer}>
            <TextInput
                    style={[styles.input]}
                    />

              </View>
              </View>
              <Text style={styles.boldText}>Mistä sait tiedon tapahtumasta?</Text>
              <View style={styles.inputs}>
                <View style={styles.inputContainer}>
              <TextInput
                      style={[styles.input]}
                      />

                </View>
                </View>
              <Text style={styles.boldText}>Innostuitko IT-alasta?</Text>
              <RadioForm
                        style={styles.button}
                        radio_props={radio_props}
                        initial={null}
                        onPress={(value) => {this.setState({value:value})}}
                        formHorizontal={true}
                        buttonColor={'#000000'}
                      />

              <Text style={styles.boldText}>Muuttuiko käsityksesi IT-alasta?</Text>
              <RadioForm
                        style={styles.button}
                        radio_props={radio_props}
                        initial={null}
                        onPress={(value) => {this.setState({value:value})}}
                        formHorizontal={true}
                        buttonColor={'#000000'}
                      />
              <Text style={styles.boldText}>Voisitko kuvitella meneväsi IT-alalle toihin?</Text>
              <RadioForm
                    style={styles.button}
                    radio_props={radio_props}
                    initial={null}
                    onPress={(value) => {this.setState({value:value})}}
                    formHorizontal={true}
                    buttonColor={'#000000'}
                        />

              <Text style={styles.boldText}>Kehitysehdotuksia seuraavan Suoer-Ada -tapahtuman järjestäjille?</Text>
              <View style={styles.inputs}>
                <View style={styles.inputContainer}>
              <TextInput
                      style={[styles.input]}
                      />

                </View>
                </View>

                <View style={styles.signin}>
                <TouchableOpacity onPress={this.popRoute}>
                    <Text style={styles.whiteFont}>LÄHETÄ</Text>
                    </TouchableOpacity>
                </View>


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
    height: 510,
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
    marginBottom: 20

  },
  boldText: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold'

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
  signin: {
      backgroundColor: '#ff5454',
      padding: 20,
      marginTop: 40,
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 30,
      alignItems: 'center'
  }

});
export default FeedbackView;

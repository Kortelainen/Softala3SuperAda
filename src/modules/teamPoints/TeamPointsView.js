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

const TeamPointsView = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
        value: 0,
    }
  },

  feedback(){
  this.props.dispatch(NavigationState.pushRoute({
        key: 'FeedbackView',
        title: 'Anna palautetta'
       }));
    },
    goodbye(){
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Goodbye',
      title: 'Kiitos osallistumisesta!'
    }));
    },

  render: function() {
      var _scrollView: ScrollView;
       return (
         <View style= {styles.container}>
          <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
            style={styles.scrollView}>
            <Text style={styles.headerText}>Tiimisi pisteet</Text>
            <View style={styles.header}>
              <Image style={styles.mark} source={require('../../../images/pisteet.png')}/>
              </View>


              <Text style={styles.baseText}>Haluatko antaa järjestäjille palautetta?</Text>

              <Text style={styles.baseText}>Palaute auttaa meitä kehittämään tapahtumaa!</Text>

              <View style ={styles.buttons}>
                <View style={styles.button}>
                <TouchableOpacity onPress={this.feedback}>
                    <Text style={styles.whiteFont}>KYLLÄ</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                <TouchableOpacity onPress={this.goodbye}>
                    <Text style={styles.whiteFont}>EI</Text>
                    </TouchableOpacity>
                </View>
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
      backgroundColor: 'transparent',

  },
  scrollView: {
    backgroundColor: 'rgba(250,155,145,1)',
    flex: 1,

  },
  mark: {
    alignItems: 'center'
  },

  headerText: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    fontSize: 25,
    marginBottom: 20,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontWeight: 'bold'

  },
  baseText: {
    marginTop: 10,
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center'

  },

  button: {
      backgroundColor: '#ff5454',
      padding: 15,
      marginTop: 40,
      marginRight: 10,
      marginLeft: 20,
      marginBottom: 30,
      alignItems: 'center',
      width: 100,


  },
  whiteFont: {
    color: '#FFF',
    fontSize: 18
  },
  header: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 0,
  },

  buttons: {
      flexDirection: 'row',
      justifyContent: 'center'


  }

});
export default TeamPointsView;

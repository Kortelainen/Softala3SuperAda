import * as CounterState from './CounterState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';

const CounterView = React.createClass({

  getInitialState: function() {
    return {
      hello: ''
    }
  },

  propTypes: {
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  welcome(){
  this.props.dispatch(NavigationState.pushRoute({
        key: 'Welcome',
        title: 'Tervetuloa'
      }));
    },
    login(){
    this.props.dispatch(NavigationState.pushRoute({
          key: 'LoginView',
          title: 'Kirjautuminen'
         }));
      },
      feedback(){
      this.props.dispatch(NavigationState.pushRoute({
            key: 'FeedbackView',
            title: 'Anna palautetta'
           }));
        },


      kartta(){
      this.props.dispatch(NavigationState.pushRoute({
          key: 'MapView',
          title: 'Kartta'
        }));
      },

      yrityslista(){
    this.props.dispatch(NavigationState.pushRoute({
      key: 'CheckPoints',
      title: 'Yrityslista'
    }));
  },

      team(){
      this.props.dispatch(NavigationState.pushRoute({
        key: 'TeamView',
        title: 'Team'
      }));
      },

      goodbye(){
      this.props.dispatch(NavigationState.pushRoute({
        key: 'Goodbye',
        title: 'Kiitos osallistumisesta!'
      }));
      },



      teampoints(){
      this.props.dispatch(NavigationState.pushRoute({
        key: 'TeamPointsView',
        title: 'Pisteet'
      }));
      },

  renderUserInfo() {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.userProfilePhoto}
          source={{
            uri: this.props.userProfilePhoto,
            width: 80,
            height: 80
          }}
        />

        <Text style={styles.linkButton}>
          Welcome, {this.props.userName}!
        </Text>
      </View>
    );
  },
  render() {

    var _scrollView: ScrollView;

    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;

    return (
      <View style={styles.container}>

      <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
        automaticallyAdjustContentInsets={false}
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={styles.scrollView}>


        {this.renderUserInfo()}



        <TouchableOpacity onPress={this.welcome} accessible={true}>
            <Text style={styles.linkButton}>
              {'Tervetuloa'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.kartta} accessible={true}>
          <Text style={styles.linkButton}>
            {'Kartta'}
          </Text>
        </TouchableOpacity>



        <TouchableOpacity onPress={this.login} accessible={true}>
            <Text style={styles.linkButton}>
              {'Login view'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.feedback} accessible={true}>
            <Text style={styles.linkButton}>
              {'FeedbackView'}
            </Text>
        </TouchableOpacity>



        <TouchableOpacity onPress={this.team} accessible={true}>
            <Text style={styles.linkButton}>
              {'Team'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.teampoints} accessible={true}>
            <Text style={styles.linkButton}>
              {'Team Points'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.yrityslista} accessible={true}>
           <Text style={styles.linkButton}>
             {'Yrityslista'}
           </Text>
       </TouchableOpacity>

       </ScrollView>

      </View>
    );
  }
});

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250,155,145,1)'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#fafafa',
    marginBottom: 5,
    padding: 5,
    fontSize: 20,
    backgroundColor: '#ff5454',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    width: 250,
  },
  scrollView: {
    backgroundColor: 'rgba(250,155,145,1)',

    flex: 1
  },

});

export default CounterView;

import React, {PropTypes} from 'react';
import {
Text,
View,
StyleSheet,
Alert,
ListView,
TouchableOpacity
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';
//import companies from './CompanyList.json';
//console.log(companies);







const CheckPointView = React.createClass({


  //const companies = [
    //{name: "Company1", place: "room1001"},
    //{name: "Company2", place: "room1002"},
    //{name: "Company3", place: "room1003"}
  //]

  _companyList() {
    fetch('http://localhost:3000/companies', {
      method: 'GET'
    })
    .then((response) => response.json())
    .then(response => {
      Alert.alert(JSON.stringify(response.err) +'')
      Alert.alert(JSON.stringify(response.result, ['companyName']) +'')
    })
    .catch((error) => {
            console.log(error);
            Alert.alert(
              'Ei yhteyttä kantaan',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},

              ]
            )
          });
  },

  propTypes: {
    dispatch: PropTypes.func.isRequired
  },
  kartta(){
  this.props.dispatch(NavigationState.switchTab(3));
  },

  render(){
    const text = '';

/*  var companyComponents = [];

    for (var i = 0; i < companies.length; i++) {
      let company = companies[i];

      companyComponents.push(
        <Text key={i}>Company name: { company.name }
        Room: { company.place }</Text>
      );

}*/

    return (
      <View style={[styles.container]}>
      <Text style={styles.text}>
        {text}
      </Text>


      <TouchableOpacity onPress={this._companyList}>
      <View style={styles.GoToMapButton}>
      <Text style={{margin: 10, color: '#FFF', fontSize: 18,  }}>
        {'NÄYTÄ RASTIT KARTALLA'}
      </Text>
      </View>
      </TouchableOpacity>

    </View>
    );
  }
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    alignItems: 'center'

  },
  GoToMapButton: {

    backgroundColor: '#ff5454',
    padding: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,


    },

  text: {
    padding: 5,
    justifyContent: 'flex-start'
  },



});

export default CheckPointView;

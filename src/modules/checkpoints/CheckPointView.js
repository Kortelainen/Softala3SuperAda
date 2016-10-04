import React, {PropTypes} from 'react';
import {
Text,
View,
StyleSheet,
ListView,
TouchableOpacity
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';
//import companies from './CompanyList.json';
//console.log(companies);

const companies = [
  {name: "Company1", place: "room1001"},
  {name: "Company2", place: "room1002"},
  {name: "Company3", place: "room1003"}
]
const CheckPointView = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired
  },
  kartta(){
  this.props.dispatch(NavigationState.pushRoute({
      key: 'MapView',
      title: 'Kartta'
    }));
  },

  render(){
    const text = '';

  var companyComponents = [];

    for (var i = 0; i < companies.length; i++) {
      let company = companies[i];

      companyComponents.push(
        <Text key={i}>Company name: { company.name }
        Room: { company.place }</Text>
      );
}

    return (
      <View style={[styles.container]}>
      <Text style={styles.text}>
        {text}
      </Text>
      { companyComponents }

      <TouchableOpacity onPress={this.kartta}>
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

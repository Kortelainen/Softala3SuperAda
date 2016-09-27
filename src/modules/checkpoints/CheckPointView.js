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
    const text = 'Tervetuloa yrityslista sivulle';

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
      <Text>
        {text}
      </Text>
      { companyComponents }
      <TouchableOpacity onPress={this.kartta}>
      <Text style={styles.GoToMapButton}>
        {'NÄYTÄ RASTIT KARTALLA'}
      </Text>
      </TouchableOpacity>
    </View>
    );
  }
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  GoToMapButton: {
    flex:2,
    fontSize:22,
    textAlign: 'center',
    color: 'white',
    marginBottom: 2,
    padding: 3,
    backgroundColor:'#e64e24'
    },
});

export default CheckPointView;

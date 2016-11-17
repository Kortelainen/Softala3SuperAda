import React, {PropTypes} from 'react';
import {
Text,
View,
StyleSheet,
TouchableOpacity,
Image
} from 'react-native';
import THUMBS from '../../..//images/superda.png';
import GridView from 'react-native-grid-view';
import {get} from '../../utils/api';
import * as NavigationState from '../../modules/navigation/NavigationState';

var COMPANIES_PER_ROW = 3;

const CheckPointView = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      teamtoken: '',
      dataSource: []
      // new ListView.DataSource({
      //   rowHasChanged: (row1, row2) => row1 !== row2
      // })
    };
  },

  componentDidMount() {
    this.fetchData();
  },

  async fetchData() {
    const responseData = await get('/companies');
    this.setState({
      dataSource: responseData.result
    });
  },

  renderCompany(company) {
    const imgSource = THUMBS;
    return (
      <TouchableOpacity>
        <View style={styles.companyRow}>
          <Image style={styles.thumb} source={imgSource} />
          <Text style={styles.companyText}>{company.companyName}</Text>
        </View>
      </TouchableOpacity>
    );
  },

  kartta() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'MapView',
      title: 'Kartta'
    }));
  },

  render() {
    console.log(this.state.dataSource);

    return (
      <View style={[styles.container]}>
      <GridView
        items={this.state.dataSource}
        itemsPerRow={COMPANIES_PER_ROW}
        renderItem={this.renderCompany}
        style={styles.companyList}
        />
      <TouchableOpacity onPress={this.kartta} style={styles.GoToMapButton}>
          <Text style={styles.buttonText}>
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
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  GoToMapButton: {
    backgroundColor: '#ff5454',
    padding: 5,
    margin: 30,
    width: 350,
    height: 70,
    justifyContent: 'center'
  },
  companyRow: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 100
  },
  companyList: {

  },
  companyText: {
    fontSize: 20
  },
  thumb: {
    width: 100,
    height: 100
  },
  text: {
    fontSize: 24,
    padding: 5,
    justifyContent: 'flex-start'
  },
  buttonText: {
    margin: 10,
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default CheckPointView;

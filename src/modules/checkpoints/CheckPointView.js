import React, {PropTypes} from 'react';
import {
Text,
View,
StyleSheet,
Alert,
ListView,
TouchableOpacity,
AsyncStorage,
Image
} from 'react-native';
import THUMBS from '../../..//images/superda.png';
import {get} from '../../utils/api';
import * as NavigationState from '../../modules/navigation/NavigationState';

const CheckPointView = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      teamtoken: '',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  },

  componentDidMount() {
    this.fetchData();
  },

  async fetchData() {
    const responseData = await get('/companies')
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.result)
      });
  },

  renderCompany(company) {
    const imgSource = THUMBS;
    return (
      <TouchableOpacity>
        <View style={styles.companyRow}>
          <Image style={styles.thumb} source={imgSource} />
          <Text>{company.companyName}</Text>
        </View>
      </TouchableOpacity>
    );
  },

  kartta() {
    this.props.dispatch(NavigationState.switchTab(3));
  },

  render() {
    const text = '';

    return (
      <View style={[styles.container]}>
      <Text style={styles.text}>
        {text}
      </Text>

      <ListView
      style={styles.companyList}
      dataSource={this.state.dataSource}
      renderRow={this.renderCompany}
      />

      <TouchableOpacity onPress={this.kartta}>
      <View style={styles.GoToMapButton}>
      <Text style={{margin: 10, color: '#FFF', fontSize: 18}}>
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
    margin: 30
  },
  companyRow: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff5454',
    margin: 10,
    width: 300
  },
  thumb: {

  },
  text: {
    padding: 5,
    justifyContent: 'flex-start'
  }
});

export default CheckPointView;

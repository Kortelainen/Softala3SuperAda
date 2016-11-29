import React, {PropTypes} from 'react';
import {
Text,
View,
StyleSheet,
TouchableOpacity,
Image,
AsyncStorage
} from 'react-native';
import GridView from 'react-native-grid-view';
import {get} from '../../utils/api';
import * as NavigationState from '../../modules/navigation/NavigationState';

const images = {
  Laalaa: require('../../../images/companyImages/Laalaa.png'),
  Futurice: require('../../../images/companyImages/Futurice.png'),
  Oracle: require('../../../images/companyImages/Oracle.png'),
  Reaktor: require('../../../images/companyImages/Reaktor.png'),
  Rovio: require('../../../images/companyImages/Rovio.png'),
  Sigmatic: require('../../../images/companyImages/Sigmatic.png'),
  Supercell: require('../../../images/companyImages/Supercell.png'),
  Appelsiini: require('../../../images/companyImages/Appelsiini.png'),
  Zalando: require('../../../images/companyImages/Zalando.png'),
  Laalaa_visited: require('../../../images/companyImages/Laalaa_visited.png'),
  Futurice_visited: require('../../../images/companyImages/Futurice_visited.png'),
  Oracle_visited: require('../../../images/companyImages/Oracle_visited.png'),
  Reaktor_visited: require('../../../images/companyImages/Reaktor_visited.png'),
  Rovio_visited: require('../../../images/companyImages/Rovio_visited.png'),
  Sigmatic_visited: require('../../../images/companyImages/Sigmatic_visited.png'),
  Supercell_visited: require('../../../images/companyImages/Supercell_visited.png'),
  Appelsiini_visited: require('../../../images/companyImages/Appelsiini_visited.png'),
  Zalando_visited: require('../../../images/companyImages/Zalando_visited.png')
};

var COMPANIES_PER_ROW = 3;

const CheckPointView = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      teamtoken: '',
      dataSource: []
    };
  },

  componentDidMount() {
    this.fetchData();
  },

  async fetchData() {
    const responseData = await get('/companies');
    for (var i = 0; i < responseData.result.length; i++) {
      console.log(responseData.result[i])
    }
    this.setState({
      dataSource: responseData.result
    });
  },

  renderCompany(company) {
    console.log(company);
    const visited = company.visited ? '_visited' : '';
    const image = images[`${company.companyName}${visited}`];

    if (!image) {
      return null;
    }
    return (
      <TouchableOpacity
      key={company.companyId}>
        <View style={styles.companyRow}>
          <Image style={styles.thumb} source={image} />
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
    return (
      <View style={[styles.container]}>
      <GridView
        items={this.state.dataSource}
        itemsPerRow={COMPANIES_PER_ROW}
        renderItem={this.renderCompany}
        style={styles.companyList}
        enableEmptySections={true}
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

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city';

class CityList extends Component {
  componentDidMount() {
    // TODO: dispatch an action to load flats!
    this.props.setCities();
  }
  render () {
    const cityList = this.props.cities.map(city => <City city={city} key={city.address} />);
    return (
      <div className="col-sm-4">
        {cityList}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);

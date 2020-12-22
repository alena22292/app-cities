import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render () {
    let classes = "list-group-item";
    if (this.props.city === this.props.selectedCity) {
      classes += " active";
    }
    return (
      <div className={classes} onClick={ this.handleClick }>
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);

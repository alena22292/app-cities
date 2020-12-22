import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render () {
    let header = <h1></h1>
    let address = <p></p>
    let imageSrc = "https://kitt.lewagon.com/placeholder/cities/:slug"
    if (this.props.selectedCity) {
      header = <h1>{this.props.selectedCity.name}</h1>;
      address = <p>{this.props.selectedCity.address}</p>;
      imageSrc = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;
    }
    return (
      <div className="col-sm-8 active-city">
        {header}
        {address}
        <img src={imageSrc} alt="Description" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);

import React, {Component} from 'react';
import Address from '../components/Address';
import {connect} from 'react-redux';
import NavigationConstants from '../../utils/NavigationConstants';
import {storeAddressInfo} from '../../redux/CommonAction';

class DeliveryAddressContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Address
        locationClick={() =>
          this.props.navigation.navigate(NavigationConstants.LOCATION_PICKER)
        }
        paymentClick={values => {
          this.props.saveAddressInfo(values);
          this.props.navigation.navigate(NavigationConstants.PAYMENT_DEMO);
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveAddressInfo: addressInfo => {
      dispatch(storeAddressInfo(addressInfo));
    },
  };
};

const mapStateToProps = state => {
  const { commonReducer } = state;
  return {
    ...commonReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddressContainer);

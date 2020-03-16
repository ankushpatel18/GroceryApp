import React, { Component } from 'react';
import Address from '../components/Address';
import { connect } from 'react-redux';
import NavigationConstants from '../../utils/NavigationConstants';


class DeliveryAddressContainer extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Address
              locationClick={() =>
                this.props.navigation.navigate(NavigationConstants.LOCATION_PICKER)
            }
            paymentClick={() =>
                this.props.navigation.navigate(NavigationConstants.PAYMENT_DEMO)
            }
            
             />
        );
    }
}


export default connect(null, null)(DeliveryAddressContainer)
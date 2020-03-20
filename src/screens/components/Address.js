
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import MyButton from '../components/MyButton';

const Form = t.form.Form;

const AddressConst = t.struct({
    Name: t.String,
    number: t.Integer,
    address: t.String,
    pincode: t.Integer
});

const options = {
  fields: {
    Name:  {
        error: 'Please enter valid name'
      },
      number: {
        error: 'Please enter valid number'
      },
    address: {
      error: 'Please enter valid address'
    },
    pincode:  {
      error: 'Please enter postal code.'
    },
  }
};

export default class Address extends Component {
   
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.formContainer}>
                    <Form  ref={c => this._form = c}
                     style={styles.form} 
                     type={AddressConst}
                      options={options} />
                       <MyButton
                        title="Spot on map"
                        customClick={this.props.locationClick}
                    />
                    <MyButton
                        title="Proceed to payment"

                        customClick={() => {
                            const value = this._form.getValue();
                           //const value =  {"Name": "T", "address": "Test", "number": 1234, "pincode": 123456}
                            console.log('value: ', value);
                            if(value) {
                              this.props.paymentClick(value);
                            }
                        }}
                    />
                   
               </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#ffffff',
    },
    formContainer: {
        margin: 10,
        padding: 20,
        backgroundColor: '#ffffff',
        flex: 1
    },
    form: {
        padding: 20,
        backgroundColor: '#ffffff',
        flex: 1
    },
});


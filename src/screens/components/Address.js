
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import MyButton from '../components/MyButton';

const Form = t.form.Form;

const AddressConst = t.struct({
    Name: t.String,
    number: t.Integer,
    pincode: t.Integer,
    address: t.String,
    city: t.String,
    state: t.String,
   
  
});

const options = {
  fields: {
    Name:  {
        error: 'Please enter proper name'
      },
      number: {
        error: 'Please enter proper number'
      },
    pincode:  {
      error: 'Please enter proper pincode'
    },
    address: {
      error: 'Please enter proper address'
    },
    city: {
      error: 'Please enter proper city'
    },
   state:  {
      error: 'Please enter proper state'
    }
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
                        title="Proceed to payment"
                        customClick={() => {
                            const value = this._form.getValue();
                            console.log('value: ', value);
                            this.props.paymentClick
                        }}
                    />
                    <MyButton
                        title="Pick a location"
                        customClick={this.props.locationClick}
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


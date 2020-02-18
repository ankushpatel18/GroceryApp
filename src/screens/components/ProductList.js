import React, {Component} from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native';

export class ProductList extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <FlatList
            data={this.props.dataSource}
            renderItem={({item}) => <Text>{item.title}, {item.author}</Text>}
            keyExtractor={({product_id}, index) => product_id}
          />
        )
    }
}
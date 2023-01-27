import React from 'react';
import {View, Text} from 'react-native';
import {getDistance} from 'geolib';

const FindDistance = ({route}) => {
  const {origin, destination} = route.params;
  console.log('item', origin);
  const distance = getDistance(origin, destination);

  return (
    <View>
      <Text>Distance: {distance} meters</Text>
    </View>
  );
};

export default FindDistance;

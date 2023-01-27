import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const InputScreen = ({navigation}) => {
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  const handleSaveOrigin = (longitude, latitude) => {
    setOrigin({longitude, latitude});
    setNextButtonDisabled(false);
  };

  const handleSaveDestination = (longitude, latitude) => {
    setDestination({longitude, latitude});
    setNextButtonDisabled(false);
  };

  return (
    <View>
      <Text>Origin</Text>
      <TextInput
        placeholder="Longitude"
        onChangeText={longitude => handleSaveOrigin(longitude, origin.latitude)}
      />
      <TextInput
        placeholder="Latitude"
        onChangeText={latitude => handleSaveOrigin(origin.longitude, latitude)}
      />
      <Button
        title="Save"
        onPress={() => setNextButtonDisabled(false)}
        disabled={nextButtonDisabled}
      />
      <Text>Destination</Text>
      <TextInput
        placeholder="Longitude"
        onChangeText={longitude =>
          handleSaveDestination(longitude, destination.latitude)
        }
      />
      <TextInput
        placeholder="Latitude"
        onChangeText={latitude =>
          handleSaveDestination(destination.longitude, latitude)
        }
      />
      <Button
        title="Save"
        onPress={() => setNextButtonDisabled(false)}
        disabled={nextButtonDisabled}
      />
      <Button
        title="Next"
        onPress={() =>{
          // navigation.navigate('FindDistance', {origin, destination})

           console.log(origin)}
        }
        disabled={nextButtonDisabled}
      />
    </View>
  );
};

export default InputScreen;

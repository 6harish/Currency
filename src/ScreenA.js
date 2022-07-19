import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
    // navigation.toggleDrawer();
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://comms.globalxchange.com/coin/vault/get/all/coins',
      );
      const json = await response.json();
      setData(json.coins);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 4, backgroundColor: '#000'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({_id}, index) => _id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={onPressHandler}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 25,
                  backgroundColor: '#90edf6',
                  margin: 5,
                  borderRadius: 10,
                  flex: 1,
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={{uri: `${item.coinImage}`}}
                />

                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 15, fontWeight: '700'}}>
                    {item.coinName}
                  </Text>
                  <Text> {item.coinSymbol}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 15, fontWeight: '700'}}>
                    {' '}
                    {item.symbol}
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: '700'}}>
                    {item.usd_price}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

/*
 * @Author: yaogeng.zhu
 * @Date: 2021-12-11 22:00:25
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-12-11 22:11:25
 */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen(props) {
  const {navigation, route} = props;

  useEffect(() => {
    if (route.params?.post) {
      console.log(route.params.post);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text>Home Screen....</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            name: 'zhuyaogeng',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen(props) {
  const {navigation, route} = props;

  useEffect(() => {
    console.log(route.params);
  }, [route]);
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="返回"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="更新参数"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: {post: 'hhelo'},
            merge: true,
          });
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title: '首页'}}>
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Index;

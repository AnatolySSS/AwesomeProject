import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, ScrollView, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PagerView from 'react-native-pager-view'

// const getFullName = (firstName, secondName, thirdName) => {
//   return firstName + " " + secondName + " " + thirdName;
// }

// const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator()

const Cat = (props) => {

  const [isHungry, setIsHungry] = useState(true)
  const [timesFeed, setTimesFeed] = useState(0)
  const [text, setText] = useState('')
  
  return (
    <View>
      <Text>Hello, I am {text + "! I am a  " + props.name} and i am {isHungry ? "hungry" : "full"} I ate {timesFeed} times</Text>
      <Image 
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'grey',
          borderWidth: 1
        }}
        placeholder="Name me!"
        onChangeText={(newText) => setText(newText)}
      />
      <Button 
        onPress = {() => {
          isHungry ? setIsHungry(false) : setIsHungry(true)
          setTimesFeed(timesFeed + 1)
        }}
        // disabled = {!isHungry}
        title = {isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  )
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Cat1"
          component={Cat}
        />
        <Tab.Screen
          name="Cat2"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Cat3"
          component={SettingsScreen} 
        />
      </Tab.Navigator>
      {/* <PagerView style={styles.pagerView} initialPage={1}>
        <View style={styles.container} key="1">
          <FlatList 
            data={[
              {key: 'Garry'},
              {key: 'Fyodor'},
              {key: 'Harry'},
              {key: 'Mops'},
              {key: 'Geminy'},
            ]}
            renderItem={({item}) => <Cat male={item.key} style={styles.item} />}
          />
        </View>
        <View key="2">
          <Cat name={getFullName("Kittie", "the", "Beautiful")} male="woman" />
        </View>
        <View key="3">
          <Cat name={getFullName("Sunny", "the", "Shine")} male="child" />
        </View>
      </PagerView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default Cafe;
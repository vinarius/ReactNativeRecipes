import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Recipe {
  title: string;
  ingredients: string[];
  directions: string[];
}

const recipes: Recipe[] = [
  {
    title: 'Artichoke Pasta',
    ingredients: [
      '1 8oz package soft cream cheese',
      '4oz mayonnaise',
      '4oz sour cream',
      '1/4 Cup Fresh Grated Parmesan Cheese',
      '1/4 Cup Fresh Grated Romano Cheese',
      '2 eggs',
      '3/4 Cup dairy sour cream',
      '1 16oz can artichoke hearts',
      '1/4 Cup fresh chopped chives',
      '1 tbs fresh minced garlic'
    ],
    directions: [
      'In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts. Cook until just heated through, about 3 minutes.',
      'In a large pot of boiling, salted water, cook the fusilli until just done, about 13 minutes. Drain the pasta and toss with the cream sauce, Parmesan, and chives.'
    ]
  }
];

export default function App() {
  return (
    <View style={{
      marginTop: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Mark's Recipe Box</Text>
      <FlatList
        data={recipes}
        renderItem={({item, index})=>{
          return <Text key={index}>
            Title: {item.title}
          </Text>
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

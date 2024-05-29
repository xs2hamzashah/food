import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
          return <ResultsDetail result={item} />
        }}
      />
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', margin: 10 }} />

    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 18, 
    marginLeft: 15,
    marginBottom: 5
  }, 
  container: {
    marginBottom: 10
  }
});

export default ResultsList;

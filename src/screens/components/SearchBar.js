import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";


// SearchBar is component that takes in
// term - value in the component 
// onTermChange - function to be called when there's change in Text, 
// this function(onTermChange) sets the value for the term.
// onTermSubmit - when editing ends (e.g., user presses enter).
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput 
      style={styles.inputStyle} 
      placeholder="Search" 
      value={term} 
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onTermChange} // reference to the function - on the editing - call the function.
      onEndEditing={onTermSubmit} // reference to the function - on end editing - call this function.
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#dddddd",
    height: 50,
    borderRadius: 15,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18, // default is 14
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;

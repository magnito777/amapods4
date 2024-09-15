import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here, e.g., filtering data based on searchQuery
    console.log('Search query:', searchQuery);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        style={styles.searchInput}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});

export default SearchInput;
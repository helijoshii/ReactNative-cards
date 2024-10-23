// import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import PokemonCard from './components/PokemonCard'

// const App = () => {

//   const charmanderData = {
//     name: "Charmander",
//     image: require("./assets/charmander.png"),
//     type: "Fire",
//     hp: 39,
//     moves: ["Scratch", "Ember", "Growl", "Leer"],
//     weaknesses: ["water", "Rock"],
//   };
//   const squirtleData = {
//     name: "Squirtle",
//     image: require("./assets/squirtle.png"), // Replace with the actual image path
//     type: "Water",
//     hp: 44,
//     moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
//     weaknesses: ["Electric", "Grass"],
//   };

//   const bulbasaurData = {
//     name: "Bulbasaur",
//     image: require("./assets/bulbasaur.png"), // Replace with the actual image path
//     type: "Grass",
//     hp: 45,
//     moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
//     weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//   };

//   const pikachuData = {
//     name: "Pikachu",
//     image: require("./assets/pikachu.png"), // Replace with the actual image path
//     type: "Electric",
//     hp: 35,
//     moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
//     weaknesses: ["Ground"],
//   };


//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={[styles.scrollView, { borderWidth: 1, borderColor: 'red' }]}>

//         <PokemonCard {...charmanderData} />
//         <PokemonCard {...squirtleData} />
//         <PokemonCard {...bulbasaurData} />
//         <PokemonCard {...pikachuData} />
//         <PokemonCard {...charmanderData} />
//         <PokemonCard {...squirtleData} />
//         <PokemonCard {...bulbasaurData} />
//         <PokemonCard {...pikachuData} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//   },

// })

import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import PokemonCard from './components/PokemonCard';

const App = () => {
  const pokemonData = [
    {
      name: "Charmander",
      image: require("./assets/charmander.png"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["water", "Rock"],
    },
    {
      name: "Squirtle",
      image: require("./assets/squirtle.png"),
      type: "Water",
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
      weaknesses: ["Electric", "Grass"],
    },
    {
      name: "Bulbasaur",
      image: require("./assets/bulbasaur.png"),
      type: "Grass",
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    },
    {
      name: "Pikachu",
      image: require("./assets/pikachu.png"),
      type: "Electric",
      hp: 35,
      moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
      weaknesses: ["Ground"],
    },
  ];

  const renderItem = ({ item }) => <PokemonCard {...item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.scrollView} // Optional: to add padding
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    paddingBottom: 20, // Add padding to the bottom if needed
  },
});



import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGamingScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRounds] = useState(0);

  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);

  }

  const startGameHandler = (selectdNumber) => {
    setUserNumber(selectdNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen title="Start Game screen" onStartGame={startGameHandler} />;
  if (userNumber && guessRound <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRound > 0) {
    content = <GameOverScreen numOfRound={guessRound} onRestart={configureNewGame} userSelectNumber={userNumber} />
  }

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Header title="Number Game" />
        {content}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {

  }
});

export default App;

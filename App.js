
import React, {Component} from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {
  StyleSheet,
  View,
  Image,
  Button
} from 'react-native';

class App extends Component {
  state = {
    images: [require("./images/dog.jpeg"), require("./images/cat.jpeg"), require("./images/bird.jpeg"), require("./images/ferret.jpeg")],
    imageIndex: 0,
  }
  maxIndex = 3
  minIndex = 0


 increaseImage = () => {
    if(this.state.imageIndex < this.maxIndex) {
      this.setState({
        imageIndex: this.state.imageIndex + 1
      });
    }
    else {
      this.setState({
        imageIndex: this.minIndex
      });
    }

  }

  decreaseImage = () => {
    if(this.state.imageIndex > this.minIndex) {
      this.setState({
        imageIndex: this.state.imageIndex - 1
      });
    }
    else {
      this.setState({
        imageIndex: this.maxIndex
      });
    }
  }

  render() {
    return (
      <>
        <GestureRecognizer
          onSwipeLeft={this.decreaseImage}
          onSwipeRight={this.increaseImage}>
          <View>
            <View>
              <Image style={styles.image} source={this.state.images[this.state.imageIndex]} />
            </View>
            <View style={styles.controls}>
              <Button title="Left" onPress={this.decreaseImage}/>
              <Button title="Right" onPress={this.increaseImage}/>
            </View>
          </View>
        </GestureRecognizer>
      </>
    );
  }
}
const styles = StyleSheet.create({
  controls: {
    
  },
  button: {
    width: 5,
  },
  image: {
    height: 400
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MovieData = [
  {title: 'Title🍏', year: '2015🍏', posters: {thumbnail: 'http://i.imgur.com/rAWGd0K.jpg'}},
];
var RequestUrl ='https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


class FirstReactProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
  this.fetchData();
}

fetchData() {
  fetch(RequestUrl)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        movies:responseData.movies,
      });
    })
    .done();
}

  render() {
    if(!this.state.movies){
      return this.renderLoadingView();
    }


    var movie = MovieData[0];
    return this.renderMovie(movie);
  }

  renderLoadingView() {

    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );

  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source = {{uri:movie.posters.thumbnail}}
          style = {styles.thumbnail}
         />
          <View style = {styles.rightContainer}>
            <Text style = {styles.title} > {movie.title} </Text>
            <Text style = {styles.year} > {movie.year} </Text>
         </View>
      </View>
    );

    }
  }


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  rightContainer :{
    flex : 1,
  },
  title : {
    fontSize : 20,
    marginBottom : 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center',
  },
  thumbnail:{
    width: 160,
    height: 190,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstReactProject', () => FirstReactProject);

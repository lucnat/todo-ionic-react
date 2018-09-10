import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <ion-app>
        <ion-header translucent>
          <ion-toolbar color="primary">
            <ion-title>Todos</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content padding fullscreen>
          <h1>Hello, World</h1>
        </ion-content>
      </ion-app>
    );
  }
}

export default App;

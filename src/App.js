import React, { Component } from 'react';
import './App.css';
import EmbedoItem from './EmbedoItem';

class App extends Component {
  render() {
    const lists = [
      {
        "id": "85ac034e-318d-44fc-b793-ddef82d31bb1",
        "type": "SOCIAL",
        "value": "https://twitter.com/Dan_Kiko_Murray/status/1116149285081341953",
        "position": 14,
        "media": null
      },
      {
        "id": "f094439a-17b3-4cac-a47a-526c8ad931db",
        "type": "SOCIAL",
        "value": "https://www.facebook.com/actually.free/photos/rpp.212877235395354/724537360896003/?type=3&theater",
        "position": 15,
        "media": null
      },
      {
        "id": "736d4335-159f-44fb-8423-28d7f955dde1",
        "type": "SOCIAL",
        "value": "https://www.pinterest.com.au/pin/451556300114351400",
        "position": 16,
        "media": null
      },
      {
        "id": "2fd30572-3e98-47c2-bc47-e11515ac070f",
        "type": "SOCIAL",
        "value": "https://www.instagram.com/p/ButHiDZFE34/",
        "position": 13,
        "media": null
      },
    ];

    return (
      <div className="App">
        {lists.map(list => {
          return <EmbedoItem
            key={list.id}
            id={list.id}
            href={list.value}
          // name={content.name || ''}
          // data-width={'100%'}
          // data-height={html.data.options.height}
          // data-options={html.data.options ? html.data.options : {}}
          />
        })}
      </div>
    );
  }
}

export default App;

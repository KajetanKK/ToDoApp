import React, { Component } from 'react';
import DodajZadanie from './DodajZadanie'
import ListaZadan from './ListaZadan'
import './App.css';

class App extends Component {

  counter = 9

  state = {
    zadania: [
      {
       id: 0,
       tekst: 'iść do kina',
       aktywny: true,
       wazny: false,
       data: '2022-09-10',
       dataZakonczenia: null 
      },
      {
       id: 1,
       tekst: 'wizyta u dentysty',
       aktywny: true,
       wazny: true,
       data: '2022-10-01',
       dataZakonczenia: null 
      },
      {
        id: 2,
        tekst: 'spotkanie z ziomkami',
        aktywny: true,
        wazny: true,
        data: '2022-08-30',
        dataZakonczenia: null 
       },
       {
        id: 3,
        tekst: 'rozpoczecie roku szkolnego',
        aktywny: true,
        wazny: true,
        data: '2022-09-01',
        dataZakonczenia: null 
       },
       {
        id: 4,
        tekst: 'nagranie płyty',
        aktywny: true,
        wazny: true,
        data: '2023-01-01',
        dataZakonczenia: null 
       },
    ]
  }

  zmienStatus = (id) => {
    const zadania = Array.from(this.state.zadania)
    zadania.forEach(zadanie => {
      if(zadanie.id === id){
        zadanie.aktywny = false
        zadania.dataZakonczenia = new Date().getTime()
      }
    })

    this.setState({
      zadania
    })
  }

  usunZadanie = (id) => {
    const zadania = [...this.state.zadania]
    const index = zadania.findIndex(zadanie => zadanie.id === id)
    zadania.splice(index, 1)

    this.setState({
      zadania
    })
  }

  dodajZadanie = (tekst, wazny, data) => {
    const zadanie = {
       id: this.counter,
       tekst,
       aktywny: true,
       wazny,
       data,
       dataZakonczenia: null 
    }

    this.counter++

    this.setState(prevState => ({
      zadania: [...prevState.zadania, zadanie]
    }))

    return true
  }

  render() {
    return (
      <div className="App">
        <ListaZadan zadania={this.state.zadania} usun={this.usunZadanie} zmien={this.zmienStatus}></ListaZadan>
        <DodajZadanie dodaj={this.dodajZadanie}></DodajZadanie>
      </div>
    );
  }
}

export default App;

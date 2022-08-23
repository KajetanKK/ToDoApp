import React, { Component } from 'react'
import './DodajZadanie.css'

class DodajZadanie extends Component {
    minData = new Date().toISOString().slice(0, 10)

    state = {  
        tekst: "",
        data: this.minData,
        checked: false
    } 

    obslugaDaty = (e) => {
        this.setState({
            data: e.target.value
        })
    }

    obslugaTekstu = (e) => {
        this.setState({
            tekst: e.target.value
        })
    }

    obslugaCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    obslugaPrzycisku = () => {
        const {tekst, data, checked} = this.state
        const dodaj = this.props.dodaj(tekst, data, checked)

        if(dodaj) {
            this.setState({
                tekst: "",
                data: this.minData,
                checked: false
            })
        }
    }
 
    render() {
        let maxData = this.minData.slice(0, 4)* 1 + 1
        maxData = maxData+"-12-31"

        return (
            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.tekst} onChange={this.obslugaTekstu}/>
                <input type="checkbox" checked={this.state.checked} onChange={this.obslugaCheckbox} id="wazny"/>
                <label htmlFor="wazny">Ważne</label> <br/>
                <label htmlFor="data">Do kiedy?</label> 
                <input type="date" value={this.state.data} min={this.minData} max={maxData} onChange={this.obslugaDaty}/> <br/>
                <button onClick={this.obslugaPrzycisku}>Dodaj</button>
            </div>
        );
    }
}
 
export default DodajZadanie;
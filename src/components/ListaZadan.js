import React from 'react'
import Zadanie from './Zadanie'

const ListaZadan = (props) => {

    const aktywne = props.zadania.filter(zadanie => zadanie.aktywny)
    const zrobione = props.zadania.filter(zadanie => !zadanie.aktywny)

    const aktywneZadania = aktywne.map(zadanie => <Zadanie key={zadanie.id} zadanie={zadanie} usun={props.usun} zmien={props.zmien}/>)
    const zrobioneZadania = zrobione.map(zadanie => <Zadanie key={zadanie.id} zadanie={zadanie} usun={props.usun} zmien={props.zmien}/>)

    zrobioneZadania.sort((a, b) => b.dataZakonczenia - a.dataZakonczenia)
    aktywneZadania.sort((a, b) => {
        if (a.tekst < b.tekst) return -1;
        if (a.tekst > b.tekst) return 1;
        return 0
    }) 

    return (  
        <>
        <div className="aktywne">
            <h2>Do zrobienia</h2>
            {aktywneZadania.length> 0 ? aktywneZadania : <p>Brak zadań</p>}
        </div>

        <hr/>

        <div className="zrobione">
            <h2>Zadania zakończone: <span>{zrobione.length}</span></h2>
            {zrobione.length > 3 && <span>Ostatnie 3 zrobione zadania</span>}
            {zrobioneZadania.slice(0, 3)}
        </div>
        </>

    );
}
 
export default ListaZadan;
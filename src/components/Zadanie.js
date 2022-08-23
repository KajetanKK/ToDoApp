import React from 'react'

const Zadanie = (props) => {

    const style = {
        color: 'red'
    }

    const {wazny, dataZakonczenia, tekst, data, id, aktywny} = props.zadanie;

    if (aktywny) {

    return (  
        <div>
            <p>
                <strong style={wazny ? style : null}>{tekst}</strong> - do <span>{data} </span>
                <button onClick={() => props.zmien(id)}>zrobione</button>
                <button onClick={() => props.usun(id)}>X</button>
            </p>
        </div>
    );} else{

        const zakonczenie = new Date(dataZakonczenia).toLocaleString()
        return (
            <div>
                <p>
                    <strong>{tekst}</strong> - do <em>(do: {data})</em> <br/>
                    - data zakończenia <span> {zakonczenie}</span>
                    <button onClick={() => props.usun(id)}>X</button>
                </p>
            </div>
            )
    }
}
 
export default Zadanie;
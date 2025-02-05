import React from 'react'
import {createContext} from "react";

const Data = createContext()

export default function PizzaBox() {
    return (

        <Data.Provider value={{name: 'John Doe'}}>
            <div>PizzaBox</div>



        </Data.Provider>
    )
}

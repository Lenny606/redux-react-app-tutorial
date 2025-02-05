import Data from "./PizzaBox"
import {useContext} from "react";

export default function Pizza() {

    const {name} = useContext(Data)
    return (
        <Data.Consumer >
            {
                (data) => {
                    return (
                        <div>
                            <p>{name}</p>
                            {data.name}
                        </div>
                    )
                }
            }
        </Data.Consumer>
    )
}

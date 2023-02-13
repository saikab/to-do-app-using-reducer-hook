import React from "react";
import { useState, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const InputText = () => {
    const [text, setText] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleKeyUp = event => {
        if(event.keyCode === 13){
            if(text === "")
                return;
            dispatch({
                type: "ADD_TO_DO",
                payload: {
                   id: Math.random(),
                   text 
                }
            })

            setText("")
        }
    }

    console.log("Value in todo array" + state.todos.length)

    return(
        <div>
            <input 
            type = "text"
            value={text}
            onChange = {event => setText(event.target.value)}
            placeholder = "Add your to-do"
            onKeyUp={handleKeyUp}
            />

            
            {
                state.todos.map(item => { return (
                    <div style={style.list} key={item.id}>
                        <p style = {{ marginRight: 20}}>{item.text}</p>
                        <div style={style.del} onClick = {() => dispatch({
                            type: "DELETE_TO_DO",
                            payload: item.id
                        })}> X </div>
                    </div>
                )
                })
            }


        </div>
    )
}


const style = {
    list: { display: "flex", alignItems: "center", justifyContent: "center" },
    del: {
      width: 40,
      height: 40,
      borderRadius: 10,
      lineHeight: "40px",
      backgroundColor: "gold"
    }
  };

export default InputText;
// Write your Character component here
import React, { useState, useEffect } from "react";




const Characters = props => {
    return (
        <div>
            {characters.map(character => {
                name={props.name}
                home={props.home}
            })}
        </div>
    )
}

export default Characters;
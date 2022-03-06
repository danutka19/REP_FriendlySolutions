import React, {useEffect, useState} from "react";

export const InputDescription = ({ordersP}) => {
    const [descriptions, setDescriptions] = useState([]);
    const [description, setDescription] = useState("");

    useEffect(() => {
        setDescriptions(ordersP.map(order => {
            return order.description
        }));
        }, [])

    return (
    <form style={{display: "flex", flexDirection: "column"}}>Choose Description
            <select value={description} placeholder="-choose-" >
                {descriptions.map((des, i) => {
                    return (
                        <option  key={i}>{des}</option>
                       )
                })}
            </select>
    </form>
    )
}
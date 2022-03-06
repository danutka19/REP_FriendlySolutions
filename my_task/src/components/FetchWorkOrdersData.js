import React, {useState, useEffect} from "react";
import logo from "../logo.svg";
import {TableData} from './TableData';
import {InputDescription} from './InputDescription';

export function FetchWorkOrdersData() {
    const [orders, setOrders] = useState(false);

    const API = "http://localhost:3000";

    useEffect(() => {
        fetch((`${API}/db`))
            .then((resp) => resp.ok ? resp.json() : new Error("Web Error"))
            .then((data) => {
                setOrders(data.response.data)
                })
            .catch((error) => console.warn("Something goes wrong", error));
    }, []);

    useEffect(() => {
        console.log(orders, '-fetchOrd-')
    })

    return (
            orders ?
                <>
                    <InputDescription ordersP={orders}/>
                    <TableData ordersP={orders} />
                </>
                :
                <div style={{width: 100, height: 100}}><img src={logo}/></div>
    )
}
import React, {useEffect, useState} from "react";
import {InputDescription} from './InputDescription'

export const TableData = ({ordersP}) => {
    const [orders, setOrders] = useState([]); // setted from props

    useEffect(() => {
        setOrders(ordersP);
    }, [])

    return (
        <table className="table">
            <thead>
            <tr>
                <td>Work Order ID</td>
                <td>Description</td>
                <td>Received date</td>
                <td>Assigned to</td>
                <td>Status</td>
                <td>Priority</td>
            </tr>
            </thead>
            <tbody style={{display: "flex", flexDirection: "column-reverse"}}>
                {orders.map((order, i) => {
                    return (
                        <tr key={order.work_order_id} style={{display: "flex", flexDirection: "row-reverse"}}>
                            <td>{order.work_order_id}</td>
                            <td>{order.description}</td>
                            <td>{order.received_date}</td>
                            <td>{order.person_name}</td>
                            <td>{order.status}</td>
                            <td>{order.priority}</td>
                        </tr>
                        )
                })}
            </tbody>
        </table>
    )
}
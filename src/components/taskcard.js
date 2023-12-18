import { useState } from "react";
export const Taskcard = (props) => {
    const t = props.task;
    return (
        <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
            <p>
            {t.name}
            </p>
            <button className="btn btn-warning"  onClick={()=>props.func(t.id)}>Delete</button>
        </li>
    )
}
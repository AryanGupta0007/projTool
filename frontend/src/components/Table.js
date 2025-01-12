import React, {useEffect, useContext} from "react";
import {TaskTableRow} from "./TaskTableRow.js";

export const Table = () => {

    return (<div
        className="table-section"
        style={{overflowY: "auto", height: "80vh", width: "96.3vw"}}
    >
        <table
            className="table-auto border-collapse border border-gray-200"
            style={{width: "90vw", marginLeft: "5vw"}}
        >
            <thead
                style={{
                    color: "white",
                    backgroundColor: "#3b2c7d",
                    position: "sticky",
                    top: "5vh",
                    zIndex: 1,
                    fontSize: "13px",
                }}
            >
            <tr>
                <th className="px-2 py-4 border-b">OI</th>
            </tr>
            </thead>
            <tbody>
            <TaskTableRow/>

            </tbody>
        </table>
    </div>);
};

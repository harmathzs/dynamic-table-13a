import React from "react";

import './MyTable.css'

export default class MyTable extends React.Component {
    state = {
        style: {
                table:
                {
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                },
                td:
                {
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                },                
            }
    }

    render() {
        return <div>
            <table style={this.state.style.table}>
                <tbody>
                    <tr>
                        <td style={this.state.style.td}>TODO</td>
                        <td style={this.state.style.td}>TODO</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}
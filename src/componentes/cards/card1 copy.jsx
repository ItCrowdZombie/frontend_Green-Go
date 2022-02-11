import React from "react";
import axios from "axios";
import Global from "../../Global";
import { Component } from "react/cjs/react.production.min";


export default class Cards extends Component {
    state = {
        cards:[]
    , status:false

    }

    loadCard = () =>{
        var url = Global.urlplants;
        var request = "/cards";
        fetch.get(url + request).then(res => {
            this.setState ({
                cards: res.data
                ,status:true
            });
        });
    }
    componentDiMount = () =>{
        this.loadCard();
    }

    render() {
        return (
            <div>
                <h1>Plants</h1>
                <table className="card card-info">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id card</th>
                            <th>name</th>
                            <th>Categories</th>
                            <th>seller</th>
                            <th>description</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status === true &&
                        (
                            this.state.cards.map((card, i) =>{
                                return(
                                    <tr key ={i}>
                                        <td>{card.id}</td>
                                        <td style= {{fontWeight:"bold"}}>{card.name}</td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        )
    }


}
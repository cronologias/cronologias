import React from "react";
import Card from "./card";
import { getArtist } from "../services/searchBarApi"


class CardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names: []
        }
    }
    async componentDidMount() {
        const resposeJson = await getArtist()
        this.setState({names:resposeJson.data.allTarjetaAutoras})
        }
    render() {
        
        const names = this.state.names;
        return <Card names={names} />
        }
    }

export { CardContainer }

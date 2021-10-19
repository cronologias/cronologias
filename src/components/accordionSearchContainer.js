import React from "react";
import AccordionSearch from "../components/accordionSearch";
import { getArtist } from "../services/searchBarApi"

class AccordionSearchContainer extends React.Component {
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
        const order = names.sort((a, b) => (a.nombreDeLaAutora > b.nombreDeLaAutora ? 1 : a.nombreDeLaAutora < b.nombreDeLaAutora ? -1 : 0))
        return <AccordionSearch order={order} />
    }
}
export { AccordionSearchContainer }
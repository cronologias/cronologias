import React from "react";
import { SearchBar } from "../components/serchBar";
import { getArtist } from "../services/searchBarApi"

class SearchBarContainer extends React.Component {
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
        return <SearchBar names={names} />
    }
}
export { SearchBarContainer }
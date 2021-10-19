import React from "react";
import { ViewArtist } from "../components/viewArtist";
import { getArtistView } from "../services/viewArtistApi";

class ViewArtistContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names: []
        }
    }
    async componentDidMount() {
        const resposeJson = await getArtistView()
        this.setState({names:resposeJson.data.allNombreAutoras[0]})
        }
    render() {
        const names = this.state.names;
        console.log(names)
        return <ViewArtist names={names} />
    }
}
export { ViewArtistContainer }
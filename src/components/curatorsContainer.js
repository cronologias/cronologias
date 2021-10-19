import React from "react";
import CuratorsCards from "./curatorsCards"
import { getCurators } from "../services/curatorsApi";

class CuratorsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curators: []
        }
    }
    async componentDidMount() {
        const resposeJson = await getCurators()
        this.setState({curators:resposeJson.data.allTarjetaCuradoras})
        }
    render() {
        const curators = this.state.curators;
        return <CuratorsCards curators={curators} />
    }
}
export { CuratorsContainer }
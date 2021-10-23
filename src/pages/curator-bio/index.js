import React from "react";
import {getApiRes} from "../../services/callApi"
import CuratorsBio from "../../components/curatorsBio";

function CuratorsContainer({ curatorsBioData, curatorsShortData}) {
    return (
        <>
        <CuratorsBio curators={curatorsBioData} curatorsShort={curatorsShortData}/>
        </>

    )
}
export default CuratorsContainer

export async function getStaticProps () {
    const URl= process.env.NEXT_URL;
    const TOKEN= process.env.NEXT_TOKEN;
    const curatorsShortInfo ='query MyQuery{ allTarjetaCuradoras{breveDescripcionDeLaCuradora}}'
    const bodyCuratorsBio ='query MyQuery {allBiografiaCuradoras{nombreDeLaCuradora,imagenDeLaCuradora,cuerpoDeLaBiografia}}'
    const getCuratorsBio = await getApiRes(URl,TOKEN, bodyCuratorsBio)
    const curatorsBioData = getCuratorsBio.data.allBiografiaCuradoras[0]
    const getCuratorsShort = await getApiRes(URl,TOKEN, curatorsShortInfo)
    const curatorsShortData = getCuratorsShort.data.allTarjetaCuradoras[0].breveDescripcionDeLaCuradora
    return{
        props: {
            curatorsBioData,
            curatorsShortData,
        }
    }
}

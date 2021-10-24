import React from "react";
import {getApiRes} from "../../services/callApi"
import CuratorsBio from "../../components/curatorsBio";

function CuratorsContainer({ curatorsBioData}) {
  return (
      <>
      <CuratorsBio curators={curatorsBioData}/>
      </>

  )
}
export default CuratorsContainer

export async function getStaticPaths() {
    const URl= process.env.NEXT_URL;
    const TOKEN= process.env.NEXT_TOKEN;
    const bodyView =`query Myquery {allBiografiaCuradoras {id}}`
    const getView = await getApiRes(URl,TOKEN, bodyView);
    const dataView = getView.data.allBiografiaCuradoras;
  
    const paths = dataView.map(curators => {
      return {
        params : { id:`${curators.id}`}
      }
    })
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps ({params}) {
    const URl= process.env.NEXT_URL;
    const TOKEN= process.env.NEXT_TOKEN;
    const curatorsShortInfo ='query MyQuery{ allTarjetaCuradoras{breveDescripcionDeLaCuradora}}'
    const bodyCuratorsBio =`query MyQuery {allBiografiaCuradoras (filter: {id: {eq: ${params.id}}}) {id nombreDeLaCuradora,imagenDeLaCuradora,cuerpoDeLaBiografia, breveDescripcionDeLaCuradora}}`
    const getCuratorsBio = await getApiRes(URl,TOKEN, bodyCuratorsBio)
    const curatorsBioData = getCuratorsBio.data.allBiografiaCuradoras
    const getCuratorsShort = await getApiRes(URl,TOKEN, curatorsShortInfo)
    const curatorsShortData = getCuratorsShort.data.allTarjetaCuradoras[0].breveDescripcionDeLaCuradora
    return{
        props: {
            curatorsBioData,
        }
    }
}

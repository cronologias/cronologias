import React from 'react';
import {getApiRes} from '../../services/callApi'
import CuratorsBio from '../../components/curatorsBio';

function CuratorsContainer({ curatorsBioData, museumData}) {
  return (
      <>
      <CuratorsBio curators={curatorsBioData} museumData={museumData} />
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
    const bodyCuratorsBio =`query MyQuery {allBiografiaCuradoras (filter: {id: {eq: ${params.id}}}) {id nombreDeLaCuradora,imagenDeLaCuradora, enlaceDelSitioWeb, email, cuerpoDeLaBiografia, breveDescripcionDeLaCuradora}}`
    const getCuratorsBio = await getApiRes(URl,TOKEN, bodyCuratorsBio)
    const curatorsBioData = getCuratorsBio.data.allBiografiaCuradoras
    const museumInfo ='query MyQuery {allVisitaLaExposicions {id tituloDeLaTarjeta}}'
    const getMuseum = await getApiRes(URl,TOKEN, museumInfo)
    const museumData = getMuseum.data.allVisitaLaExposicions

    return{
        props: {
            curatorsBioData,
            museumData
        }
    }
}

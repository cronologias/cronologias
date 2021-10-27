import { getApiRes } from '../../services/callApi'
import ModalDialog from '../../components/modal'

function viewGalery({ dataView }) {
  console.log(dataView.obrasDeLaAutora)
  return (
    <>
      <ModalDialog images={dataView.obrasDeLaAutora.id}/>
    </>
  )
}

export default viewGalery

export async function getStaticPaths() {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  const bodyView =`query Myquery {allTarjetaAutoras {{id imagenDeLaObraDeLaArtista}}}`
  const getView = await getApiRes(URl,TOKEN, bodyView);
  const dataView = getView.data.allTarjetaAutoras;

  const paths = dataView.map(obras => {
    return {
      params : { id:`${obras.id}`}
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ( { params } ) {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  const bodyView =`query Myquery {allTarjetaAutoras(filter: {id: {eq: ${params.id}}}) {{id imagenDeLaObraDeLaArtista}}}`
  const getView = await getApiRes(URl,TOKEN, bodyView);
  const dataView = getView.data.allTarjetaAutoras[0];
  console.log('viey',dataView)
  return {
    props: {
      dataView
    }
  }
}
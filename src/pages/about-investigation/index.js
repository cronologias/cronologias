import {getApiRes} from '../../services/callApi'
import AboutInvestigation from '../../components/aboutInvestigation'

function InvestigationContainer({ investigationData, museumData }) {
    return (
        <>
            <AboutInvestigation investigationData={investigationData} museumData={museumData} />
        </>
    )
}
export default InvestigationContainer


export async function getStaticProps () {
    const URl= process.env.NEXT_URL;
    const TOKEN= process.env.NEXT_TOKEN;
    const bodyInvestigation ='query MyQuery {sobreLaInvestigacion {tituloDeLaInvestigacion cuerpoDeLaInvestigacion}}'
    const getInvestigation = await getApiRes(URl,TOKEN, bodyInvestigation)
    const investigationData = getInvestigation
    const museumInfo ='query MyQuery {allVisitaLaExposicions {id tituloDeLaTarjeta}}'
    const getMuseum = await getApiRes(URl,TOKEN, museumInfo)
    const museumData = getMuseum.data.allVisitaLaExposicions
    return{
        props: {
            investigationData,
            museumData
        }
    }
}





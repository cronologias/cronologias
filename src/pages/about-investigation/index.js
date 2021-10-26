import {getApiRes} from '../../services/callApi'
import AboutInvestigation from '../../components/aboutInvestigation'

function InvestigationContainer({ investigationData }) {
    return (
        <>
            <AboutInvestigation investigationData={investigationData}/>
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
    return{
        props: {
            investigationData
        }
    }
}




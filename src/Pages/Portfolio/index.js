import Header from '../../Components/Header';
import HeaderStockInfoTable from '../../Components/HeaderStockInfoTable';
import PageTitle from '../../Components/PageTitle';
import RowsStockInfoTable from '../../Components/RowsStockInfoTable';
import './styles.css'

export default function Portfolio(){
    // Esta información la recogeremos más adelante de bbdd.
    let dummyData = [
        {"id":1,"title":"Adobe Inc. (ADBE)","portfolio":"14.29", "lastAddedStockDate": "12/01/2022"},
        {"id":2,"title":"Electronic Arts Inc. (EA)","portfolio":"8.79", "lastAddedStockDate": "22/01/2021"},
        {"id":3,"title":"International Consolidated Airlines Group S.A. (IAG.MC)","portfolio":"30", "lastAddedStockDate": "19/10/2021"},
        {"id":4,"title":"Meta Platforms, Inc. (META)","portfolio":"24.70", "lastAddedStockDate": "25/04/2022"},
        {"id":5,"title":"Micron Technology, Inc. (MU)","portfolio":"10.49", "lastAddedStockDate": "09/03/2022"},
        {"id":6,"title":"TransUnion (TRU)","portfolio":"13.06", "lastAddedStockDate": "19/07/2022"},
        {"id":7,"title":"Starbucks Corporation (SBUX)","portfolio":"11.70", "lastAddedStockDate": "06/05/2022"},
        {"id":8,"title":"Visa Inc. (V)","portfolio":"11.31", "lastAddedStockDate": "12/11/2021"}
    ]
    console.log(dummyData)
    return (
        <div className="App-background">
            <Header></Header>
            <PageTitle title="Portfolio"></PageTitle>
            <table class="container">
	            <HeaderStockInfoTable></HeaderStockInfoTable>
                <RowsStockInfoTable stocksInfo={dummyData}></RowsStockInfoTable>
            </table>
        </div>
    );
}


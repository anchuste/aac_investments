import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import { getTrackrecord } from '../../Services/trackrecord.service';
import './styles.css'
import { TrackrecordInfoTable } from '../../Components/TrackrecordInfoTable';
import PulseLoader from "react-spinners/PulseLoader";

export default function TrackRecord(){

    let trackrecord = [];
    const [trackrecordInfoRecovered, setTrackrecordInfoRecovered] = useState([]);
    const [showLoading, setshowLoading] = useState(false);

    const CSSProperties = {
        display: "block",
        margin: "0 auto",
        marginTop: "1em",
    };

    useEffect(() => {

        async function fetchData() {

            console.log('TrackRecord() - Use effect')
            setshowLoading(true);

            try {
                trackrecord = await getTrackrecord();
                setTrackrecordInfoRecovered(trackrecord.response);
            }
            catch(err) {
                console.error('TrackRecord() - catched exception: ', err)
            }
            finally {
                setshowLoading(false);
                console.log('TrackRecord() - Use effect final: ', trackrecord)
            }
            
            
            
            
            
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state



    return (
        <div className="App-background">
            <Header></Header>
            <PageTitle title="Track record"></PageTitle>
            <table className="container">
                { 
                    undefined != trackrecordInfoRecovered && 
                    trackrecordInfoRecovered.length > 0 && 
                    <TrackrecordInfoTable trackrecordInfo={trackrecordInfoRecovered}></TrackrecordInfoTable>
                }
            </table>
            <PulseLoader
                color={"#3CC16A"}
                loading={showLoading}
                size={25}
                cssOverride={CSSProperties}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}
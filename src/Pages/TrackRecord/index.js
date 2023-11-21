import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import { getTrackrecord } from '../../Services/trackrecord.service';
import './styles.css'
import { TrackrecordInfoTable } from '../../Components/TrackrecordInfoTable';
import Navbar from '../../Components/Navbar';
import PulseLoader from "react-spinners/PulseLoader";

export default function TrackRecord(){

    let trackrecord = [];
    const [trackrecordInfoRecovered, setTrackrecordInfoRecovered] = useState([]);
    const [showLoading, setshowLoading] = useState(false);
    const [showError, setshowError] = useState(false);

    const CSSProperties = {
        display: "block",
        margin: "0 auto",
        marginTop: "1em",
    };

    useEffect(() => {

        async function fetchData() {

            //console.log('TrackRecord() - Use effect')
            setshowLoading(true);

            try {
                trackrecord = await getTrackrecord();
                console.log('TrackRecord() - trackrecord: ', trackrecord)
                setTrackrecordInfoRecovered(trackrecord);
            }
            catch(err) {
                setshowError(true);
                console.error('TrackRecord() - catched exception: ', err)
            }
            finally {
                //console.log('TrackRecord() - Use effect finally')
                setshowLoading(false);
            }
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state

    return (
        <div className="App-background">
            <Navbar currentPage={"trackrecord"}></Navbar>
            <Header></Header>
            <PageTitle title="Track record"></PageTitle>

            { undefined != trackrecordInfoRecovered && trackrecordInfoRecovered.length > 0 && 
                <table className="container">
                    <TrackrecordInfoTable trackrecordInfo={trackrecordInfoRecovered}></TrackrecordInfoTable>
                </table>
            }            
            <div className="error-message">
                { 
                    showError && 
                    <p>There was an error recovering the track record. Please try again later.</p>
                }
            </div>
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
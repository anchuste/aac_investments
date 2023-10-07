import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import { getTrackrecord } from '../../Services/trackrecord.service';
import './styles.css'

export default function TrackRecord(){

    let trackrecord = [];

    useEffect(() => {

        async function fetchData() {

            console.log('TrackRecord() - Use effect')
            //setshowLoading(true);

            try {
                trackrecord = await getTrackrecord();
                
            }
            catch(err) {
                console.error('TrackRecord() - catched exception: ', err)
            }
            finally {
                
            }
            
            
            //setPortfolioRecovered(portfolio.response);
            //setshowLoading(false);
            console.log('TrackRecord() - Use effect final: ', trackrecord)
            
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state



    return (
        <div className="App-background">
            <Header></Header>
            <PageTitle title="Track record"></PageTitle>
          
        </div>
    );
}
import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import {RowsStockInfoTable} from '../../Components/RowsStockInfoTable';
import { getPortfolio } from '../../Services/portfolio.service';
import PulseLoader from "react-spinners/PulseLoader";
import './styles.css'

export default function Portfolio(){

    console.log("Portfolio() - Se renderiza el componente Portfolio");
    const [portfolioRecovered, setPortfolioRecovered] = useState([]);
    const [showLoading, setshowLoading] = useState(false);
    //console.log("Portfolio() - portfolioRecovered: ", portfolioRecovered);
    let portfolio = [];

    const CSSProperties = {
        display: "block",
        margin: "0 auto",
        marginTop: "1em",
    };
    

    useEffect(() => {
        async function fetchData() {

            console.log('Portfolio() - Use effect')
            setshowLoading(true);

            try {
                portfolio = await getPortfolio();
                
            }
            catch(err) {
                console.error('Portfolio() - catched exception: ', err)
            }
            finally {
                
            }
            
            
            //sortPortfolio('portfolioPercentage', portfolio.response, sortDirection)
            setPortfolioRecovered(portfolio.response);
            setshowLoading(false);
            console.log('Portfolio() - Use effect final: ', portfolio)
            
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state
      
    return (
        <div className="App-background">
            <Header></Header>
            <PageTitle title="Portfolio"></PageTitle>
            <table className="container">
                { undefined != portfolioRecovered && portfolioRecovered.length > 0 && <RowsStockInfoTable stocksInfo={portfolioRecovered}></RowsStockInfoTable>}
            </table>
            <PulseLoader
                color={"#3CC16A"}
                loading={showLoading}
                size={25}
                cssOverride={CSSProperties}
                aria-label="Loading Spinner"
                data-testid="loader"
                title='Hola'
            />
        </div>
    );
}


import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import {RowsStockInfoTable} from '../../Components/RowsStockInfoTable';
import Navbar from '../../Components/Navbar';
import { getPortfolio } from '../../Services/portfolio.service';
import PulseLoader from "react-spinners/PulseLoader";
import './styles.css'

export default function Portfolio(){

    //console.log("Portfolio() - Se renderiza el componente Portfolio");
    const [portfolioRecovered, setPortfolioRecovered] = useState([]);
    const [showLoading, setshowLoading] = useState(false);
    const [showError, setshowError] = useState(false);
    //console.log("Portfolio() - portfolioRecovered: ", portfolioRecovered);
    let portfolio = [];

    const CSSProperties = {
        display: "block",
        margin: "0 auto",
        marginTop: "1em",
    };
    

    useEffect(() => {
        async function fetchData() {

            //console.log('Portfolio() - Use effect')
            setshowLoading(true);

            try {
                portfolio = await getPortfolio();
                //console.log('Portfolio() - portfolio: ', portfolio)
            }
            catch(err) {
                setshowError(true);
                console.error('Portfolio() - catched exception: ', err)
            }
            finally {
                setshowLoading(false);
            }
            
            
            //sortPortfolio('portfolioPercentage', portfolio.response, sortDirection)
            setPortfolioRecovered(portfolio);
            
            //console.log('Portfolio() - Use effect final: ', portfolio)
            
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state
      
    return (
        <div className="App-background">
            <Navbar currentPage={"portfolio"}></Navbar>
            <Header></Header>
            <PageTitle title="Portfolio"></PageTitle>
            {
                undefined != portfolioRecovered && portfolioRecovered.length > 0 &&
                <table className="container">
                    <RowsStockInfoTable stocksInfo={portfolioRecovered}></RowsStockInfoTable>
                </table>
            }
            {
                showError &&
                <div className="error-message">
                    <p>There was an error recovering the portfolio. Please try again later</p>
                </div>
            }
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


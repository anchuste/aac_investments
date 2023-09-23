import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import {RowsStockInfoTable} from '../../Components/RowsStockInfoTable';
import { getPortfolio } from '../../Services/portfolio.service';
import './styles.css'

export default function Portfolio(){

    console.log("Portfolio() - Se renderiza el componente Portfolio");
    const [portfolioRecovered, setPortfolioRecovered] = useState([]);
    //console.log("Portfolio() - portfolioRecovered: ", portfolioRecovered);
    let portfolio = [];
    

    useEffect(() => {
        async function fetchData() {

            console.log('Portfolio() - Use effect')

            portfolio = await getPortfolio();
            //sortPortfolio('portfolioPercentage', portfolio.response, sortDirection)
            setPortfolioRecovered(portfolio.response);
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
        </div>
    );
}


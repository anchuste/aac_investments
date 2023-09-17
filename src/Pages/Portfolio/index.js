import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import HeaderStockInfoTable from '../../Components/HeaderStockInfoTable';
import PageTitle from '../../Components/PageTitle';
import RowsStockInfoTable from '../../Components/RowsStockInfoTable';
import { getPortfolio } from '../../Services/portfolio.service';
import './styles.css'

export default function Portfolio(){

    console.log("Se renderiza el componente Portfolio");
    const [portfolioRecovered, setPortfolioRecovered] = useState([]);

    useEffect(() => {
        async function fetchData() {

            let portfolio = [];
            let sortDirection = 'desc';
            portfolio = await getPortfolio();

            console.log('portfolio recuperado: ', portfolio);

            
            portfolio.response.sort((a, b) => {
                return sortDirection === "asc" ? a[15] - b[15] : b[15] - a[15];
            });

            console.log('portfolio recuperado ordenado: ', portfolio);

            setPortfolioRecovered(portfolio);
            
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state
      
    return (
        <div className="App-background">
            <Header></Header>
            <PageTitle title="Portfolio"></PageTitle>
            <table className="container">
                <RowsStockInfoTable stocksInfo={portfolioRecovered}></RowsStockInfoTable>
            </table>
        </div>
    );
}


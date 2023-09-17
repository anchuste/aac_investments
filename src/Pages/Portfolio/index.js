import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import RowsStockInfoTable from '../../Components/RowsStockInfoTable';
import { getPortfolio } from '../../Services/portfolio.service';
import './styles.css'

export default function Portfolio(){

    console.log("Se renderiza el componente Portfolio");
    const [portfolioRecovered, setPortfolioRecovered] = useState([]);

    function sortPortfolio(fieldToSort, array, sortDirection){

        let field = "";
        
        console.log('field to sort:' , fieldToSort);


        var date = new Date("05/31/2011");
        console.log('la fecha es: ', date);
        
        array.sort((a, b) => {
            if (fieldToSort === 'portfolioPercentage'){
                field = 15;
                return sortDirection === "asc" ? a[field] - b[field] : b[field] - a[field];
            }else if (fieldToSort === 'date'){

                field = 1;
                let dayA = a[field].substring(0,2)
                let monthA = a[field].substring(3,5)
                let yearA = a[field].substring(6,10)
                yearA = 20 + yearA;

                let dayB = b[field].substring(0,2)
                let monthB = b[field].substring(3,5)
                let yearB = b[field].substring(6,10)
                yearB = 20 + yearB;

                let dateA = new Date(yearA, monthA - 1, dayA);
                let dateB = new Date(yearB, monthB - 1, dayB);

                return sortDirection === "asc" ? dateA-dateB : dateB-dateA;
            }
        });

        //return array;
    }

    useEffect(() => {
        async function fetchData() {

            let portfolio = [];
            let sortDirection = 'desc';
            portfolio = await getPortfolio();
            sortPortfolio('date', portfolio.response, sortDirection)
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


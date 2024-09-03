import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import {RowsStockInfoTable} from '../../Components/RowsStockInfoTable';
import Navbar from '../../Components/Navbar';
import { getPortfolio } from '../../Services/portfolio.service';
import PulseLoader from "react-spinners/PulseLoader";
import './portfolio_styles.css'

export default function Portfolio(){

    //console.log("Portfolio() - Se renderiza el componente Portfolio");
    const [portfolioMap, setPortfolioMap] = useState(new Map());
    const [portfolioRecovered, setPortfolioRecovered] = useState([]);
    const [showLoading, setshowLoading] = useState(false);
    const [showError, setshowError] = useState(false);

    // Aquí guardamos toda la info de bbdd con respecto al portfolio
    let portfolio = [];
    // Creamos un array para guardar los elementos de los simbolos únicos. 
    // Por ejemplo, si tenemos 3 elementos de TEF, guardamos un único elemento de TEF.
    let portfolioSimbolos = [];

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
            
            // Construimos mapa en el que la key es el simbolo y el valor es un array con los elementos de ese simbolo.
            const portfolioMap = new Map();

            for (const element of portfolio) {
                if (portfolioMap.has(element.simbolo)){
                    portfolioMap.get(element.simbolo).push(element);
                }else{
                    portfolioMap.set(element.simbolo, new Array(element));
                    // Aprovechando que hemos construido el map, guardamos los elementos de los simbolos únicos en un array.
                    portfolioSimbolos.push(element);
                }
            }

            setPortfolioMap(portfolioMap);
            setPortfolioRecovered(portfolioSimbolos);
            
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state
      
    return (
        <>
            <Navbar currentPage={"portfolio"}></Navbar>
            <div>
            <Header></Header>
            <PageTitle title="Portfolio"></PageTitle>
            {
                undefined != portfolioRecovered && portfolioRecovered.length > 0 &&
                <table className="container">
                    <RowsStockInfoTable stocksInfo={portfolioRecovered} allStocksInfo= {portfolioMap}></RowsStockInfoTable>
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
        </>
    );
}


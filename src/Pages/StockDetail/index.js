import { useEffect } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import { getStockPrice } from '../../Services/stock.service';
import { useState } from 'react';
// Importar css
import './style.css';

export default function StockDetail({ stockDetail }) {

    const [stockPrice, setStockPrice] = useState(0);
    const [stocksDetailsArray, setStocksDetailsArray] = useState([]);
    const [stock, setStock] = useState({});
    
    //console.log("StockDetail() - stockDetail: ", {stockDetail});

    useEffect(() => {

        // Recuperamos el detalle del stock de localStorage
        let stockDetailRecovered = localStorage.getItem('stockDetail');

        if (undefined != stockDetailRecovered && null != stockDetailRecovered){
            stockDetailRecovered = JSON.parse(stockDetailRecovered);
            setStock(stockDetailRecovered.stock); 
        }

        let stockDetailArray = localStorage.getItem('stockDetailArray');

        if (undefined != stockDetailArray && null != stockDetailArray){
            stockDetailArray = JSON.parse(stockDetailArray);
            setStocksDetailsArray(stockDetailArray);
        }

        // Lanzamos una petición a la API para recuperar el precio del stock
        getStockPrice(stockDetailRecovered.stock.simbolo).then((response) => {
            //console.log("StockDetail().getStockPrice - response: ", response);
            setStockPrice(response.price);
        }).catch((error) => {
            console.log("StockDetail().getStockPrice - error: ", error);
        });
    }, []);

    return (
        <div className="App-background">
          <Header></Header>
          <PageTitle title="Stock Detail"></PageTitle>
          <p className='stock_title'>{stock.simbolo} - {stock.titulo_valor}</p>
          <p className='stock_title'>% of Portfolio: {stock.peso_cartera}</p>
          <p className='stock_title'>Current price: ${Number(stockPrice).toFixed(2)} </p>
            <div>
                
        <table className="container">
            <tbody >
                <tr>
                    <td className='stock_values_table'>Added date</td>
                    <td className='stock_values_table'>Reported Price</td>
                    <td className='stock_values_table'>+/- Rep. Price</td>
                </tr>
            {undefined !== stocksDetailsArray && stocksDetailsArray.length > 0 && stocksDetailsArray.map((stock) => {
                    const list = (
                    <tr key={stock.id_stock_portfolio}>
                        <td>{stock.fecha_compra}</td>
                        <td>${stock.cotizacion_inicial} </td>
                        { (stockPrice - stock.cotizacion_inicial) > 0 &&            
                            <td className='profit'>+ {Math.floor(((stockPrice - stock.cotizacion_inicial)/stock.cotizacion_inicial)*100)}%</td>
                        }
                        { (stockPrice - stock.cotizacion_inicial) < 0 && 
                            <td className='loss'>-{Math.round(((stockPrice - stock.cotizacion_inicial)/stock.cotizacion_inicial)*100)}%</td>
                        }
                        
                    </tr>
                    );
                    return list;
                })}
            </tbody>
        </table>
            </div>
        </div>
    );
}

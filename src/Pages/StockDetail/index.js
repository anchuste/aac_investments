import { useEffect } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import { getStockPrice } from '../../Services/stock.service';
import { useState } from 'react';
// Importar css
import './style.css';

export default function StockDetail({ stockDetail }) {

    const [stockPrice, setStockPrice] = useState(0);
    const [stock, setStock] = useState({});
    
    console.log("StockDetail() - stockDetail: ", {stockDetail});

    useEffect(() => {

        // Recuperamos el detalle del stock de localStorage
        let stockDetailRecovered = localStorage.getItem('stockDetail');

        if (undefined != stockDetailRecovered && null != stockDetailRecovered){
            stockDetailRecovered = JSON.parse(stockDetailRecovered);
            setStock(stockDetailRecovered.stock); 
        }

        console.log("StockDetail() - stockDetailRecovered: ", stockDetailRecovered);
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
            <div>
        <table className="container">
            <tbody >
            
                <tr>
                    <td className='stock_values_table'>Added date</td>
                    <td>{stock.fecha_compra}</td>
                </tr>
                <tr>
                    <td className='stock_values_table'>Portfolio %</td>
                    <td>{stock.peso_cartera}</td>
                </tr>
                <tr>
                    <td className='stock_values_table'>Reported Price</td>
                    <td>{stock.cotizacion_inicial}</td>
                </tr>
                <tr>
                    <td className='stock_values_table'>Current price</td>
                    <td>{Number(stockPrice).toFixed(2)}</td>
                </tr>
                { (stockPrice - stock.cotizacion_inicial) > 0 && 
                    <tr>
                        <td className='profit'>Current operation result: Profit</td>
                        <td className='profit'>{Math.floor(((stockPrice - stock.cotizacion_inicial)/stock.cotizacion_inicial)*100)}%</td>
                    </tr>
                }
                { (stockPrice - stock.cotizacion_inicial) < 0 && 
                    <tr>
                        <td className='loss'>Current operation result: Loss</td>
                        <td className='loss'>{Math.round(((stockPrice - stock.cotizacion_inicial)/stock.cotizacion_inicial)*100)}%</td>
                    </tr>
                }
            </tbody>
        </table>
            </div>
        </div>
    );
}

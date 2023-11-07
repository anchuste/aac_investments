import { useEffect } from 'react';
import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import { getStockPrice } from '../../Services/stock.service';
import { useState } from 'react';

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
            <div>
                <p>{stock.simbolo} - {stock.titulo_valor}</p>
                <p>Portfolio %: {stock.peso_cartera}</p>
                <p>Reported price: {stock.cotizacion_inicial}</p>
                <p>Current price: {stockPrice}</p>
                { (stockPrice - stock.cotizacion_inicial) > 0 && <p style={{ color: 'green'}}>Profit: {Math.round(((stockPrice - stock.cotizacion_inicial)/stock.cotizacion_inicial)*100)}%</p> }
                { (stockPrice - stock.cotizacion_inicial) < 0 && <p style={{ color: 'red'}}>Loss: {Math.round(((stockPrice - stock.cotizacion_inicial)/stock.cotizacion_inicial)*100)}%</p> }
                <p>Added date: {stock.fecha_compra}</p>
                
                


            </div>
        </div>
    );
}

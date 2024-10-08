import { useEffect, useState } from 'react';
import { Route} from "wouter";
import { Link } from "wouter";
import StockDetail from '../../Pages/StockDetail';
import './styles.css';
export const RowsStockInfoTable = ({ stocksInfo, allStocksInfo }) => {

    console.log("Se renderiza el componente RowsStockInfoTable")

    // Mapa en el que la key es el simbolo y el valor es un array con los elementos de ese simbolo.
    // Para un valor puede que tengamos 3 paquetes de acciones. Starbuck, por ejemplo, puede tener 3 paquetes de acciones.
    const [stocksInfoReceivedMap, setstocksInfoReceivedMap] = useState(new Map());
    const [stocksInfoReceived, setstocksInfoReceived] = useState([]);
    const [sortDirection, setSortDirection] = useState(['desc']);
    const [fieldToSort, setfieldToSort] = useState(['portfolioPercentage']);

    useEffect(() => {
        setstocksInfoReceived(stocksInfo);
        setstocksInfoReceivedMap(allStocksInfo);
        //console.log("Use effect - RowsStockInfoTable final: ", allStocksInfo);
        sortPortfolio('portfolioPercentage', 'asc');
    }, []);

    const sortPortfolio = (fieldToSort, sortDirection) =>{

        //console.log('sortPortfolio: ', stocksInfo);

        let array = [];
        let field = "";
        let changedDirection = "";

        if (undefined === stocksInfoReceived ||stocksInfoReceived.length <= 0){
            array = [...stocksInfo];
        }else{
            array = [...stocksInfoReceived];
        }

        if (sortDirection === 'desc'){
            changedDirection = 'asc';
            setSortDirection('asc');
        }else{
            changedDirection = 'desc';
            setSortDirection('desc');
        }

        setfieldToSort(fieldToSort);



        //console.log('field to sort:' , fieldToSort);
        
        //console.log('sortDirection: ', changedDirection);
        
        
        array.sort((a, b) => {
            if (fieldToSort === 'portfolioPercentage'){
                field = 'peso_cartera';
                return changedDirection === "asc" ? a[field] - b[field] : b[field] - a[field];
            }else if (fieldToSort === 'date'){
                field = 'fecha_compra';
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

                return changedDirection === "asc" ? dateA-dateB : dateB-dateA;
            }
        });

        //console.log('¡Va a hacer la actualización del array!')
        //console.log('array: ', array)
        setstocksInfoReceived(array);
    }
    
    //console.log('stocksInfoReceived: ', stocksInfoReceived);

    function goToStockDetail(stockDetail) {
        //console.log('stockDetail: ', stockDetail);
        //console.log('stockDetail stock: ', stockDetail.stock.simbolo);
        let stockDetailArray = stocksInfoReceivedMap.get(stockDetail.stock.simbolo)
        localStorage.setItem('stockDetail', JSON.stringify(stockDetail)); 
        localStorage.setItem('stockDetailArray', JSON.stringify(stockDetailArray));
        return <Route path="/stockDetail" component={StockDetail} />;
    }

 
    return (
        <>
            <thead>
            <tr>
                <th>
                    <button
                        type="button"
                        className="btn_header">
                    Stock
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => sortPortfolio('portfolioPercentage', sortDirection)}              
                        className="btn_header">
                    % of Portfolio
                    {fieldToSort === 'portfolioPercentage' && sortDirection === 'desc' &&  <i className="fa fa-sort-desc" />}
                    {fieldToSort === 'portfolioPercentage' && sortDirection === 'asc' &&  <i className="fa fa-sort-asc" />}
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => sortPortfolio('date', sortDirection)} className="btn_header">
                    Added date
                    {fieldToSort === 'date' && sortDirection === 'desc' &&  <i className="fa fa-sort-desc" />}
                    {fieldToSort === 'date' && sortDirection === 'asc' &&  <i className="fa fa-sort-asc" />}
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
                {undefined !== stocksInfoReceived && stocksInfoReceived.length > 0 && stocksInfoReceived.map((stock) => {
                    const list = (
                    <tr key={stock.id_stock_portfolio}>
                        <td>
                        <Link to='/stockDetail' onClick={() => goToStockDetail({stock})}>{stock.titulo_valor} <i id="icono" className="fa fa-search" style={{marginLeft: "0.25em", color:"#436850"}} /> </Link>
                        
                        </td>
                        <td>{stock['peso_cartera']}</td>
                        <td>{stock.fecha_compra}</td>

                    </tr>
                    );
                    return list;
                })}
            </tbody>
        </>
    );
}
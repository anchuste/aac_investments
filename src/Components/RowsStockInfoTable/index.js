import { useEffect, useState } from 'react';
import { Route} from "wouter";
import { Link } from "wouter";
import StockDetail from '../../Pages/StockDetail';
export const RowsStockInfoTable = ({ stocksInfo }) => {

    console.log("Se renderiza el componente RowsStockInfoTable")

    const [stocksInfoReceived, setstocksInfoReceived] = useState([]);
    const [sortDirection, setSortDirection] = useState(['desc']);
    const [fieldToSort, setfieldToSort] = useState(['portfolioPercentage']);

    useEffect(() => {
        //console.log("Use effect - RowsStockInfoTable");
        setstocksInfoReceived(stocksInfo);
        //console.log("Use effect - RowsStockInfoTable final: ", stocksInfoReceived);
        
        sortPortfolio('portfolioPercentage', 'desc');
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
        localStorage.setItem('stockDetail', JSON.stringify(stockDetail));  
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
                        <Link to='/stockDetail' onClick={() => goToStockDetail({stock})}>{stock.titulo_valor}</Link>
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
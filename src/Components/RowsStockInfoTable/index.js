export default function RowsStockInfoTable(stocksInfo) {

    
    const stocksInfoDestruct = stocksInfo.stocksInfo.response;

    console.log('stocksInfoDestruct: ', stocksInfoDestruct)

    if (undefined == stocksInfoDestruct || stocksInfoDestruct.length === 0){
        return(
            <>
            </>
        )
    }

    function requestSort() {

    }



    //const stocksInfoDestruct = stocksInfo.stocksInfo;
    return (
            <div style={{ textAlign: '-webkit-center'}}>
                <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}              
                            className="btn_header">
                        Stock
                        </button>
                    </th>

                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}              
                            className="btn_header">
                        % of Portfolio
                        <i className="fa fa-sort-desc" />
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}              
                            className="btn_header">
                        Added date
                        </button>
                    </th>
                </tr>
	            </thead>
            <tbody>
            {stocksInfoDestruct.map((stock) => {
                const list = (
                <tr key={stock[0]}>
                    <td>{stock[2]} </td>
                    <td>{stock[15]}</td>
                    <td>{stock[1]}</td>
                </tr>
                );
                return list;
            })}
          </tbody>
          </div>            
    );
}
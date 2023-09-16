export default function RowsStockInfoTable(stocksInfo) {

    
    const stocksInfoDestruct = stocksInfo.stocksInfo.response;

    console.log('stocksInfoDestruct: ', stocksInfoDestruct)

    if (undefined == stocksInfoDestruct || stocksInfoDestruct.length === 0){
        return(
            <>
            </>
        )
    }


    //const stocksInfoDestruct = stocksInfo.stocksInfo;
    return (
            <tbody>
            {stocksInfoDestruct.map((stock) => {
                const list = (
                <tr>
                    <td>{stock[2]} </td>
                    <td>{stock[4]}</td>
                    <td>{stock[1]}</td>
                </tr>
                );
                return list;
            })}
          </tbody>
    );
}
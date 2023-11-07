import AppConstants from '../Constants/AppConstants';
import axios from 'axios';

export const getStockPrice = async (title) => {
  

    const url = `https://twelve-data1.p.rapidapi.com/price?symbol=${title}&format=json&outputsize=30`;
    const options = {
    method: 'GET',
    headers: {
            'X-RapidAPI-Key': '39f28cbe80msh760d6bac8786693p1f7128jsnb9d2dddf9f5f',
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
	    console.log("Resultado: ", result);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }

    /*
    return new Promise((resolve, reject) => {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${title}&apikey=Z3ZQ3X9XQ8Y2O9YH`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                console.log('getStockPrice() - catched exception: ', error);
                reject(error);
            });
    });*/
}
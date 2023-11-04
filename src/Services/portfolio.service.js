
//const getPortfolioURL = 'https://cxmhacvpisple4wedaqgzp6q4e0acrnw.lambda-url.eu-west-1.on.aws';

let portfolioURL = 'https://fragrant-firefly-8be0.albertoanchuste.workers.dev/api/portfolio/getAll';

const getPortfolioURL = new URL(portfolioURL);

export const getPortfolio = () => {

    return new Promise((resolve, reject) => {

        fetch(portfolioURL)
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
                console.log('getPortfolio() - catched exception: ', error);
                reject(error);
            });
    });
}

let portfolioURL = 'https://fragrant-firefly-8be0.project-utils.workers.dev/api/portfolio/getAll';

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
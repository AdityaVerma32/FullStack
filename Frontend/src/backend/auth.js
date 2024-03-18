class Auth {
    async fetchData() {
        try {
            const response = await fetch('/data/get-data', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("DEBUG : response", response); // Log the entire response object

            if (!response.ok) {
                throw new Error(`Failed to fetch data: Status code ${response.status}`);
            }

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Unexpected content type: ' + contentType);
            }

            const jsonData = await response.json();
            console.log("DEBUG : jsonData", jsonData);
            return jsonData;
        } catch (error) {
            console.error('Error fetching data:', error);
            // Optionally handle errors gracefully on the frontend (e.g., display an error message)
        }
    }
}


const authService = new Auth();

export default authService

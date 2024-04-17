


export const createRegistration = async (values: any) => {
    try {
        // Log the JSON object being sent in the request body
        console.log("JSON Object:", JSON.stringify(values));

        const response = await fetch('http://localhost:4000/refugee/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        // Check if the response is successful (status code 2xx)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON data
        const resData = await response.json();

        // Return the response data (if needed)
        return resData;
    } catch (error) {
        // Log the error to the console
        console.error('Error:', error);

        // Return an error message or handle the error as needed
        return "error";
    }
}
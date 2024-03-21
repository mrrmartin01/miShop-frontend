// api for product
export async function fetchData(limit = 10) { // Set a default limit of 4 if not provided
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=5&select=title,price,description,images`, requestOptions); // Include the limit parameter in the URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

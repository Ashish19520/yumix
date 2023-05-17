export const getNews = async (page:number,pageSize:number,currentDate:any) => {
    try {
        const fetchResponse = await fetch(`https://newsapi.org/v2/everything?q=ecommerce&from=${currentDate}&sortBy=publishedAt&apiKey=f8feccdcdf0f48059125b292e69450c9&page=${page}&pageSize=${pageSize}&lang=en`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                // "Content-Type": "application/json",
            },
        });
        const response = await fetchResponse.json();
        return response;
    } catch (error) {
        return error;
    }
};

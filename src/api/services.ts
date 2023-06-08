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
let baseUrl ="https://sellercentral.amazon.com/rcpublic/"

export const fbaOne = async (asinNO:any) => {
    try {
        const fetchResponse = await fetch(baseUrl+`productmatch?searchKey=${asinNO}&countryCode=US&locale=en-US`, {
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
export const fbaTwo = async (asinNO:any) => {
    try {
        const fetchResponse = await fetch(baseUrl+`getadditionalpronductinfo?countryCode=US&asin=${asinNO}&fnsku=&searchType=GENERAL&locale=en-US`, {
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
export const fbaThree = async (asinNO:any) => {
    try {
        const fetchResponse = await fetch(baseUrl+`getprograms?countryCode=US&asin=${asinNO}&locale=en-US`, {
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
export const fbaFour = async (asinNO:any, data:any) => {
    try {
        const fetchResponse = await fetch(baseUrl+`getfees?countryCode=US&locale=en-US`,{
            method: "POST",
            headers: {
                // Authorization: "Bearer " + token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const response = await fetchResponse.json();
        return response;
    } catch (error) {
        return error;
    }
};


export const moviesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
    },
};

export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
};

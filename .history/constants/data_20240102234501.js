export const SPORTS_API = 'https://newsdata.io/api/1/news?country=vi&category=sports&apikey=pub_35731380e0a51b24cc5e9e0c6dc8e7d1b73b8';
export const TECHNOLOGY_API = 'https://newsdata.io/api/1/news?country=vi&category=technology&apikey=pub_35731380e0a51b24cc5e9e0c6dc8e7d1b73b8';
export const WORLD_API = 'https://newsdata.io/api/1/news?country=vi&category=world&apikey=pub_35731380e0a51b24cc5e9e0c6dc8e7d1b73b8';

export const fetchNewsByCategory = async (category) => {
    let apiUrl = '';

    // Xác định apiUrl dựa trên danh mục
    if (category === 'Thế giới') {
        apiUrl = 'https://newsdata.io/api/1/news?country=vi&category=world&apikey=pub_35731380e0a51b24cc5e9e0c6dc8e7d1b73b8';
    } else if (category === 'Tất cả') {
        apiUrl = 'API_TUONG_UNG_CHO_TAT_CA_DANH_MUC';
    } else {
        apiUrl = 'API_TUONG_UNG_CHO_DANH_MUC_KHAC';
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    }
};

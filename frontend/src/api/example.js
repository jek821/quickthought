import axios from 'axios';

const API_URL = import.meta.env.VUE_APP_API_BASE_URL; // Base URL from environment variables

const incrementScore = async (userId, username) => {
    try {
        const response = await axios.post(`${API_URL}/increment-score`, {
            userId,
            username,
        });
        return response.data;
    } catch (error) {
        console.error('Error incrementing score:', error);
        throw error;
    }
};

export default {
    incrementScore,
};
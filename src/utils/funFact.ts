import axios from 'axios';

export async function getFunFact(num: number): Promise<string> {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}`);
        return response.data;
    } catch (error) {
        return `No fun fact available for ${num}.`;
    }
}
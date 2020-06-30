import axios from 'axios';
import { getJwt } from './index';

export const logoff = async props => {
    const LOGOUT = '/api/v1/logout'

    try {
        await axios.post(LOGOUT, { _id: getJwt }, { headers: { "Authorization": `Bearer: ${getJwt()}` } })
        window.location.href = "https://real-fake-website.xyz";
    } catch (error) {
        // Deal with error
        console.log(error)
    }
};

import { get } from "axios";
import { BASE_URL } from "../constants";


export const getInfo = (dispatch) => get(`${BASE_URL}/info.json`).then(res => {
    dispatch({ type: 'POPULATE_INFO', payload: res.data })
})
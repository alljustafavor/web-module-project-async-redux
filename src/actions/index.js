import axios from "axios";

export const GET_ZIP_PENDING = 'GET_ZIP_PENDING'
export const GET_ZIP_REJECTED = 'GET_ZIP_REJECTED'
export const GET_ZIP_SUCCESS = 'GET_ZIP_SUCCESS'

export const fetchZipInfo = (zip) => dispatch => {
    dispatch(getZipPending(true))
    axios.get(`https://api.zippopotam.us/us/${zip}`)
        .then((res => {
            dispatch(getZipSuccess(res.data))
        })).then(err => {
            dispatch(getZipRejected(err.message))
        }).finally(() => {
            dispatch(getZipPending(false))
        })
}

export const getZipPending = loading => ({
    type: GET_ZIP_PENDING,
    payload: loading
})

export const getZipRejected = error => ({
    type: GET_ZIP_REJECTED,
    payload: error
})

export const getZipSuccess = zipInfo => ({
    type: GET_ZIP_SUCCESS,
    payload: zipInfo
})
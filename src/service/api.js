import axios, { Axios } from "axios"
import { BASE_URL, configHeaders } from "./config"

export let getListMovie = () => { 
    return axios ({
        url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        method: "GET",
        headers: configHeaders(),
    })
}
export let getDetailMovie = (id) => { 
    return axios ({
        url: `${BASE_URL}/QuanLyPhim/LayThongTinPhim?maPhim=${id}`,
        method: "GET",
        headers: configHeaders(),
    })
}
export let getMovieByTheater = () => {
    return axios ({
        url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
        method: "GET",
        headers: configHeaders(),
    })
}
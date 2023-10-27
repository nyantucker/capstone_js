import axios, { Axios } from "axios"
import { BASE_URL, configHeaders } from "./config"

export let getListMovie = () => { 
    return axios ({
        url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`,
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
        url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02`,
        method: "GET",
        headers: configHeaders(),
    })
}
export let getMovieShowTime = (id) => { 
    return axios ({
        url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
        method: "GET",
        headers: configHeaders(),
    })
 }
export let getDsPhongVe = (maLichChieu) => {
    return axios ({
        url: `${BASE_URL}//QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
        headers: configHeaders(),
    })
}
export let getDataSlider = () => { 
    return axios ({
        url: `${BASE_URL}/QuanLyPhim/LayDanhSachBanner`,
        method: "GET",
        headers: configHeaders(),
    })
 }
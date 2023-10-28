import axios, { Axios } from "axios"
import {BASE_URL, configHeaders, TOKEN_CYBER} from './config';
import { userLocalStorage } from "./localStorage";

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
export let getUserInfo = (token) => { 
    return axios ({
        url: `${BASE_URL}/QuanLyNguoiDung/ThongTinTaiKhoan`,
        method: "POST",
        headers: {
            Authorization: 'Bearer ' + token,
            TokenCybersoft: TOKEN_CYBER
        },
        })
 }

 export let bookingTicket = (danhSachVe) => { 
    return axios ({
        url: `${BASE_URL}//QuanLyDatVe/DatVe`,
        method: "POST",
        headers: {
            TokenCybersoft: TOKEN_CYBER,
            Authorization: 'Bearer ' + userLocalStorage.get()?.accessToken,
        },
        })
  }
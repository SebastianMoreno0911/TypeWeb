import axios from "axios";

const api = axios.create({
    baseURL: "https://fleet-advantage-ap1-v2-staging.azurewebsites.net", // Cambia por la URL de tu API
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Obtiene el token del almacenamiento local
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: unknown) => {
        return Promise.reject(error);
    }
);

export default api;

import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL; // ganti sesuai API kamu

// 🧠 Buat instance axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🪄 Interceptor untuk otomatis tambah token (jika ada)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ⚙️ Interceptor untuk tangani error global
api.interceptors.response.use(
  (response) => response.data, // langsung return data saja
  (error) => {
    console.error("API Error:", error.response?.data || error.message);

    const message =
      error.response?.data?.message ||
      error.message ||
      "Terjadi kesalahan jaringan";

    return Promise.reject(new Error(message));
  }
);

// 🚀 Fungsi helper
export async function send(
  endpoint,
  method = "GET",
  data = null,
  customHeaders = {}
) {
  const config = {
    method,
    url: endpoint,
    headers: customHeaders,
    data,
  };

  return api(config);
}

export default send;

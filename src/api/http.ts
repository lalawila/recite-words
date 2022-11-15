import axios from "axios"
import config from "@/config/http"

const http = axios.create(config)

export default http

import { message as msg } from 'antd'
import axios, { AxiosError, AxiosInstance } from 'axios'

import { BASE_URL } from 'src/consts'

class Connection {
  public axiosConfig: AxiosInstance
  private static _instance: Connection = new Connection()

  public constructor() {
    if (!Connection._instance) {
      Connection._instance = this
    }

    this.axiosConfig = axios.create({
      baseURL: BASE_URL
    })
    this.axiosConfig.interceptors.request.use(function (config) {
      const token = localStorage.getItem('token')
      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`
        }
        config.headers = headers
      }
      return config
    })

    this.axiosConfig.interceptors.response.use(
      (response) => response.data,
      (err: AxiosError) => {
        const { response } = err
        if (response?.status === 401) {
          localStorage.removeItem('token')
        }
        return Promise.reject(response)
      }
    )
  }

  public getInstance(): Connection {
    return Connection._instance
  }

  // Metodos
  async login(email: string, password: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const data: any = await this.post('/login', {
          username: email,
          password
        })
        localStorage.setItem('token', data.token)
        resolve({ ...data })
      } catch (error: any) {
        const { message } = error.data
        msg.error(message)
        reject(message)
      }
    })
  }

  get(url: string) {
    return new Promise((resolve, reject) => {
      this.axiosConfig
        .get(url)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => reject(error))
    })
  }

  post(url: string, data: object) {
    return new Promise<any>((resolve, reject) => {
      this.axiosConfig
        .post(url, data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error?.data)
        })
    })
  }

  morePromise(promises: any) {
    return Promise.all([...promises])
  }
}

export default new Connection()

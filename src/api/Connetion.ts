import { message } from 'antd'
import axios, { AxiosInstance } from 'axios'

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
      (error) => {
        const { status } = error.response
        if (status !== 401) {
          message.error(
            'Tenemos un problema con el servidor, intenta mas tarde'
          )
          return
        }
        return { ...error.response.data, status }
      }
    )
  }

  public getInstance(): Connection {
    return Connection._instance
  }

  // Metodos
  async login(email: string, password: string): Promise<any> {
    return new Promise(async (resolve) => {
      try {
        const data: any = await this.post('/login', {
          username: email,
          password
        })
        localStorage.setItem('token', data.token)
        resolve({ ...data })
      } catch (error) {
        console.error(error)
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
        .catch((error) => reject(error))
    })
  }

  morePromise(promises: any) {
    return Promise.all([...promises])
  }
}

export default new Connection()

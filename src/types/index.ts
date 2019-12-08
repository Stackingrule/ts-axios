export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any

}


export type Method = 'get' | 'GET'
| 'put' | 'PUT'
| 'head' | 'HEAD'
| 'delete' | 'DELETE'
| 'post' | 'POST'
| 'options' | 'OPTIONS'
| 'patch' | 'PATCH'


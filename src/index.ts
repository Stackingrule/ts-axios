import {AxiosRequestConfig} from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequst } from './helpers/data'

function axios(config: AxiosRequestConfig) {

  xhr(config)

}

function transformURL(config: AxiosRequestConfig): string {
  const {url, params} = config
  return buildURL(url, params)
}

function transformRequstData(config: AxiosRequestConfig): any {
  return transformRequst(config.data)
}

export default axios

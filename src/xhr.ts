import {AxiosRequestConfig} from './types'

export default function xhr(config: AxiosRequestConfig) : void {
  const {data = null, url, method = 'get'} = config

  const requst = new XMLHttpRequest()

  requst.open(method.toUpperCase(), url, true)

  requst.send()

}

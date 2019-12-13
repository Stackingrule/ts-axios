import { isObject, isPlainObject } from './util'

export function transformRequst(data: any) : any {

  if (isPlainObject(data)) {
    return JSON.stringify(data);
  }
  return data

}

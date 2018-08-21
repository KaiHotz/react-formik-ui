export const get = (pObject, pKeys, defaultVal = null) => {
  const keys = Array.isArray(pKeys) ? pKeys : pKeys.replace(/(\[(\d)\])/g, '.$2').split('.')
  const object = pObject[keys[0]]

  if (object && keys.length > 1) {
    return get(object, keys.slice(1), defaultVal)
  }

  return object === undefined ? defaultVal : object
}

export default {
  get,
}

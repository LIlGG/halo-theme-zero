/**
 *  延时函数
 */
export const delay = <T>(time: number): Promise<T> => new Promise((r) => setTimeout(r, time))

/**
 * 日期转换
 */
export const parseTime = (time: string, format = '{y}年{m}月{d}日') => {
  const date = new Date(time)
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value: string | number = formatObj[key as keyof typeof formatObj]
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`
    }
    return `${value}` || '0'
  })
  return time_str
}

/**
 * url 转换
 */
export const getLocation = (href: string) => {
  const a = document.createElement('a')
  a.href = href
  return a
}

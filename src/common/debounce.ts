// 防抖装饰器

export function debounce(fn: (...args: any[]) => any, delay: number = 500) {
    let lastCall: number = 0

    function wrapper(this: any, ...args: any[]) {
        if (Date.now() - lastCall > delay) {
            lastCall = Date.now()
            return fn.apply(this, args)
        }
    }

    return wrapper
}

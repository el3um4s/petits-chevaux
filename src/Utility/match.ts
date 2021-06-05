const matched = (x: any) => ({
    on: () => matched(x),
    otherwise: () => x,
})

const match = (x: any) => ({  
    on: (pred: (arg0: any) => any, fn: (arg0: any) => any) => (pred(x) ? matched(fn(x)) : match(x)),
    otherwise: (fn: (arg0: any) => any) => fn(x),
})


export default match;
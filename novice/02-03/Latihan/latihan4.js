//first class function
const f = (m) => console.log(m)
f('Test')

const obj = {
    f(m) {
        console.log(m)
    }
}
obj.f('Tes')

const f0 = [
    m => console.log(m)
]
f0[0]('Tess')

const f1 = (m) => () => console.log(m)
const f2 = (f3) => f3()
f2(f1('coba'))

const createF = () => {
    return (m) => console.log(m)
}
const g = createF() 
g('tes')


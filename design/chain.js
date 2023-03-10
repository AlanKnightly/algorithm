

class App {
    constructor() {
        this.middleware = []
    }
    use(fn) {
        this.middleware.push(fn)
    }
    handle(req) {
        let nextIndex = -1
        const next = () => {
            nextIndex++
            if (this.middleware[nextIndex]) {
                this.middleware[nextIndex].call(null, req, next)
            }
        }
        next()
    }
}

const app = new App()
app.use(function (req, next) {
    console.log('11', req)
    next()
})
app.use(function (req, next) {
    console.log('22', req)
    next()
})
app.use(function (req, next) {
    console.log('32', req)
    next()
})

app.handle({ params: 1231 })
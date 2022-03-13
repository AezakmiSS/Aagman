const prod = {
    url:'https://localhost:5000'
}

const dev = {
    url:'http://localhost:5000'
}

export const config = process.env.NODE_ENV === "development" ? dev : prod;
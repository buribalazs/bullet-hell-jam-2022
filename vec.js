class Vec {
    x = 0
    y = 0
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }
    setCoords(x, y) {
        this.x = x
        this.y = y
    }
    rotate(rad) {
        const x = this.x
        const y = this.y
        const cos = Math.cos(rad)
        const sin = Math.sin(rad)
        this.x = x * cos - y * sin
        this.y = x * sin + y * cos
        return this
    }
    copy() {
        return new Vec(this.x, this.y)
    }
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    normalize() {
        const m = this.magnitude
        if (m > 0) {
            this.x /= m
            this.y /= m
        }
        return this
    }
    multiply(m){
        this.x *= m
        this.y *= m
        return this
    }
    add(vec){
        this.x += vec.x
        this.y += vec.y
        return this
    }

    static between(vec1, vec2) {
        return new Vec(vec2.x - vec1.x, vec2.y - vec1.y)
    }
}

export {
    Vec
}

// vec.x * cos(ang) - vec.y * sin(ang),
// vec.x * sin(ang) + vec.y * cos(ang)
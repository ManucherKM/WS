export function email(value) {
    if (value === "") {
        return false
    }
    if (!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(value)) {
        return false
    }
    return true;
}

export function password(value) {
    if (value.length < 10 || value === "") {
        return false
    }
    return true
}

export function nikname(value) {
    if (value === "") {
        return false
    }
    if (value.length < 15) {
        return true
    }
    return false
}

export function age(value) {
    if (value <= 0 || value > 150 || value === "") {
        return false
    }
    return true
}
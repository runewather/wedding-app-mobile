export function nameIsValid(name){
    if(/^[a-zA-Z]*$/.test(name) && name !== '') {
        return true
    }
    else {
        alert('Name is incorrect')
        return false
    }
}

export function emailIsValid(email) {
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email !== '') {
        return true
    } 
    else {
        alert('Email is not valid')
        return false
    }                
}
export function passwordIsValid(pass, confPass) {
    if(pass === confPass && pass !== '') {
        if(pass.length < 5) {
            alert('Password is too short')
            return false
        }                    
    }
    else {
        alert('Password is incorrect')
    }
}

export function validateEmail(email: string) {
    if(!email.trim()) {
        return "Needs Email"
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid Email"
    }
}               

 export function validatePassword(password: string) {
    if(!password) {
        return "Needs Password"
    }
 }
 
  export function getLoginErrorMessage(password: string, email: string){
    if(!password || !email) {
        return "Invalid Email or Password"
    }
    return "Invalid Email or Password"

  }


 

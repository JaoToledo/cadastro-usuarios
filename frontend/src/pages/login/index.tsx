import type { FormEvent } from "react" 
import { useState } from 'react'
import FormatoFundoAzul from '../../assets/images/FormatoFundoAzul.png'
import { api } from "../../services/api"
import { getLoginErrorMessage, validateEmail, validatePassword } from "../../utils/Errors/Login/LoginError"
import { Link, useNavigate } from 'react-router-dom'



export function Login() {


    const navigate = useNavigate();
     // Estados dentro do componente
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Estados para os erros
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [loginErrorMessage, setLoginErrorMessage] = useState("")

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
    
        // Variáveis para armazenar os erros
        const emailErrorMsg = validateEmail(email) || "";
        const passwordErrorMsg = validatePassword(password) || "";

        // Seta todos os erros de uma vez
        setEmailError(emailErrorMsg);
        setPasswordError(passwordErrorMsg);

        // Se houver qualquer erro, não faz o login
        if (emailErrorMsg || passwordErrorMsg) {
            return;
        }

        try {
            const response = await api.post("/login", {
                email,
                password,
            })

            console.log('Login successful!', response.data)
            setEmail('')
            setPassword('')
            navigate('/Home');
        } catch (error) {
            console.error('Login error', error)
            setLoginErrorMessage(getLoginErrorMessage(email, password))
        }
    }

  





    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-950 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${FormatoFundoAzul})`,
        backgroundPosition: 'center 90px',
      }}
    >
      <main className="relative w-[500px] h-[565px] mx-[750px] bg-white rounded-4xl overflow-hidden">
        
        <h1 className="text-center mt-5 [text-shadow:0px_4px_5px_#00000040] 
        [font-family:'Roboto-Black',Helvetica] font-extrabold text-black
         text-4xl tracking-[4.80px] leading-[normal] whitespace-nowrap">
          SIGN IN
        </h1>

        <form onSubmit={handleSubmit} className="flex items-center flex-col my-6">

          <div className="flex flex-col relative mt-[50px] mb-[50px]">
            <input 
              className={`w-[350px] h-[50px] shadow-[0_6px_10px_1px_rgba(0,0,0,0.25)]
                } focus:outline-none placeholder:opacity-60 p-5 border-transparent 
                 [font-family:'Roboto-Black',Helvetica] placeholder:tracking-[7.80px]
                  text-[16px] font-bold rounded-[50px] bg-white ${emailError ? 'border-red-500' : ''}`}
              placeholder="Email"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                setLoginErrorMessage("")  
              }}
            />
            {emailError && <span className="text-red-500 absolute left-0 top-[50px] font-medium text-sm mt-1 ml-2">
              {emailError}
              </span>}
          </div>

          <div className="flex flex-col relative mb-[40px]">
            <input 
              className={`w-[350px] h-[50px] shadow-[0_6px_10px_1px_rgba(0,0,0,0.25)]
                 focus:outline-none placeholder:opacity-60 p-5 border-transparent
                  [font-family:'Roboto-Black',Helvetica] placeholder:tracking-[7.80px] 
                  text-[16px] font-bold rounded-[50px] bg-white ${passwordError ? 'border-red-500' : ''}`}
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value)
                setLoginErrorMessage("")
              }}
            />
            {passwordError && <span className="text-red-500 absolute left-0 top-[50px] font-medium text-sm mt-1 ml-2">
              {passwordError}
              </span>}
              
          </div>  

          <button 
            type="submit"
            className="cursor-pointer w-[150px] h-[40px] bg-gray-800 text-white
             text-[20px] font-bold rounded-[50px] hover:bg-black">
            LOGIN
          </button>

          <Link 
          to="/register"
          className="[font-family:'Roboto-Black',Helvetica] font-extrabold [text-shadow:0px_4px_5px_#00000040]
           rounded-[50px] text-[14px] tracking-[2px]
           mt-10 mr-45
           ">CREATE ACCOUNT</Link>
        </form>
      </main>
    </div>
  )
}
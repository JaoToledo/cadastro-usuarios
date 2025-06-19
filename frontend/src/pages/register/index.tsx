import type { FormEvent } from 'react'
import { useState } from 'react'
import pinkwave from '../../assets/images/pinkwave.png'
import { api } from '../../services/api'

export function Register() {
  // Estados dentro do componente
  const [fullName, setFullName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Estados para os erros
  const [fullNameError, setFullNameError] = useState("")
  const [userNameError, setUserNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
 
  // Função dentro do componente
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // Resetar erros
    setFullNameError("")
    setUserNameError("")
    setEmailError("")
    setPasswordError("")
    setConfirmPasswordError("")

    // Validações
    let hasError = false

    if (!fullName.trim()) {
      setFullNameError("Nome completo é obrigatório")
      hasError = true
    }

    if (!userName.trim()) {
      setUserNameError("Nome de usuário é obrigatório")
      hasError = true
    }

    if (!email.trim()) {
      setEmailError("Email é obrigatório")
      hasError = true
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Email inválido")
      hasError = true
    }

    if (!password) {
      setPasswordError("Senha é obrigatória")
      hasError = true
    } else if (password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres")
      hasError = true
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("As senhas não coincidem")
      hasError = true
    }

    if (hasError) {
      return
    }

    try {
      const response = await api.post("/register", {
        fullName,
        userName,
        email,
        password,
        confirmPassword,
      })

      console.log('User registered!', response.data)

      setFullName('')
      setUserName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    } catch (error) {
      console.error('Register error', error)
      alert('Erro on register try')
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-950 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${pinkwave})`,
        backgroundPosition: 'center 90px',
      }}
    >
      <main className="relative w-full mx-[750px] bg-white rounded-4xl overflow-hidden">
        
        <h1 className="text-center mt-5 [text-shadow:0px_4px_5px_#00000040] 
        [font-family:'Roboto-Black',Helvetica] font-extrabold text-black
         text-4xl tracking-[4.80px] leading-[normal] whitespace-nowrap">
          SIGN UP
        </h1>

        <form onSubmit={handleSubmit} className="flex items-center flex-col my-6">

          <div className="flex flex-col relative mb-[50px]">

            <input 
              className={`w-[300px] h-[30px] shadow-[0_6px_10px_1px_rgba(0,0,0,0.25)]
                 focus:outline-none placeholder:opacity-60 p-5 border-transparent
                  [font-family:'Roboto-Black',Helvetica] placeholder:tracking-[7.80px] 
                  text-[16px] font-bold rounded-[50px] bg-white ${fullNameError ? 'border-red-500' : ''}`}
              placeholder="Full Name"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
            
            {fullNameError && <span className="text-red-500 absolute left-0 top-[40px] text-sm mt-1 ml-2">
              {fullNameError}
              </span>}
          </div>

          <div className="flex flex-col relative mb-[50px]">
            <input 
              className={`w-[300px] h-[30px] shadow-[0_6px_10px_1px_rgba(0,0,0,0.25)]
                 focus:outline-none placeholder:opacity-60 p-5 border-transparent [font-family:'Roboto-Black',Helvetica]
                  placeholder:tracking-[7.80px] text-[16px] font-bold rounded-[50px]
                   bg-white ${userNameError ? 'border-red-500' : ''}`}
              placeholder="User Name"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <span className="text-red-500 absolute left-0 top-[40px] text-sm mt-1 ml-2">
              {userNameError}
            </span>
          </div>

          <div className="flex flex-col relative mb-[50px]">
            <input 
              className={`w-[300px] h-[30px] shadow-[0_6px_10px_1px_rgba(0,0,0,0.25)]
                } focus:outline-none placeholder:opacity-60 p-5 border-transparent 
                 [font-family:'Roboto-Black',Helvetica] placeholder:tracking-[7.80px]
                  text-[16px] font-bold rounded-[50px] bg-white ${emailError ? 'border-red-500' : ''}`}
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {emailError && <span className="text-red-500 absolute left-0 top-[40px] text-sm mt-1 ml-2">
              {emailError}
              </span>}
          </div>

          <div className="flex flex-col relative mb-[50px]">
            <input 
              className={`w-[300px] h-[30px] shadow-[0_6px_10px_1px_rgba(0,0,0,0.25)]
                 focus:outline-none placeholder:opacity-60 p-5 border-transparent
                  [font-family:'Roboto-Black',Helvetica] placeholder:tracking-[7.80px] 
                  text-[16px] font-bold rounded-[50px] bg-white ${passwordError ? 'border-red-500' : ''}`}
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {passwordError && <span className="text-red-500 absolute left-0 top-[40px] text-sm mt-1 ml-2">
              {passwordError}
              </span>}
          </div>

          <div className="flex flex-col relative mb-[50px]">
            <input
              className={`w-[300px] h-[30px] shadow-[0_6px_10px_1px_rgba(0,0,0,0.25)] 
                focus:outline-none placeholder:opacity-60 p-5 border-transparent 
                [font-family:'Roboto-Black',Helvetica] placeholder:tracking-[7.80px] 
                text-[16px] font-bold rounded-[50px] bg-white ${confirmPasswordError ? 'border-red-500' : ''}`}
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <span className="text-red-500 absolute left-0 top-[40px] text-sm mt-1 ml-2">
              {confirmPasswordError}
              </span>}
          </div>

          <button 
            type="submit"
            className="cursor-pointer w-[150px] h-[30px] bg-gray-800 text-white
             text-[20px] font-bold rounded-[50px] mt-[35px] hover:bg-black"
          >
            SIGN UP
          </button>
        </form>
      </main>
    </div>
  )
}           
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {Bounce, ToastContainer, toas} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function register(){

    //variaveis de tela
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    //conexão com backend
    const handleLogin = async (e:any) => {
        e.preventDefault()
        const response = await fetch('https://apl-back-educablog-1.onrender.com/')
    }


    return (
    <main className="flex flex-1 flex-col h-screen w-screen justify-center items-center bg-background-900" >
      <p className="font-sans text-6xl text-fontColor-900 p-2">EducaBlog</p>
     
      <div className="flex flex-1 flex-col max-h-[45vh] w-[40vw] justify-center bg-background-800 rounded-xl items-center">
       <p className="mt-3 text-2xl text-fontColor-800 bg-background-800">Login:</p>
       <input className="mt-2 font-sans text-lg text-fontColor-900 bg-background-800 border border-fontColor-900 rounded-xl p-2 w-5/12" type= "text" placeholder="Usuário" onChange={(e)=> setName(e.target.value)} />
       <input className="mt-2 font-sans text-lg text-fontColor-900 bg-background-800 border border-fontColor-900 rounded-xl p-2 w-5/12" type= "text" placeholder="Senha" onChange={(e)=> setPass(e.target.value)}/>
       <div className="flex flex-1 flex-row w-[40%] max-h-12  mt-6 justify-between ml-auto mr-auto item-center" >
        <button className="bg-background-800 p-2 rounded-xl text-fontColor-800 text-lg font-bold border border-fontColor-800 hover:bg-background-900 hover:border hover:border-fontColor-900 hover:text-fontColor-800 w-64"> Cadastrar</button>
        <button disabled={(pass=='' || name == '')} className="bg-background-500 p-2 rounded-xl text-fontColor-200 text-lg font-bold hover:bg-background-900 hover:border border-fontColor-900 hover:text-fontColor-800 w-64"> Login</button>
       </div>
       <Link className= "mt-1 hover:font-bold mr-72" href="/"> Voltar </Link>
      </div>
    </main>
    )
}
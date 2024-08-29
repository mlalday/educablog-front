//import Image from "next/image";
import "./page.css"
import Link from "next/link";
import { Purple_Purse } from "next/font/google";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col h-screen w-screen justify-center items-center bg-background-900" >
      <p className="font-sans text-6xl text-fontColor-900 p-2">EducaBlog</p>
      <div className="flex flex-1 flex-col max-h-[45vh] w-[40vw] justify-center items-center bg-background-800 rounded-xl">
      <p className="mt-3 text-lg text-fontColor-900 bg-background-800">Usuário:</p>
    <input className="mt-2 font-sans text-lg text-fontColor-900 bg-background-800 border border-fontColor-900 rounded-xl p-2 w-5/12" type= "text" placeholder=""/>
    <p className = "mt-3 text-lg text-fontColor-900 bg-background-800"> Senha:</p>
    <input className="mt-2 font-sans text-lg text-fontColor-900 bg-background-800 border border-fontColor-900 rounded-xl p-2 w-5/12" type= "text" placeholder=""/>
   
    <Link className="mt-6 bg-background-500 p-2 w-5/12 rounded-xl text-fontColor-200 text-lg font-bold hover:bg-background-900 hover:border border-fontColor-900 hover:text-fontColor-800" href = "/register"> Login</Link>
    <p className= "mt-1 hover:font-bold"> Acesso sem cadastro</p>
    </div>
    </main>
  );
}

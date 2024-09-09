"use client";

import Image from 'next/image';
import LogoHeader from '../../../public/logo-soliciTe-me.svg'
import LogoCadastro from '../../../public/logo-soliciTe-me-cadastro.svg'

import LogoFacebook from '../../../public/botao-facebook.png'
import LogoGoogle from '../../../public/botao-google.png'

export default function Home() {


  return (
    <main className="h- bg-custom-blue">
      <header className='flex flex-row bg-header-color pt-5 pb-5 px-[36px] justify-between' >
        <LogoHeader />
        <nav className='text-32px font-700 text-white'>
          <ul className='flex justify-between gap-16'>
            <li>Sobre</li>
            <li>Categorias</li>
            <li>Planos</li>
          </ul>
        </nav>
        <button className='bg-white text-custom-blue text-20px font-600  pt-4 pb-4 pl-12 pr-12 rounded-lg leading-[30px]'>Entrar ou Cadastrar</button>
      </header>
      <h1 className='text-[40px] font-600 text-white leading-[60px] text-center mt-[65px] mb-[50px]'>
        Selecione no que você se encaixa:
      </h1>
      <div className='flex justify-center gap-[124px] text-custom-blue text-2xl'>
        <button className='pt-4 pb-4 pl-12 pr-12 bg-white rounded-lg'>Cliente</button>
        <button className='pt-4 pb-4 pl-12 pr-12 bg-white rounded-lg'>Profissional</button>
      </div>
      <section className='pr-[295px] pl-[295px] mt-[100px] mb-40'>
        <form className=' bg-white pl-[117px] pr-[117px] pb-[93px] rounded-3xl flex flex-col items-center mb-15'>
          <div className='mb-11'>
            <LogoCadastro />
          </div>
          <div className='relative mb-7'>
            <label className='font-700 absolute bg-[#FFFFFF] -top-4 left-5 p-1'>CPF</label>
            <input className='w-[466px] h-[64px] rounded-[12px] p-4 border bg-[#FFFFFF]  border-custom-blue' type="text" placeholder='' />
          </div>
          <div className='relative flex flex-col justify-end mb-16'>
            <label className='font-700 absolute -top-4 left-5 p-1 bg-[#FFFFFF]'>Senha</label>
            <input className='w-[466px] h-[64px] rounded-[12px] p-4 border bg-[#FFFFFF]  border-custom-blue' type="password" placeholder='' />
            <button type='button' className='absolute top-[65px] left-[330px]'>Esqueci a senha</button>
          </div>
          <button className='bg-custom-blue pt-4 pb-4 pr-6 pl-6 rounded-lg text-white font-600'>Entrar na conta</button>
          <p className='mt-6 mb-6'>ou</p>
          <button className='bg-custom-blue pt-1 pb-1 pr-[55px] pl-[55px] mb-8 rounded-lg text-white font-600'>
            <Image src={LogoFacebook} alt="Logo Facebook" width={64} height={64} className='inline-block mr-10' />
            Entrar com Facebook
          </button>
          <button className='bg-custom-blue pt-1 pb-1 pr-[67px] pl-[67px] rounded-lg text-white font-600'>
            <Image src={LogoGoogle} alt="Logo Facebook" width={64} height={64} className='inline-block mr-10'  />
            Entrar com Google
          </button>
        </form>
      </section>
    </main >
  );
}

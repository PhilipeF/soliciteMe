"use client";

import Image from 'next/image'
import Logo from '../../public/logo-soliciTe-me.svg'

import botaoApple from '../../public/botao-apple.png'
import botaoFacebook from '../../public/botao-facebook.png'
import botaoGoogle from '../../public/botao-google.png'
import { useState } from 'react';

export default function Home() {
  const [showButtonRedeSocial, setShowButtonRedeSocial] = useState(false)

  const handleAcessClient = () => {
    setShowButtonRedeSocial(true)
  }

  const handelAcessProfessional = () => {
    setShowButtonRedeSocial(false)
  }

  return (
    <main className="h-screen grid grid-cols-1 tablet:grid-cols-2 gap-20">
      <section id='logo' style={{ paddingLeft: '245px' }} className="hidden tablet:flex flex-col items-center justify-center">
        <div>
          <Logo />
        </div>
        <div style={{ width: '435px' }} className='h-24'>
          <h1 className='font-poppins text-32px font-500 leading-48px text-left text-black'>
            Conectando profissionais <br /> e clientes.
          </h1>
        </div>
      </section>
      <section id='form' className='flex flex-col items-center justify-center'>
        <div className='flex gap-3 mb-7'>
          <button
            onClick={handelAcessProfessional}
            className='w-[247px] h-[64px] rounded-[12px] border border-custom-blue text-32px text-custom-blue'
          >
            Profissional
          </button>
          <button
            onClick={handleAcessClient}
            className='w-[247px] h-[64px] rounded-[12px] border-none text-32px text-white bg-custom-blue'
          >
            Cliente
          </button>
        </div>
        <div className='tablet:block bg-[#F3F3F3]'>
          {showButtonRedeSocial ? <form className='flex flex-col gap-3 pt-[92px] pl-[35px] pr-[50px]'>
            <div className='relative mb-4'>
              <label className='absolute bg-[#F3F3F3] -top-4 left-5 p-1'>CPF</label>
              <input className='w-[466px] h-[64px] rounded-[12px] p-4 border bg-[#F3F3F3]  border-custom-blue' type="text" placeholder='' />
            </div>

            <div className='relative flex flex-col justify-end'>
              <label className='absolute -top-4 left-5 p-1 bg-[#F3F3F3]'>Senha</label>
              <input className='w-[466px] h-[64px] rounded-[12px] p-4 border bg-[#F3F3F3]  border-custom-blue' type="password" placeholder='' />
              <button type='button' className='absolute top-[65px] left-[290px]'>esqueci minha senha</button>
            </div>

            <div id='redes-sociais' className='flex justify-center gap-8 mb-14 mt-16'>
              <button>
                <Image src={botaoGoogle} width={64} height={64} alt='Botão Google' />
              </button>
              <button>
                <Image src={botaoFacebook} width={64} height={64} alt='Botão Facebook' />
              </button>
              <button>
                <Image src={botaoApple} width={64} height={64} alt='Botão Apple' />
              </button>
            </div>

            <div className='flex gap-3 mb-10'>
              <button
                className='w-[247px] h-[64px] rounded-[20px] border-none text-32px text-white bg-custom-blue'
              > entrar
              </button>
              <button
                className='w-[247px] h-[64px] rounded-[20px] border border-custom-blue text-32px text-custom-blue'
              > criar conta
              </button>
            </div>
          </form> : <form className='flex flex-col gap-3 pt-[92px] pl-[35px] pr-[50px]'>
            <div className='relative mb-4'>
              <label className='absolute bg-[#F3F3F3] -top-4 left-5 p-1'>CPF</label>
              <input className='w-[466px] h-[64px] rounded-[12px] p-4 border bg-[#F3F3F3]  border-custom-blue' type="text" placeholder='' />
            </div>

            <div className='relative flex flex-col justify-end mb-20'>
              <label className='absolute -top-4 left-5 p-1 bg-[#F3F3F3]'>Senha</label>
              <input className='w-[466px] h-[64px] rounded-[12px] p-4 border bg-[#F3F3F3]  border-custom-blue' type="password" placeholder='' />
              <button type='button' className='absolute top-[65px] left-[290px]'>esqueci minha senha</button>
            </div>           

            <div className='flex gap-3 mb-36'>
              <button
                className='w-[247px] h-[64px] rounded-[20px] border-none text-32px text-white bg-custom-blue'
              > entrar
              </button>
              <button
                className='w-[247px] h-[64px] rounded-[20px] border border-custom-blue text-32px text-custom-blue'
              > criar conta
              </button>
            </div>
          </form> }          
        </div>
      </section>
    </main >
  );
}

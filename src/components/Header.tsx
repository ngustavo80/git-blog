import headerImg from '../assets/header.png'

export function Header() {
  return (
    <header className='w-full z-0'>
      <img src={headerImg} alt="" className='w-full' />
    </header>
  )
}
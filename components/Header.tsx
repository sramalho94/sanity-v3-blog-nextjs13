import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex flex-row items-center">
          <Image
            src="/../public/logo.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="logo"
          />
          <h1>SRAMALHO94</h1>
        </Link>
      </div>

      <div>
        <Link
          href="https://github.com/sramalho94/sanity-v3-blog-nextjs13"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          Github Repo For Project
        </Link>
      </div>
    </header>
  )
}

export default Header

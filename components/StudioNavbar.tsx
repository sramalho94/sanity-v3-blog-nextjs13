import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
          Go to the website
        </Link>
      </div>
      <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
        <h1 className="font-bold text-white">
          Credit to Sonny Sangha for tutorial video. For more of my projects
          please visit my Github 👉
        </h1>
        <Link href="https://github.com/sramalho94" className="text-[#F7Ab0A]">
          Sramalho94 Github
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar

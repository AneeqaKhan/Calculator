import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="h-5/6 w-80 bg-yellowish rounded-xl border-4 border-black shadow-[20px_20px_0px_0px_#000000]">
        <div className='text-right px-5 py-7'>
          <p className='text-4xl font-bold'>600</p>
          <p className='text-sm pt-3'>400 + 200</p>
        </div>
        <div className='bg-seaGreen h-4/6 rounded-xl p-5'>
          <button className='mr-4 h-14 w-14 bg-yellowish border-2 rounded-md border-black text-xs font-bold shadow-[1px_1px_0px_0px_#000000]'>
            DEL
          </button>
          <button className='mr-4 h-14 w-14 bg-yellowish border-2 rounded-md border-black text-xs font-bold shadow-[1px_1px_0px_0px_#000000]'>
            LOG
          </button>
          <button className='mr-4 h-14 w-14 bg-yellowish border-2 rounded-md border-black text-md font-bold shadow-[1px_1px_0px_0px_#000000]'>
            =
          </button>
          <button className='h-14 w-14 bg-yellowish border-2 rounded-md border-black text-md font-bold shadow-[1px_1px_0px_0px_#000000]'>
            ÷
          </button>
        </div>
      </div>
    </main>
  )
}

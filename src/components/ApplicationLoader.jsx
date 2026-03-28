import Loading from "./Loading"

const ApplicationLoader = () => {
  return (
    <div className='grid grid-cols-[1fr_4fr] gap-2 h-full w-full p-2'>
        <div className=' rounded-md animate-blink-gray'/>
        <div className='grid grid-rows-[1fr_8fr] gap-2'>
            <div className=' rounded-md animate-blink-gray'/>
            <Loading/>
        </div>
    </div>
  )
}

export default ApplicationLoader
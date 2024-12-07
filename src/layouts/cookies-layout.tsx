



export default function Cookies () {

  const show = false;

  if (!show) {
    return null
  } else {
    return (
      <div className={`fixed w-full h-screen bg-black/50 z-[100] top-0 flex justify-center items-center`}>
        <div className={`bg-white text-black px-20 py-5 w-1/2 flex flex-col items-center gap-3`}>
          <h3 className={`text-3xl`}>Cookies Settings</h3>
          <p className={`tracking-wider text-xl`}>We use cookies for a better user experience.</p>
          <div className={`flex gap-5`}>
            <button className={`px-5 py-2 bg-green-700 text-white uppercase tracking-wider`}>Accept</button>
            <button className={`px-5 py-2 bg-green-700 text-white uppercase tracking-wider`}>Accept all</button>
            <button className={`px-5 py-2 uppercase tracking-wider text-gray-600`}>Reject</button>
          </div>
          <div>
            <button className={`tracking-wider text-gray-600`}>Settings</button>
          </div>
        </div>
      </div>
    )

  }
}
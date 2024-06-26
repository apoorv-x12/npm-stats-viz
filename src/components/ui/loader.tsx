import naruto from '../../assets/naruto-icon.svg'

const Loader = () => {
  return (
    <div className=' w-16 h-16 animate-spin'>
      <img src={naruto} alt="loading..." />
    </div>
  )
}

export default Loader

const AlertBar = ( {title, text} ) => {
  return (
    <div className='alertBar'>
      <h1 className='alertText alertHeader'>{title}</h1>
      <h2 className='alertText alertInfoText'>{text}</h2>
    </div>
  )
}

export default AlertBar

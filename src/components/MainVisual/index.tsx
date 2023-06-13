import "./MainVisual.css"

export const MainVisual = (props : {image: string}) => {
  return (
    <div className='homeMain'>
        <p className='homeMain-mv'><img src={`/${props.image}`} alt="" /></p>
    </div>
  )
}

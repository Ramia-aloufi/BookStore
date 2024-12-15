
type TitleProps = {
    title1:string
    titleStyle:string
    title2:string
    paraStyle:string
}
const Title = ({titleStyle,title1,title2,paraStyle}:TitleProps) => {
  return (
    <div className={`${titleStyle}`}>
        <h2 className={`${titleStyle}`}>{title1}
            <span className="text-secondary !font-light ">{title2}</span>
        </h2>
        <p className={`${paraStyle} hidden`}>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.
             Cumque aspernatur a dicta,
              nisi ad repellendus!</p>
    </div>
  )
}

export default Title
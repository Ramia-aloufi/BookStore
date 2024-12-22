
type TitleProps = {
    title1:string
    titleStyle:string
    title2:string
    paraStyle:string
}
const Title = ({titleStyle,title1,title2}:TitleProps) => {
  return (
    <div className={`${titleStyle}`}>
        <h2 className={`${titleStyle}`}>{title1}
            <span className=" !font-light ">{title2}</span>
        </h2>
    </div>
  )
}

export default Title
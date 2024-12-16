type OrderProps = {
  token:string | null
}
const Order = ({token}:OrderProps) => {
  return (
    <div> {token}</div>
  )
}

export default Order
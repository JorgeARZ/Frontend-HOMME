
const Solicitudes = ({data}) => {
// Lee bien la data
console.log(data)
const {user,_id,requestStatus} = data
  return (
//     //no me muestra
    <>
    <h1>User{user}</h1>

</>
  )
}

export default Solicitudes


const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? ' text-red-600' : 'text-blue-900'} text-center capitalize font-bold  mb-3 mt-4 text-lg`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta
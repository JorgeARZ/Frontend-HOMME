import { useForm} from "react-hook-form";
import axios from 'axios'
import FormData from 'form-data'
import Alerta from "./Alerta";
import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const FormHook = () => {
  const {register,handleSubmit,formState: {errors}} = useForm()
    
  const onSubmit = (data) => {
      EnvioDatos(data)


  }

  // console.log(watch("example")) // watch in  put value by passing the name of it
  const EnvioDatos = ({fechaInicio ='',fechaTermino= '',latitudNorte='',latitudSur='',longitudOriente='',longitudPoniente='',local='true'}) =>{


    let data = new FormData();


    const token = localStorage.getItem('token')


    data.append('fechaInicio', fechaInicio);
    data.append('fechaTermino', fechaTermino);
    data.append('latitudNorte', latitudNorte);
    data.append('latitudSur', latitudSur);
    data.append('longitudOriente',longitudOriente);
    data.append('longitudPoniente',longitudPoniente);
    data.append('local', local);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://34.176.175.133:3000/modeling/hidrodinamic',
      headers: { 
        'x-token': token, 
        // ...data.getHeaders()
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })

    .catch((error) => {
      console.log(error);
    });
}
  return (
    <>


    <form onSubmit={handleSubmit(onSubmit)}>


         {/* <DatePicker
            selected={fechaInicio}
            onChange={(date) => register(date)}
            innerRef={register("fechaInicio", { required: true })}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
          />

         <DatePicker
            selected={fechaTermino}
            onChange={(date) => register(date)}
            innerRef={register("fechaTermino", { required: true })}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
          /> */}


        <input type="date" placeholder='Fecha Inicio' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" {...register("fechaInicio", { required: true,})} />
        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Fecha Termino'{...register("fechaTermino", { required: true })} />
        <input   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Latitud Norte'{...register("latitudNorte", { required: true })} />
        <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Latitud Sur' {...register("latitudSur", { required: true })} />
        <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Latitud Oriente' {...register("longitudOriente", { required: true })}/>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Langitud Poniente' {...register("longitudPoniente", { required: true })} />
        <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder='Datos'{...register("local", { required: true })} />
        <input type="submit" className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-400" />
    </form>

   




    </>
  )
}

export default FormHook
import React from 'react'

const Card = () => {
  return (
    <div className='w-1/2 bg-white float-right m-9 p-5 rounded leading-relaxed text-gray-900'>
        <h1 className='text-lg'>Nombre Barrio</h1>
        <div className=''>
            <p>Datos: </p>
            <ul>
                <li>Titulados superiores y CFGS</li>
                <li>Número de parados</li>
                <li>Renta familiar</li>
                <li>Población mayor de 65 años que vive sola</li>
                <li>Sobreenvejecimiento</li>
            </ul>
        </div>

    </div>
  )
}

export default Card
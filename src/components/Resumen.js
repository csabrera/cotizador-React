import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { primerLetraMayuscula } from '../helpers'

const ContenedorResumen =styled.div`
  padding : 1rem;
  text-align : center;
  background-color : #00838F;
  color : #FFF;
  margin-top: 1rem;
`

const Resumen = ({ datos }) => {

  //Extraer Datos
  const { marca, year, plan } = datos

  if( marca === '' || year === '' || plan === '' ) return null

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {primerLetraMayuscula(marca)}</li>
        <li>Plan: {primerLetraMayuscula(plan)}</li>
        <li>Año del auto: year</li>
      </ul>
    </ContenedorResumen>
  )
}

export default Resumen;
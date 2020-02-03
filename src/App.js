import React from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

import styled from '@emotion/styled'

const Contendor = styled.div`
  max-width: 600px;
  margin:0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

function App() {
  return (
    <Contendor>
      <Header
        titulo = 'Cotizador de Seguros'
      >
      </Header>

      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
      
    </Contendor>
  );
}

export default App;

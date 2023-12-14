
import { Formulario } from "../Formulario/Formulario" 
import { Titulo } from "../Titulo/Titulo"


export const Home = () => {
  
  
    return (
    <>
        <Titulo saludo= {{ mensaje: 'Saludos' }}/>
        <Formulario /> 
       
    </>
  )
};

export default Home;
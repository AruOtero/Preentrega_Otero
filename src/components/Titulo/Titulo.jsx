
export const Titulo = ({ titulo = 'Casa de Comidas', saludo }) => {
    return (
      <>
        <h1 className='h1'>{titulo}</h1>
        <p>{saludo.mensaje}</p>
      </>
    );
  };

  export default Titulo;
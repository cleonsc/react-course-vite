// Si este valor no cambia, se recomienda que esté afuera
// del componente
// const newMessage = [1,2,3,4,5,6,7,8,9];
const newMessage = {
  message: 'Hola',
  name: 'César'
};

// Las funciones que no son parte del componente es mejor
// que vayan afuera, salvo en casos puntuales q si pueden
// estar dentro del componente
const getGreeting = (messageObj) => {
  return `${messageObj.message} ${messageObj.name}`;
}

const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>{getGreeting(newMessage)}</h1>
      <h2>{title}</h2>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Soy un subtitulo {subTitle + 1}</p>
    </>
  )
}

export default FirstApp;
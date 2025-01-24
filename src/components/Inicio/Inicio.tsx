import inicioImagen from '/src/assets/images/inicio.jpg';
//import './Inicio.css'; 

const Inicio = () => {
    return (
        <div className='inicio-container'>
            <img src={inicioImagen} alt='Inicio' className='inicio-image' />
        </div>
    );
};

export default Inicio;

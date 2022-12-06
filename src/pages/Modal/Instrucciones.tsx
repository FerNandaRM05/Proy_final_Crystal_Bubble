import React, { useState } from 'react';
import '../Modal/Instrucciones.css';
import styled from 'styled-components';
import Tab1 from '../Tab1';
import { Route } from 'react-router';
import { IonAvatar, IonImg } from '@ionic/react';



const Instrucciones = ({ setHelp }: { setHelp: React.Dispatch<React.SetStateAction<boolean>> }) => {
    let activo = true;
    let [paginaActual, setPaginaActual] = useState(1);

//Array de objetos
/*Si se desean cambiar los textos o imagenes es en esta sección que se puede realizar, se puede modificar 
los elementos titulo, texto e imagen.*/
    let paginas = [
        {
            pagina: 1,
            titulo: "BIENVENIDO A CRYSTAL BUBBLE",
            texto: "Tu tienda virtual fashionista favorita, donde recibirás asesoramiento experto y encontrarás las prendas que mejor se adecuan a tu cuerpo.",
            imagen: "./img/como-combinar-ropa.jpg",
        },
        {
            pagina: 2,
            titulo: "NAVEGACIÓN FÁCIL Y DINAMICA",
            texto: "Navega fácilmente y descubre todas las funcionalidades de la app pensadas para tu mayor comodidad.",
            imagen: "./img/señora-con-movil.png"
        },
        {
            pagina: 3,
            titulo: "COMPRAS SEGURAS",
            texto: "Si te gusta algo puedes comprarlo con nuestro sistema seguro a través de la web. Agrega tus productos al carrito y compra cuando estés lista.",
            imagen: "./img/compra.png",
            activo: true
        }
    ]

//métodos de los botones
    const handleClick = () => {

        if (paginaActual == 3) {
            setHelp(false);
        }
        setPaginaActual(paginaActual + 1)
    }

    const handleClick2 = () => {

        setPaginaActual(paginaActual - 1)

        if (paginaActual == 4) {
            setHelp(false);
        }
        
    }

//contenido de las páginas
    return (
        <Modal className='modal'>
            {paginas.map((pagina) => {
                if (pagina.pagina == paginaActual) {

                    return (
                        <>
                            <div className='ContainImg'>
                                <img className='imgPrinc' src={pagina.imagen} ></img>
                            </div>

                            <div className='ContainText'>
                                <h2 className='title'>{pagina.titulo}</h2>
                                <p className='text'>{pagina.texto}</p>
                                <div className='buttons'>                           
                                    <button onClick={handleClick2} className={paginaActual==1 ? 'b3': 'b2'}>Anterior</button>
                                    <button onClick={handleClick} className={paginaActual==3 ? 'b4' : 'b2'}>Siguiente</button>
                                    <button onClick={handleClick} className={paginaActual==3 ? 'b2' : 'b4'}>Finalizar</button>
                                </div>
                                <a className='b1' onClick={() => setHelp(false)}>Saltar</a>
                            </div>

                        </>
                    )
                }
            })}
            <div className='points'>
                <img className='b_point' src={paginaActual == 1 ? './img/REC.png' : './img/circulo-negro.png'} />
                <img className='b_point' src={paginaActual == 2 ? './img/REC.png' : './img/circulo-negro.png'} />
                <img className='b_point' src={paginaActual == 3 ? './img/REC.png' : './img/circulo-negro.png'} />
            </div>
        </Modal>
    );
};

export default Instrucciones;

const Modal = styled.div`

`
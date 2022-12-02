import React, { useState } from 'react';
import '../Modal/Instrucciones.css';
import styled from 'styled-components';
import Tab1 from '../Tab1';
import { Route } from 'react-router';
import { IonAvatar, IonImg } from '@ionic/react';



const Instrucciones = ({ setHelp }: { setHelp: React.Dispatch<React.SetStateAction<boolean>> }) => {
    let activo = true;
    let [paginaActual, setPaginaActual] = useState(1);


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
            texto: "Si te gusta algo cómpralo con nuestro sistema seguro a través de la web.",
            imagen: "./img/compra.png",
            activo: true
        }
    ]

    const handleClick = () => {

        if (paginaActual == 3) {
            setHelp(false);
        }
        setPaginaActual(paginaActual + 1)
    }

    const handleClick2 = () => {

        if (paginaActual == 3) {
            setHelp(false);
        }
        setPaginaActual(paginaActual - 1)
    }


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
                                    <a className='b1' onClick={() => setHelp(false)}>Saltar</a>
                                    <button className='b2' onClick={handleClick2}>Anterior</button>
                                    <button className='b2' onClick={handleClick}>Siguiente</button>
                                </div>
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
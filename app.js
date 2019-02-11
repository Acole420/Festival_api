var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json(
        [
            {
                album: 'Venganza',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_venga.png'

            },
            {
                album: 'Vamos Muy Bien',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_vamos.png'
            },
            {
                album: 'Siente El Rock And Roll',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_sient.png'
            },
            {
                album: 'Segundos Fuera',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_segun.png'
            }
            ,
            {
                album: 'Poderoso Como Un Trueno',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_poder.png'
            }
            ,
            {
                album: 'Otra Ves En La Ruta',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_otra.png'
            }
            ,
            {
                album: 'Pega Con Fuerza',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_pega.png'
            }
            ,
            {
                album: 'En Directo 87',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_direc.png'
            }
            ,
            {
                album: 'El Que Mas',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_elque.png'
            }
            ,
            {
                album: 'Desde El Fondo Del Abismo',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_desde.png'
            }
            ,
            {
                album: 'De Madrid Al Infierno',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_madri.png'
            }
            ,
            {
                album: 'Dejarse La Piel',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_dejar.png'
            }
            ,
            {
                album: 'Preparate',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_prepa.png'
            }
            ,
            {
                album: 'Callate',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_calla.png'
            }
            ,
            {
                album: '666',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_666fr.png'
            }
            ,
            {
                album: 'A Cara O Cruz',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_acara.png'
            }
            ,
            {
                album: 'Diabolicca',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_diabo.png'
            }
            ,
            {
                album: 'Joven Para Morir',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_joven.png'
            }
            ,
            {
                album: 'Pacto Con El Diablo',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_pacto.png'
            }
            ,
            {
                album: 'Todos Somos Angeles',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_todos.png'
            }
            ,
            {
                album: 'Cuentos Para Mayores',
                autor: 'Lujuria',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/lujur_cuent.png'
            }
            ,
            {
                album: 'Estrellas Del Porno',
                autor: 'Lujuria',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/lujur_estre.png'
            }
            ,

            {
                album: 'Republica Popular Del Coito',
                autor: 'Lujuria',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/lujur_repub.png'
            }
            ,
            {
                album: 'Sin Parar De Pecar',
                autor: 'Lujuria',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/lujur_parar.png'
            }
            ,
            {
                album: 'Un Poquito de Rock n Roll',
                autor: 'Lujuria',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/lujur_unpoq.png'
            }
            ,



        ]
    );
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json(
        [
            {
                album: 'Venganza',
                autor: 'Obus',
                nombreImagen: 'obus_venga.png'

            },
            {
                album: 'Vamos Muy Bien',
                autor: 'Obus',
                nombreImagen: 'obus_vamos.png'
            },
            {
                album: 'Siente El Rock And Roll',
                autor: 'Obus',
                nombreImagen: 'obus_sient.png'
            },
            {
                album: 'Segundos Fuera',
                autor: 'Obus',
                nombreImagen: 'obus_segun.png'
            }
            ,
            {
                album: 'Poderoso Como Un Trueno',
                autor: 'Obus',
                nombreImagen: 'obus_Poder.png'
            }
            ,
            {
                album: 'Otra Ves En La Ruta',
                autor: 'Obus',
                nombreImagen: 'obus_otra.png'
            }
            ,
            {
                album: 'Pega Con Fuerza',
                autor: 'Obus',
                nombreImagen: 'obus_pega.png'
            }
            ,
            {
                album: 'En Directo 87',
                autor: 'Obus',
                nombreImagen: 'obus_direc.png'
            }
            ,
            {
                album: 'El Que Mas',
                autor: 'Obus',
                nombreImagen: 'obus_elque.png'
            }
            ,
            {
                album: 'Desde El Fondo Del Abismo',
                autor: 'Obus',
                nombreImagen: 'obus_desde.png'
            }
            ,
            {
                album: 'De Madrid Al Infierno',
                autor: 'Obus',
                nombreImagen: 'obus_madri.png'
            }
            ,
            {
                album: 'Dejarse La Piel',
                autor: 'Obus',
                nombreImagen: 'obus_dejar.png'
            }
            ,
            {
                album: 'Preparate',
                autor: 'Obus',
                nombreImagen: 'obus_prepa.png'
            }
            ,
            {
                album: 'Callate',
                autor: 'Obus',
                nombreImagen: 'obus_calla.png'
            }
            ,
            {
                album: '666',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'angel_666fr.png'
            }
            ,
            {
                album: 'A Cara O Cruz',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'angel_acara.png'
            }
            ,
            {
                album: 'Diabolicca',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'angel_diabo.png'
            }
            ,
            {
                album: 'Joven Para Morir',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'angel_Joven.png'
            }
            ,
            {
                album: 'Pacto Con El Diablo',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'angel_pacto.png'
            }
            ,
            {
                album: 'Todos Somos Angeles',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'angel_todos.png'
            }
            ,
            {
                album: 'Cuentos Para Mayores',
                autor: 'Lujuria',
                nombreImagen: 'lujur_cuent.png'
            }
            ,
            {
                album: 'Estrellas Del Porno',
                autor: 'Lujuria',
                nombreImagen: 'lujur_estre.png'
            }
            ,

            {
                album: 'Republica Popular Del Coito',
                autor: 'Lujuria',
                nombreImagen: 'lujur_repub.png'
            }
            ,
            {
                album: 'Sin Parar De Pecar',
                autor: 'Lujuria',
                nombreImagen: 'lujur_pecar.png'
            }
            ,
            {
                album: 'Un Poquito de Rock n Roll',
                autor: 'Lujuria',
                nombreImagen: 'lujur_unpoq.png'
            }
            ,



        ]
    );
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json(
        [
            {
                album: 'Preparate',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_prepa.png',
                trackList: ['Va A Estallar El Obús, 7ː22 (J.L Serrano)', 'Cállate (F. Laguna, J.L. Serrano) 	3:10', 'La Escalera» (F. Laguna, J.L. Serrano) 	3:12',
                    'Dosis De Heavy Metal (F. Laguna, J.L. Serrano) 	3:48',
                    'Petrodólares (F. Sánchez) 	4ː34',
                    'Pesadilla Nuclear (F. Laguna, J.L. Serrano) 	4ː26',
                    'Préstame Amigo Tu Cabeza (F. Laguna, J.L. Serrano) 	4ː00',
                    'Solo Lo Hago En Mi Moto (F. Sánchez, J.L. Serrano) 	4ː45'],
                ano: 1981,
                informacion: 'Prepárate es el título del primer álbum de estudio de la banda de Heavy Metal española Obús, publicado por Chapa Discos en 1981. '
            }
            ,
            {
                album: 'Poderoso Como Un Trueno',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_poder.png',
                trackList: ['1 La Invasión De Las Máquinas» (Fernando Sánchez, Juan Luis Serrano, María Frutos) 	3ː47',
                    '2 Buscando Acción» (Juan Luis Serrano, Teresa Alonso) 	3:40',
                    '3 Dinero, Dinero» (Fernando Sánchez, María Frutos) 	4:04',
                    '4 Perdido En La Ciudad» (F. Sánchez, F. Laguna, M. C. G. Diestro, T. Alonso) 	4:43 ',
                    '5Poderoso Como El Trueno» (F. Laguna, J. L. Serrano, M. C. G. Diestro, T. Alonso) 	3ː11',
                    '6Prohibido Hacer Rock» (Fernando Sánchez, Juan Luis Serrano) 	3ː11',
                    '7Dáme Amor» (F. Laguna, J. L. Serrano, M. C. G. Diestro, T. Alonso) 	3ː46',
                    '8Estúpido Acusador» (Fernando Sánchez, Lourdes Sobrino) 	3ː37',
                    '9Labios Asesinos» (Fernando Sánchez, María Frutos)'],
                ano: 1982,
                informacion: 'Poderoso como el trueno es el título del segundo álbum de estudio de la banda española de heavy metal, Obús, publicado en 1982 por Chapa Discos.'
            }

            ,
            {
                album: 'Venganza',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_venga.png',
                trackList: [
                    '1 	Cara De Niña 	3:20',
                    '2 	Venganza 	4:11',
                    '3 	Otra Vez En La Ruta 	2:50',
                    '4 	El Destino Jugó Sus Cartas 	4:01',
                    '5 	Como Una Pitón 	4:33',
                    '6 	Castigo Infernal 	3:46',
                    '7 	V.I.P. 	3:41',
                    '8 	Zona Militar 	3:22',
                ],
                ano: 2000,
                informacion: 'Venganza'

            },
            {
                album: 'Vamos Muy Bien',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_vamos.png',
                trackList: [
                    '1 	Va A Estallar El Obús 	7:22',
                    '2 	Pesadilla Nuclear 	4:26',
                    '3 	Sólo Lo Hago En Mi Moto 	4:45',
                    '4 	Dosis De Heavy Metal 	3:48',
                    '5 	Préstame Amigo Tu Cabeza 	4:00',
                    '6 	Dinero, Dinero 	4:04',
                    '7 	Dame Amor 	3:46',
                    '8 	Buscando Acción 	3:40',
                    '9 	La Invasión De Las Máquinas 	3:47',
                    '10 	Prohibido Hacer Rock 	3:11'
                ],
                ano: 2006,
                informacion: 'Vamos Muy Bien (recopilatorio, 2006).'
            },
            {
                album: 'Siente El Rock And Roll',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_sient.png',
                trackList: ['1 	Siente El Rock And Roll (Canción Inédita)',
                    '2 	Vamos De Concierto (Canción Inédita) 	',
                    '3 	Lola (Canción Inédita) 	',
                    '4 	Eres Mi Estrella (Canción Inédita)',
                    '5 	Va A Estallar El Obús 	',
                    '6 	Dinero, Dinero 	',
                    '7 	Necesito Más 	',
                    '8 	Autopista 	',
                    '9 	El Que Más 	',
                    '10 	Juego Sucio 	',
                    '11 	Pesadilla Nuclear',
                    '12 	Te Visitará La Muerte',
                    '13 	Que Te Jodan 	',
                    '14 	Sólo Lo Hago En Mi Moto 	',
                    '15 	Cállate 	',
                    '16 	Vamos Muy Bien 	'],
                ano: 2015,
                informacion: 'Siente el Rock and Roll (4 canciones nuevas y actualización de grandes temas, 2015).'
            },
            {
                album: 'Segundos Fuera',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_segun.png',
                trackList: ['1. Esta ronda la paga Obús',
                    '2. Más que un Dios',
                    '3. Besa mi culo',
                    '4. Segundos fuera',
                    '5. Mil Ratas',
                    '6. Salvajemente Sexy',
                    '7. Fantasmas del pasado',
                    '8. Sin dirección',
                    '9. Porque puedes',
                    '10. Habitación 666'],
                ano: 2003,
                informacion: 'Es un Glorio Retorno despues de 3 anos de sequia',
            }
            ,

            {
                album: 'Otra Ves En La Ruta',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_otra.png',
                trackList: ['1. Venganza',
                    '2. Búscate otro Tonto',
                    '3. El Destino Jugó sus Cartas',
                    '4. Como una Pitón',
                    '5. Otra vez en la Ruta',
                    '6. Cara de Niña',
                    '7. Castigo Infernal',
                    '8. Zona Militar',
                    '9. V.I.P'],
                ano: 1990,
                informacion: 'Buen trabajo sin más, con sus altibajos de toda la vida. Los noventa no fueron una buena década para el rock/ metal nacional y simplemente se trataba de sobrevivir. Los grandes mitos de los ochenta o desaparecían o simplemente sobrevivían.'

            }
            ,
            {
                album: 'Pega Con Fuerza',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_pega.png',
                trackList: [

                    '«Líos En El Congreso» (Fructuoso "Fortu" Sánchez, María Frutos) 	4:00',
                    '«Doble Vida» (Francisco Laguna, Juan Luis Serrano) 	3:51',
                    '«Hasta El Alma Empeñaré» (Francisco Laguna, Mª Carmen Gª Diestro) 	4:10',
                    '«No Te Cortes» (Fernando Sánchez, Francisco Laguna, Juan Luis Serrano) 	4:01',
                    '«Te Visitará La Muerte» (Fructuoso "Fortu" Sánchez, María Frutos) 	3:40',
                    '«Un Par De Tipos» (Francisco Laguna, Mª Carmen Gª Diestro) 	3:21',
                    '«Taxi» (Fructuoso "Fortu" Sánchez, María Frutos) 	3:32',
                    '«Evasión» (Francisco Laguna, Mª Carmen Gª Diestro) 	2:55',
                    '«La Mano Diestra» (Fernando Sánchez, Lourdes Sobrino) 	3:48'
                ],
                ano: 1985,
                informacion: 'Pega con fuerza es el título del cuarto álbum de estudio de la banda española de heavy metal, Obús, publicado en 1985'
            }
            ,
            {
                album: 'En Directo 87',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_direc.png',
                trackList: ['«Intro»		0:46',
                    '«Necesito más» (Fortu Sánchez, María Frutos) 	Dejarse la piel	3:56',
                    '«La raya» (Fernando Sánchez, Lourdes Sobrino) 	El que más	3:55',
                    '«El que más» (Francisco Laguna, Juan Luis Serrano, Carmen García Diestro*, Teresa Alonso) 	El que más	3:24',
                    '«Autopista» (Fortu Sánchez, María Frutos) 	El que más	4:54',
                    '«Va a estallar el obús» (Juan Luis Serrano) 	Prepárate	3:36',
                    '«Crisis» (Francisco Laguna) 	Dejarse la piel	5:17',
                    '«Pesadilla nuclear» (Francisco Laguna, Juan Luis Serrano) 	Prepárate	4:20',
                    '«Dame amor» (Francisco Laguna, Juan Luis Serrano, Carmen García Diestro*, Teresa Alonso) 	Poderoso como el trueno	4:33',
                    '«Te visitará la Muerte» (Fortu Sánchez, María Frutos) 	Pega con fuerza	3:50'
                ],
                ano: 1987,
                informacion: 'En Directo 21-2-87 es el título del primer álbum en directo de la banda española de heavy metal, Obús.'
            }
            ,
            {
                album: 'El Que Mas',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_elque.png',
                trackList: ['«Viviré» (Francisco Laguna, M. C. Diestro) 	2ː40',
                    '«Deprisa, Deprisa» (F. Sánchez, M. Frutos) 	4:00',
                    '«Vamos Muy Bien» (F. Laguna, J. L. Serrano, M. C. Diestro) 	3:45',
                    '«Autopista» (F. Sánchez, M. Frutos) 	4:52',
                    '«FM» (J. L. Serrano, T. Alonso) 	2ː24',
                    '«El Que Más» (F. Laguna, J. L. Serrano, M. C. Diestro, T. Alonso) 	3ː37',
                    '«La Raya» (F. Sánchez, L. Sobrino) 	3ː45',
                    '«Alguien» (Adaptada por J. L. Serrano, escrita por A. Smith, A. Barnett) 	3ː04',
                    '«Da Igual» (Francisco Laguna, M. C. Diestro) 	3ː45',
                    '«Juego Sucio» (F. Sánchez, M. Frutos) 	4ː35'],
                ano: 1984,
                informacion: 'El que más es el título del tercer álbum de estudio de la banda española de heavy metal, Obús, publicado en 1984 por Chapa Discos.'
            }
            ,
            {
                album: 'Desde El Fondo Del Abismo',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_desde.png',
                trackList: [
                    '1. A saco',
                    '2. Que te jodan',
                    '3. Cualquier noche sale el sol',
                    '4. Cautivos',
                    '5. Pagó por ello',
                    '6. El crack',
                    '7. Siento ganas',
                    '8. Nenaza fantasma',
                    '9. Como una sombra',
                    '10. Marilú',
                    '11. Esta vida'],
                ano: 2000,
                informacion: 'Parecía que el final de Obús se acercaba. En los años noventa, el cambio en la industria musical hizo que la banda se tomara un descanso, necesario para mi gusto ya que álbum a álbum fueron bajando las pretensiones hasta el mínimo, necesitaban un período de reflexión.'
            }
            ,
            {
                album: 'De Madrid Al Infierno',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_madri.png',
                trackList: [
                    'Corre Mamon',
                    'Mas Que Un Dios',
                    'La Raya',
                    'Autopista',
                    'Necesito Mas',
                    'El Que Mas',
                    'Pesadilla Nuclear',
                    'Dame Amor',
                    'Vivire',
                    'Juego Sucio',
                    'Complaciente O Cruel'],
                ano: 2012,
                informacion: 'Conmemorando su 30 aniversario los madrileños OBUS editan “De Madrid al infierno”, un fiel documento de lo sucedido el pasado 5 de Noviembre en la Sala La Riviera en un doble CD, con un sonido excelente, donde se ha conseguido mantener el feeling y el ambiente del concierto, con la participación de un público entregado y muy participativo, que se convierte en protagonista en muchas de las canciones, y del que pueden escucharse sus gritos de apoyo a los músicos de la banda y a los diferentes invitados que desfilaron durante el show por el escenario.'
            }
            ,
            {
                album: 'Dejarse La Piel',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_dejar.png',
                trackList: [
                    '«Mentiroso» (Fructuoso "Fortu" Sánchez, María Frutos) 	4:12',
                    '«Crisis» (Francisco Laguna) 	4:57',
                    '«Necesito Mas» (Fructuoso "Fortu" Sánchez, María Frutos) 	3:53',
                    '«Juicio Final» (Francisco Laguna, Juan Luis Serrano) 	3:57',
                    '«Rómpelo» (Francisco Laguna, Juan Luis Serrano) 	3:50',
                    '«Cría Cuervos» (Francisco Laguna, Juan Luis Serrano) 	3:59',
                    '«Spain Is Different» (Fructuoso "Fortu" Sánchez) 	3:36',
                    '«El Cazador» (Francisco Laguna) 	2:47',
                    '«Sigue Corriendo» (Fructuoso "Fortu" Sánchez, María Frutos) 	4:19'],
                ano: 1986,
                informacion: 'El álbum se grabó en 1986 en los míticos Estudios Mediterráneo de Ibiza, dirigidos en aquel entonces por Vicente Romero "Mariscal". Contiene algunos de los temas que forman parte del repertorio clásico de la banda'
            }
            ,

            {
                album: 'Callate',
                autor: 'Obus',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/obus_calla.png',
                trackList: ['1. Corre mamón',
                    '2. Mi amigo el diablo',
                    '3. Cállate',
                    '4. Él es rock & roll',
                    '5. Ya le estás dando',
                    '6. Lobos salvajes',
                    '7. Mintió',
                    '8. Es lo que hay',
                    '9. Un reflejo en el cristal',
                    '10. Mal rollo',
                    '11. Último destino',
                    '12. Hermano americano'],
                ano: 2010,
                informacion: 'Tras el enorme concierto de Obús que tuve la oportunidad de ver el pasado día 20 de julio del año en curso en el seno del Costa de Fuego, decidí desempolvar la discografía de los vallecanos para encontrar algún matiz más a esos discos que forman parte de nuestras vidas.'
            }
            ,
            {
                album: '666',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_666fr.png',
                trackList: ['«Dando Por Detrás»		3:15',
                    '«Estamos Todos Locos (Mama, Were All Crazy Now)»	Lea, Holder	3:14',
                    '«666»		3:43',
                    '«Si Tú No Estás Aquí»		4:25',
                    '«Hoy Por Ti, Mañana Por Mi»		2:57',
                    '«Todo Marcha Bien»		3:42',
                    '«Nada Que Perder»		3:46',
                    '«No Me Cuentes Problemas»		3:25',
                    '«Vives En Un Cuento»		3:56',
                    '«Donde Estabas Tu»		3:12'],
                ano: 1988,
                informacion: 'Se puede considerar que es al álbum que se ha convertido en todo un clásico del metal en español con récord de ventas de la banda llegándose a publicar en el mercado norteamericano incluyendo una gira por Estados Unidos donde llenaron por completo sitios como el Hollywood Palace'
            }
            ,
            {
                album: 'A Cara O Cruz',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_acara.png',
                trackList: [
                    '«317»	Robert Álvarez	3:56',
                    '«Las Calles De Mi Barrio»	Robert Álvarez, Juan Gallardo	4:21',
                    '«A Cara O Cruz»	Robert Álvarez	3:36',
                    '«Rompe Con Todo Esto»	Robert Álvarez, Juan Gallardo	3:57',
                    '«Jugando Al Amor»	Robert Álvarez, Juan Gallardo	3:49',
                    '«Sexo En Exceso (Introducción)»	Robert Álvarez	0:18',
                    '«Sexo En Exceso»	Robert Álvarez	2:36',
                    '«Detrás De Las Puertas Del Mal»	Robert Álvarez, Juan Gallardo	3:04',
                    '«Desconocido»	Guillermo Pascual	3:38',
                    '«En Un Sueño»	Robert Álvarez, Juan Gallardo	4:42',
                    '«Chico Tal...»	Robert Álvarez, Juan Gallardo	3:36'],
                ano: 1993,
                informacion: 'Este álbum de ángeles del infierno se considera como el que tiene riffs más roqueros y con mucho más poder ya que el cambio de voces y ritmos de percusión son muy rápidos casi al punto de considerarlo un álbum de speed metal. '
            }
            ,
            {
                album: 'Diabolicca',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_diabo.png',
                trackList: ['«Fuera de la ley»	3:58',
                    '«Con las botas puestas»	3:38',
                    '«Dame amor»	3:16',
                    '«Junkie»	3:30',
                    '«Al otro lado del silencio»	4:25',
                    '«Héroes del poder»	3:08',
                    '«Vivo o muerto»	2:42',
                    '«Prisionero»	4:20',
                    '«No pares»	3:16',
                    '«Diabolicca»	3:24',
                    '36:13'],
                ano: 1985,
                informacion: 'Diabolicca es el segundo álbum de estudio de la banda española de heavy metal Ángeles del Infierno y fue publicado en el año 1985 por la compañía discográfica WEA Records. '
            }
            ,
            {
                album: 'Joven Para Morir',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_joven.png',
                trackList: ['«Joven Para Morir»	Juan Gallardo, Robert Álvarez	3:23',
                    '«No Quiero Vivir Sin Ti»	Juan Gallardo	3:00',
                    '«Loco De Atar»	Santi Rubio, Juan Gallardo, Robert Álvarez	4:13',
                    '«Lo Tomas O Lo Dejas»	Víctor Rodríguez, Santi Rubio	3:55',
                    '«Pensando En Ti»	Juan Gallardo	4:45',
                    '«No Te Dejes Vencer»	Robert Álvarez	4:03',
                    '«Todo Lo Que Quiero (cover de OBUS)»	Fernando García, Jimmy Torres	3:06',
                    '«Vive Libre»	Robert Alvares, Iñaki Munita, Santi Rubio	3:55',
                    '«No Hay Tiempo»	Juan Gallardo	3:58',
                    '«Prohibidos Cuentos»	Santi Rubio, Robert Álvarez	4:05'],
                ano: 1986,
                informacion: 'Joven para morir es el tercer álbum de la banda española de heavy, Ángeles del Infierno, publicado el año 1986. '
            }
            ,
            {
                album: 'Pacto Con El Diablo',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_pacto.png',
                trackList: ['Maldito sea tu nombre»	Robert Alvarez	3:42',
                    '«Rocker»	Robert Alvarez y Juan Gallardo	2:52',
                    '«Unidos por el rock»		3:11',
                    '«Esclavos de la noche»		3:14',
                    '«Sombras en la oscuridad»	Robert Alvarez	5:11',
                    '«El principio del fin»	Robert Alvarez y Juan Gallardo	3:35',
                    '«Condenados a vivir»	Robert Alvarez y Juan Gallardo	3:03',
                    '«Sangre»	Robert Alvarez y Manu Garcia	4:14',
                    '«No juegues con fuego»	Robert Alvarez	4:14',
                    '«Es un pacto con el diablo»	Robert Alvarez	3:06'],
                ano: 1984,
                informacion: 'Pacto con el Diablo es el primer álbum de la banda española de heavy, Ángeles del Infierno, publicado el año 1984. '
            }
            ,
            {
                album: 'Todos Somos Angeles',
                autor: 'Angeles Del Infierno',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/angel_todos.png',
                trackList: [
                    '«Todos somos ángeles, parte 1»	Robert Álvarez	2:35',
                    '«Todos somos ángeles, parte 2»		2:24',
                    '«No lo sé»		3;12',
                    '«Buscando la llave»		5:04',
                    '«Hijos de América»		3:45',
                    '«Un sentimiento de amor»		3:01',
                    '«Cae la noche»		3:42',
                    '«Shy Boy (Loco por ti)»		3:34',
                    '«El rey»	José Alfredo Jiménez	2:12',
                    '«Misterios»		3:06',
                    '«Yo sé que tú estás aquí»		4:19',
                    '36:57'
                ],
                ano: 2003,
                informacion: 'Después de A cara o cruz, la banda se separó y decidieron reunirse de diez años para volver a grabar material en estudio.'
            }
            ,
            {
                album: 'Cuentos Para Mayores',
                autor: 'Lujuria',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/lujur_cuent.png',
                trackList: ['1. 	La costilla de Adán 	03:35 ',
                    '2. 	¡Al ladrón! 	03:32 	 ',
                    '3. 	No hay manera 	03:42 	',
                    '4. 	Que no lo vendan 	03:30 	 ',
                    '5. 	Estrella del porno 	04:03 ',
                    '6. 	Cómemelo 	04:14 	',
                    '7. 	La gorda (TYC cover) 	02:04 	',
                    '8. 	Grítalo 	04:39 	',
                    '9. 	Cuento para mayores 	03:20 	  ',
                    '10. 	Todo tu cuerpo 	04:14 ',
                    '11. 	Ninfomanía 	02:35',
                    ' 	39:28 	'],
                ano: 1996,
                informacion: 'Cuentos para mayores es el primer álbum de estudio de la banda española de heavy metal Lujuria y fue publicado en formato de disco compacto por Distribuidora BOA en el año de 1995.​​ Fue re-lanzado en 1999, 2003 y 2004 por Locomotive Music'
            }
            ,
            {
                album: 'Estrellas Del Porno',
                autor: 'Lujuria',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/lujur_estre.png',
                trackList: [

                    '1. 	Estrella del Porno (4:11) ',
                    '2. 	¡Al ladrón! (3:45) 	',
                    '3. 	Que se lo Vendan (3:42) ',
                    '4. 	Así soy yo (4:28) 	',
                    '5. 	La Gorda (2:11) 	',
                    '6. 	Lujuria (4:44) 		'],
                ano: 1992,
                informacion: 'Lujuria es un grupo de heavy metal en castellano de Castilla y León formado en 1993 por cinco segovianos, consideran su estilo como Heavy Erotic Metal. '
            }
            ,

            {
                album: 'Republica Popular Del Coito',
                autor: 'Lujuria',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/lujur_repub.png',
                trackList: [
                    '1. 	Se acabó tu juego ',
                    '2. 	República Popular del Coito 	',
                    '3. 	No molesten, por favor 		',
                    '4. 	Sigue Luchando 		',
                    '5. 	Escuadron 69 		',
                    '6. 	Gatillazo 		',
                    '7. 	Zoofilia 		',
                    '8. 	Por la boca muere el pez ',
                    '9. 	Con la misma moneda 	',
                    '10. 	Marisoka'],
                ano: 1997,
                informacion: 'República popular del coito es el segundo álbum de estudio de la banda española de heavy metal Lujuria y fue publicado en formato de disco compacto en 1997 por Locomotive Music.'
            }
            ,
            {
                album: 'Sin Parar De Pecar',
                autor: 'Lujuria',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/lujur_parar.png',
                trackList: ['1. 	Tentación ',
                    '2. 	Sin Parar de Pecar 	',
                    '3. 	Jekill & Mrs. Hyde 	',
                    '4. 	Vull Cardar 		',
                    '5. 	La Dieta del Vicio 	',
                    '6. 	Corazón de Heavy Metal 	',
                    '7. 	Sperman 		',
                    '8. 	Masoquismo 		',
                    '9. 	Ya Están Aquí 		',
                    '10. 	Vamos Muy Bien 		',
                    '11. 	Milagro'],
                ano: 1999,
                informacion: 'Este álbum contiene once temas, incluyendo el tema «Vamos muy bien» de la agrupación española de heavy metal Obús, en el cual el vocalista de esta banda Fructuoso ‹Fortu› Sánchez participó en la grabación de esta canción.'
            }
            ,
            {
                album: 'Un Poquito de Rock n Roll',
                autor: 'Lujuria',
                nombreImagen: 'https://s3.us-east-2.amazonaws.com/acole88/Subir/lujur_unpoq.png',
                trackList: ['1. 	Un Poquito de Rock & Roll (4:08)',
                    '2. 	Esa Tribu (3:27) 	',
                    '3. 	Cómemelo (3:18) 	',
                    '4. 	Amor por Dinero (3:22)'],
                ano: 1991,
                informacion: 'Un poquito de rock & roll es el primer demo de la banda española de heavy metal Lujuria y fue publicado de forma independiente en formato de casete en 1991'

            }
            ,



        ]
    );
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
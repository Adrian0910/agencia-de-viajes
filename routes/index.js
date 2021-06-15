import express from 'express'
import { paginaInicio,
         paginaNosotros,
         paginaViajes, 
         paginaTestimoniales,
         paginaDetalleViaje 
} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';


const router = express.Router()

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);

export default router;

/* 
====================================================================
  MVC Modelo Vista Controlador
  MODELO ==> Encargado de los datos (Desde una base de datos) y de la
  lógica para mostrar esos datos

  EJEMPLO:
  Un usuario quiere ver la sección de productos, el modelo se encargará de realizar esa consulta
  en la base de datos.
====================================================================
  VIEW ==> Se encarga de lo que se ve en pantalla (HTML)

  EJEMPLO:
  Si el modelo hace la consulta a la base de datos para los productos, es la vista la que
  muestra esos resultados.
====================================================================
  CONTROLLER
  Es el que comunica entre el modelo y la vista, antes de que el modelo consulte a la base de
  datos es el encargado de mandarlo a llamar, y también una vez que el modelo tiene los resultado
  de la consulta, es elq ue se encarga de pasarlos a la vista.
====================================================================
  ROUTER
  Encargado de registrar todas las url's o endpoints que la aplicacion soporta.
  Si el usuario accede a productos, el router llama un controlador, que se comunica con el modelo para obtener
  los datos que son pasados hacia la vista para ser mostrados.
*/



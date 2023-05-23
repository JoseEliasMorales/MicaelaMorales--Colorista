export const estilos = [
  {
    id: 1,
    estilo: 'Balayage',
    img: '../bala.jpg',
    descripcion: ' Aplica coloración a la totalidad de la melena, a partir de unos centímetros de la raíz hasta las puntas, con un degradado progresivo y sutil.'
  },
  {
    id: 2,
    estilo: 'Baño de color',
    img: '../color.jpg',
    descripcion: 'El baño de color sirve como una solución temporal para darle un nuevo aire a tu cabello. Depositando una película que destaca tu color natural, dándole más brillo e intensidad al color.'
  },
  {
    id: 3,
    estilo: 'Corte',
    img: '../corte.jpg',
    descripcion: 'Elegi el estilo que mas te guste y se adapte a tu personalidad'
  },
  {
    id: 4,
    estilo: 'Mechas',
    img: '../mechas.jpg',
    descripcion: 'Aplica un color a tus mechones, generalmente mas claros que el color del cabello.'
  }
]

export const formatearPeso = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 0
})

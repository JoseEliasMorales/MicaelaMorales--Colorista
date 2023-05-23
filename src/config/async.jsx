export const estilos = [
  {
    id: 1,
    estilo: 'Balayage',
    img: '../bala.jpg'
  },
  {
    id: 2,
    estilo: 'Baño de color',
    img: '../color.jpg'
  },
  {
    id: 3,
    estilo: 'Corte',
    img: '../corte.jpg'
  },
  {
    id: 4,
    estilo: 'Mechas',
    img: '../mechas.jpg'
  }
]

export const formatearPeso = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 0
})

interface ItemElement {
  title: string
  description: string
}

export interface Familiar {
  id: string
  edad: number
  nombre: string
  aporte: number
  salario: number
  profesion: string
  ocupacion: string
  parentesco: string
  lugarTrabajo: string
  otrosIngresos: number
}

export interface StepsState {
  current: number
  items: ItemElement[]
  familiares: Familiar[]
  bienesInmuebles: BieneInmueble[]
  estado: 'wait' | 'process' | 'finish' | 'error'
}

export interface BieneInmueble {
  id: string
  year: number
  tipo: string
  valor: number
  direccion: string
  habitaciones: number
  valorActual: number
  rentaMensual: number
  esCredicto: boolean
  saldoActual: number
  valorLetraMenual: number
  personaOInstitucion: string
}

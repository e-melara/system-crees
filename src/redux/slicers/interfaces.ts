interface ItemElement {
  title: string
  description: string
}

export interface StepsState {
  current: number
  items: ItemElement[]
  estado: 'wait' | 'process' | 'finish' | 'error'
}

export interface ResponseConnection {
  ok: boolean
  data: any
  message: string
  status: number
}

export interface Data {
  title: string
  value: number
}

export interface Equipo {
  key: string
  marca?: Data
  serie: string
  tipo?: Data
}

export interface CentroEscolarInterface {
  nombre: string
  codigo: string
  dirDUI: string
  municipio: string
  dirNombres: string
  dirApellidos: string
}

export enum TypePersona {
  DIRECTOR,
  PERSONA,
  STUDENT,
  TEACHER,
}

export interface Persona {
  phone?: string
  nombresCompleto: string
  documento: string
  type: TypePersona
}

export interface Procedencia {
  observacion: string
  studentOrTeacher?: Persona
  directorOrPersona?: Persona
  firmaCEDE?: { value: number; title: string }
}

export interface DataState {
  loading: boolean
  marcas: Data[]
  personas: Data[]
  tipo: Data[]
}

export interface CentroState {
  data: DataState
  isNew: boolean
  search: boolean
  loading: boolean
  equipos: Equipo[]
  procedencia: Procedencia
  centro: CentroEscolarInterface
}

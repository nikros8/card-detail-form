interface InputConfig {
  title: string
  type: string
  value: string | number | null
  placeholder: string
  maxNumber?: number
  width: string
  height: string
}

export interface Inputs {
  [key: string]: InputConfig
}

export interface CardDetail {
  [key: string]: string | number | null
}

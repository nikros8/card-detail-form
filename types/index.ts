interface InputConfig {
  title: string
  definedLength?: number
  type: string
  value: string | number | null
  error: string
  placeholder: string
  width: string
  height: string
}

export interface Inputs {
  [key: string]: InputConfig
}

export interface CardDetail {
  [key: string]: string | undefined
}

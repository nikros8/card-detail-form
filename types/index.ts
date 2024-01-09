interface InputConfig {
  title: string
  type: string
  value: string
  placeholder: string
  maxNumber?: number
  width: string
  height: string
}

export interface Inputs {
  [key: string]: InputConfig
}

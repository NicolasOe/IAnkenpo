declare global {
  interface Window {
    dataLayer: Record<string, any>[] | { push: () => void }
  }

  type ConstantValues<T> = T[keyof T]

  type Dict<T = any> = Record<string, T>
}

export {}

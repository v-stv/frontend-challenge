import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react'

const isBrowser = typeof window !== 'undefined'

const readStorageValue = <T,>(key: string, initialValue: T): T => {
    if (!isBrowser) return initialValue

    const rawValue = window.localStorage.getItem(key)
    if (!rawValue) return initialValue

    try {
        return JSON.parse(rawValue) as T
    } catch {
        return initialValue
    }
}

export const useLocalStorage = <T,>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] => {
    const initialValueRef = useRef(initialValue)
    const [storedValue, setStoredValue] = useState<T>(() => readStorageValue(key, initialValue))

    const setValue: Dispatch<SetStateAction<T>> = (value) => {
        setStoredValue((currentValue) => {
            const nextValue = value instanceof Function ? value(currentValue) : value

            if (isBrowser) {
                window.localStorage.setItem(key, JSON.stringify(nextValue))
            }

            return nextValue
        })
    }

    useEffect(() => {
        const onStorage = (event: StorageEvent) => {
            if (event.key === key) {
                setStoredValue(readStorageValue(key, initialValueRef.current))
            }
        }

        window.addEventListener('storage', onStorage)

        return () => {
            window.removeEventListener('storage', onStorage)
        }
    }, [key])

    return [storedValue, setValue]
}

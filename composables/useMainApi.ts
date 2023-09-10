import { useFetch } from "#app"

type useFetchType = typeof useFetch

// wrap useFetch with configuration needed to talk to our API
export const useMainApi: useFetchType = (path, options = {}) => {
    const config = useRuntimeConfig()

    // modify options as needed
    // @ts-ignore
    options.baseURL = 'http://localhost:3000/'
    return useFetch(path, options)
}
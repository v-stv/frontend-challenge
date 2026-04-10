/// <reference types="vite/client" />

declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string }
    export default classes
}

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
    readonly VITE_CAT_API_KEY?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module '*.svg?react' {
    import * as React from 'react'
    const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
    export default SVG
}

declare module '*.svg' {
    const content: string
    export default content
}

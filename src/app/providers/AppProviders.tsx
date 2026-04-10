import { StoreProvider } from './StoreProvider'
import { ChildrenProp } from '@/shared/model'

interface Props {
    children: ChildrenProp
}

export const AppProviders = (props: Props) => {
    const { children } = props

    return <StoreProvider>{children}</StoreProvider>
}
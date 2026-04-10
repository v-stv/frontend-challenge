import { Provider } from 'react-redux'
import { ChildrenProp } from '@/shared/model'
import {store} from "@/app/store";

interface Props {
    children: ChildrenProp
}

export const StoreProvider = (props: Props) => {
    const { children } = props

    return <Provider store={store}>{children}</Provider>
}
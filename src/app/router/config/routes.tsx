import { Suspense } from 'react'
import { EAppRoutes } from '@/shared/config'
import { Spinner } from '@/shared/ui/Spinner'
import Main from '@/app/layouts/Main'
import { NotFoundPageLazy } from '@/pages/notFound'
import {CatCatalogPageLazy} from "@/pages/catСatalog";
import {FavoriteCatsPageLazy} from "@/pages/favoriteCats";

export const routes = [
    {
        element: <Main />,
        children: [
            {
                path: EAppRoutes.CAT_CATALOG,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <CatCatalogPageLazy />
                    </Suspense>
                ),
            },
            {
                path: EAppRoutes.FAVORITE_CATS,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <FavoriteCatsPageLazy />
                    </Suspense>
                ),
            },
            {
                path: EAppRoutes.NOT_FOUND,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <NotFoundPageLazy />
                    </Suspense>
                ),
            },
        ],
    },
]
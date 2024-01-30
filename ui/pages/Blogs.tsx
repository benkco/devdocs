import { FC, ReactNode } from 'react'
import { Header, Hero, BlogGroup } from '@/ui/components'
// import { CategoriesAndBlogs } from '@/data'

import { useContentLayer } from '@/hooks'

const CloudApp: FC = (): ReactNode => {
    const { allDocuments } = useContentLayer()

    return (
        <div className="container px-8 max-w-[680px] mx-auto py-1 dark:text-white">
            <Header />
            <Hero />

            <BlogGroup details={allDocuments.languages} />

            <BlogGroup details={allDocuments.frameworks} />
        </div>
    )
}

export default CloudApp

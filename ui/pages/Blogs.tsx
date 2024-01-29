import { FC, ReactNode, useEffect, useState } from 'react'
import { Header, Hero, BlogItem } from '@/ui/components'
// import { CategoriesAndBlogs } from '@/data'

import { useContentLayer } from '@/hooks'

const CloudApp: FC = (): ReactNode => {
    const { allDocuments } = useContentLayer()

    return (
        <div className="container px-8 max-w-[680px] mx-auto py-1 dark:text-white">
            <Header />
            <Hero />

            {allDocuments.map((blogsGroup, blogGroupIndex) => {
                const blogItem = Object.values(blogsGroup)

                if (!blogItem || blogItem.length === 0)
                    return <h1 key={blogGroupIndex}>No Blogs.</h1>

                return (
                    <div key={blogGroupIndex}>
                        {blogGroupIndex > 0 && (
                            <div className="w-full h-[1px] bg-gray-100 my-1" />
                        )}

                        {/* @ts-ignore */}
                        <BlogItem details={blogItem} />
                    </div>
                )
            })}
        </div>
    )
}

export default CloudApp

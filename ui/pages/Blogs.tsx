import { FC, ReactNode } from 'react'
import { Header, Hero, BlogItem } from '@/ui/components'
// import { CategoriesAndBlogs } from '@/data'

import { allDocuments } from 'contentlayer/generated'
import { groupBy, chunk } from '@/helpers'

/*
    @param explaining functions
    groupBy = fn(obj, groupByItemKeyName) => {language: array[{...blogItems}]}[]
    chunk = fn(object, columns, limit) => {...blogItems}[]
*/
const docsGrouped = groupBy(allDocuments, 'language')
const allDocs = chunk(docsGrouped)

const CloudApp: FC = (): ReactNode => {
    return (
        <div className="container px-8 max-w-[680px] mx-auto py-1">
            <Header />
            <Hero />

            {allDocs.map((blogsGroup, blogGroupIndex) => {
                const blogItem = Object.values(blogsGroup)

                if (!blogItem || blogItem.length === 0) {
                    return <h1 key={blogGroupIndex}>No Blogs.</h1>
                }

                return (
                    <div key={blogGroupIndex}>
                        {blogGroupIndex > 0 && (
                            <div className="w-full h-[1px] bg-gray-100 my-1" />
                        )}
                        <BlogItem details={blogItem} />
                    </div>
                )
            })}
        </div>
    )
}

export default CloudApp

import type { FC, ReactNode } from 'react'

import Blog from './Blog'
import { useContentLayer } from '@/hooks'
import { Error } from '@/ui/pages'

type SingleBlogProps = {
    postSlug: Record<string, string>
}

const SingleBlog: FC<SingleBlogProps> = ({ postSlug }): ReactNode => {
    const { blogContent, mdxComponent: BlogContent } = useContentLayer(postSlug)

    if (!blogContent) {
        return <Error mode="404" />
    }

    return (
        <Blog details={blogContent}>
            {/* @ts-ignore */}
            <BlogContent />
        </Blog>
    )
}

export default SingleBlog

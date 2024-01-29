import type { FC, ReactNode } from 'react'

import Blog from './Blog'
import { useContentLayer } from '@/hooks'
import { Error } from '@/ui/pages'

type SingleBlogProps = {
    postSlug: Record<string, string>
}

const SingleBlog: FC<SingleBlogProps> = ({ postSlug }): ReactNode => {
    const { blogContent, mdxComponent: MdxBodyRaw } = useContentLayer(postSlug)

    if (!blogContent || !MdxBodyRaw) {
        return <Error mode="404" />
    }

    return (
        // @ts-ignore
        <Blog details={blogContent}>
            <MdxBodyRaw />
        </Blog>
    )
}

export default SingleBlog

import { useRouter } from 'next/router'
import { useContentLayer } from '@/hooks'
import SingleBlogPage from '@/ui/pages/SingleBlog'

export default function BlogCategoryPage() {
    const params = useRouter()
    const blogSlug = {
        mdxSlug: String(params.asPath)
    }

    return <SingleBlogPage postSlug={blogSlug} />
}

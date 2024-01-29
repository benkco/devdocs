import { useRouter } from 'next/router'
import { SingleBlog } from '@/ui/pages'

export default function BlogPostPage() {
    const params = useRouter()
    const blogSlug = {
        mdxSlug: String(params.asPath)
    }

    return <SingleBlog postSlug={blogSlug} />
}

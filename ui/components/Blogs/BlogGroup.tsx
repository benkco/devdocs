import BlogItem from './BlogItem'
import type { BlogItemTypes } from '@/ts'

type BlogGroupProps = {
    details: Partial<BlogItemTypes>[][]
}

const BlogGroup = ({ details: blogGroupDetails }: BlogGroupProps) => {
    if (!blogGroupDetails) {
        return <h1>Something went Wrong!</h1>
    }

    return (
        <section className="my-10">
            <h1 className="text-3xl">Languages</h1>
            {blogGroupDetails.map((blogsGroup, blogGroupIndex) => {
                const blogItem = Object.values(blogsGroup)

                if (!blogItem || blogItem.length === 0)
                    return <h1 key={blogGroupIndex}>No Blogs.</h1>

                return (
                    <div key={blogGroupIndex}>
                        {blogGroupIndex > 0 && (
                            <div className="w-full h-[1px] bg-gray-100 my-1" />
                        )}

                        <BlogItem details={blogItem} />
                    </div>
                )
            })}
        </section>
    )
}

export default BlogGroup

import { type BlogItemTypes } from '@/ts'
import Link from 'next/link'

type BlogProps = BlogItemTypes & {
    _raw: Record<string, string>
}

type BlogItemProps = {
    details:
        | Pick<BlogProps, 'language' | '_raw' | 'emoji' | 'title'>[]
        | Partial<BlogProps>[]
}

const BlogItem = ({ details: blogDetails }: BlogItemProps) => {
    return (
        <div className="flex md:flex-row flex-col gap-4 my-10 dark:text-white">
            {blogDetails.map((item, itemIndex) => (
                <div key={itemIndex} className="md:w-1/2 w-full">
                    <div className="font-semibold mb-2">{item?.language}</div>

                    <div className="flex flex-col gap-1 w-auto">
                        <Link
                            href={item?._raw?.flattenedPath || ''}
                            className="flex w-auto items-center gap-2 px-2 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-900 dark:group hover:cursor-pointer rounded-lg transition-all ease-in-out duration-500"
                        >
                            <div className="text-lg">{item.emoji}</div>

                            <div className="text-base text-slate-600 dark:group-hover:text-white">
                                {item.title}
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogItem

import { type BlogItemTypes, type ArrayAt } from '@/ts'
import Link from 'next/link'

type BlogProps = BlogItemTypes & {
    at?: ArrayAt<BlogItemTypes>
}

type BlogItemProps = {
    details: Partial<BlogProps>[][]
}

const BlogItem = ({ details: blogDetails }: BlogItemProps) => {
    return (
        <div className="flex md:flex-row flex-col gap-4 my-10 dark:text-white">
            {blogDetails.map((group, groupIndex) => (
                <div key={groupIndex} className="md:w-1/2 w-full">
                    <div className="font-semibold mb-2">
                        {group.at(0)?.language ?? 'Tag'}
                    </div>

                    <div className="flex flex-col gap-1 w-auto">
                        {Array.isArray(group) &&
                            group?.map((item: any, itemIndex) => (
                                <Link
                                    href={item?._raw?.flattenedPath}
                                    key={itemIndex}
                                    className="flex w-auto items-center gap-2 px-2 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-900 dark:group hover:cursor-pointer rounded-lg transition-all ease-in-out duration-500"
                                >
                                    <div className="text-lg">
                                        {item.emoji}
                                    </div>

                                    <div className="text-base text-slate-600 dark:group-hover:text-white">
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogItem
import type { FC, ReactNode } from 'react'
import type { BlogItemTypes } from '@/ts'

type BlogPageProps = {
    details: BlogItemTypes
    children: ReactNode
}

const Blog: FC<BlogPageProps> = ({ details, children }): ReactNode => {
    return (
        <div className="container max-w-[680px] mx-auto py-[6.5em] px-[3em]">
            <div className="text-4xl">{details.author}</div>

            <h1 className="text-4xl cloud-name font-medium my-8">
                {details.title}
            </h1>

            <img className="rounded-xl" src="/images/gs2.png" alt="" />

            <p className="flex item-center my-6 text-[1.05em] text-slate-500">
                <span className="me-6 text-2xl">{details.emoji}</span>
                <ul>
                    {details.tags.map((tag) => (
                        <li
                            key={tag}
                            className="py-[0.25rem] px-2 dark:bg-slate-800 dark:text-white border dark:border-violet-400 rounded-md"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </p>

            <div>
                <div>
                    <h2 className="text-lg font-semibold my-4">
                        {details.date}
                    </h2>

                    <p className="my-4 mb-6 text-slate-500 dark:text-slate-200">
                        {children}
                    </p>

                    <img src="/images/gs1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Blog

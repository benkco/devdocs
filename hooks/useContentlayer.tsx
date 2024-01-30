import { useMemo } from 'react'
import { allDocuments } from 'contentlayer/generated'
import { groupDocs, chunk } from '@/helpers'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks'

/*
    @param explaining functions
    groupDocs = fn(obj) => {...blogItems}[] //! Filters Languages and Frameworks based on Post Tag 'framework'
    chunk = fn(object, columns = 2, limit = 3) => {...blogItems}[] //! Sorting
*/

type CustomHookProps = {
    mdxSlug?: string
}

const useContentLayer = ({ mdxSlug = '' }: CustomHookProps = {}) => {
    const [allLanguages, allFrameworks] = useMemo(
        () => groupDocs(allDocuments),
        []
    )

    const languages = useMemo(() => chunk(allLanguages), [allLanguages])
    const frameworks = useMemo(() => chunk(allFrameworks), [allFrameworks])

    const reqUrl = mdxSlug.split('/')
    const reqTag = reqUrl.at(1)
    const reqSlug = reqUrl.at(-1)

    const blog = useMemo(
        () =>
            allDocuments.find((article) => {
                const articleUrl = `/${article._raw.flattenedPath}`.split('/')
                const articleTag = articleUrl.at(1)
                const articleSlug = articleUrl.at(-1)

                const isExistingTag = reqTag === 'blog' || reqTag === articleTag
                const isExistingBlog = reqSlug === articleSlug

                return isExistingTag && isExistingBlog ? article : undefined
            }),
        [allDocuments, reqTag, reqSlug]
    )

    let content, updatedBlog

    if (blog) {
        updatedBlog = {
            ...blog,
            date: format(parseISO(blog.date), 'LLLL d, yyyy')
        }
        content = getMDXComponent(blog.body.code)
    }

    return {
        allDocuments: { languages, frameworks },
        blogContent: updatedBlog,
        mdxComponent: content
    }
}

export default useContentLayer

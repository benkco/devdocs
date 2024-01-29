import { allDocuments } from 'contentlayer/generated'
import { groupBy, chunk } from '@/helpers'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks'

/*
    @param explaining functions
    groupBy = fn(obj, groupByItemKeyName) => {language: array[{...blogItems}]}[]
    chunk = fn(object, columns, limit) => {...blogItems}[]
*/

type CustomHookProps = {
    mdxSlug?: string
}

const useContentLayer = ({ mdxSlug = '' }: CustomHookProps = {}) => {
    const allDocs = groupBy(allDocuments, 'language')
    const documents = chunk(allDocs)

    const reqUrl = mdxSlug.split('/')
    const reqTag = reqUrl.at(1)
    const reqSlug = reqUrl.at(-1)

    console.log(reqUrl)

    const blog = allDocuments.find((article) => {
        const articleUrl = `/${article._raw.flattenedPath}`.split('/')
        const articleTag = articleUrl.at(1)
        const articleSlug = articleUrl.at(-1)

        const isExistingTag = reqTag === 'blog' || reqTag === articleTag
        const isExistingBlog = reqSlug === articleSlug

        if (isExistingTag && isExistingBlog) {
            return article
        }
    })

    let content, updatedBlog

    if (blog) {
        updatedBlog = {
            ...blog,
            date: format(parseISO(blog.date), 'LLLL d, yyyy')
        }
        content = getMDXComponent(blog.body.code)
    }

    return {
        allDocuments: documents,
        blogContent: updatedBlog,
        mdxComponent: content
    }
}

export default useContentLayer

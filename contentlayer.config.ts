import { defineDocumentType, makeSource } from 'contentlayer/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */


export const BlogPost = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '**/**/*.mdx',
    contentType: 'mdx',
    fields: {
        author: { type: 'string', required: true },
        github: { type: 'string', required: true },
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        emoji: { type: 'string', required: false },
        language: { type: 'string', required: true },
        tags: { type: 'list', of: { type: 'string' } }
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/blog/${doc._raw.flattenedPath}`
        }
    }
}))

export default makeSource({
    contentDirPath: 'db',
    documentTypes: [BlogPost]
})

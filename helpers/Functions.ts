type Item = { [key: string]: any }

export const groupDocs = <T extends Item>(array: T[]): [T[], T[]] => {
    const languages: T[] = []
    const frameworks: T[] = []

    array.forEach((item) => {
        if (item.tags && /\bframework\b/i.test(item.tags)) {
            frameworks.push(item)
        } else {
            languages.push(item)
        }
    })

    return [languages, frameworks]
}

export const chunk = <T extends Record<string, any>>(
    obj: T,
    size: number = 2,
    limit: number = 3
): T[] => {
    const keys = Object.keys(obj)

    return Array.from({ length: Math.ceil(keys.length / size) }, (_, index) => {
        const start = index * size
        const end = (index + 1) * size
        const chunkKeys = keys.slice(start, end)

        const chunkObject: Record<string, any> = {}
        chunkKeys.forEach((key) => {
            if (Array.isArray(obj[key])) {
                chunkObject[key] = obj[key].slice(0, limit)
            } else {
                chunkObject[key] = obj[key]
            }
        })

        return chunkObject as T
    })
}

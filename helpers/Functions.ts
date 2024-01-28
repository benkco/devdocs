type Item = { [key: string]: any }

export const groupBy = <T extends Item>(
    array: T[],
    key: string
): Record<string, T[]> => {
    return array.reduce(
        (result, item) => {
            ;(result[item[key]] = result[item[key]] || []).push(item)
            return result
        },
        {} as Record<string, T[]>
    )
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
            chunkObject[key] = obj[key].slice(0, limit)
        })

        return chunkObject as T
    })
}

import { FC, ReactNode } from 'react'
import { ErrorTypes } from '@/ts'

const Error: FC<ErrorTypes> = (props): ReactNode => {
    const { mode } = props

    return (
        <section>
            <h1>Error: {mode === '404' ? 'not-found' : 'error'}</h1>
        </section>
    )
}

export default Error
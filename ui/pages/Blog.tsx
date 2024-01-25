import { FC, ReactNode } from 'react'

const Blog: FC = (): ReactNode => {
    return (
        <div className="container max-w-[680px] mx-auto py-[6.5em] px-[3em]">
            <div className="text-4xl">
                Benjamin
            </div>

            <h1 className="text-4xl cloud-name font-medium my-8">
                Article name and this is longer
            </h1>

            <img className="rounded-xl" src="/images/gs2.png" alt="" />

            <p className="my-6 text-[1.05em] text-slate-500">
                Lorem ipsum dolor sit amet.
            </p>

            <div>
                <div>
                    <h2 className="text-lg font-semibold my-4">
                        Title
                    </h2>

                    <p className="my-4 mb-6 text-slate-500">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta velit, ipsa sunt nulla perferendis a accusantium accusamus architecto modi ex. Magni officiis hic non itaque blanditiis dolore natus ratione fuga sunt corporis reiciendis dicta distinctio ut ducimus, expedita at pariatur laborum temporibus nihil vero id! Veniam commodi voluptatibus placeat.
                    </p>

                    <img src="/images/gs1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Blog
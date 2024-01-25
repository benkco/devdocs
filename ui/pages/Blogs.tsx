import { FC, ReactNode } from 'react'
import { Header, Hero } from '@/ui/components'
import { CategoriesAndBlogs } from '@/data'

const CloudApp: FC = (): ReactNode => {
    return (
        <div className="container px-8 max-w-[680px] mx-auto py-1">
            <Header />
            <Hero />

            <div className="w-full h-[1px] bg-gray-100 my-1" />

            <div className="flex md:flex-row flex-col gap-4 my-10">
                {CategoriesAndBlogs.first.map((f, index) => (
                    <div className="md:w-1/2 w-full" key={index}>
                        <div className="font-semibold mb-2">
                            {f.title}
                        </div>

                        <div className='flex flex-col gap-1 w-atuo'>
                            {f.topics.map((t, index) => (
                                <div key={index} className="flex w-auto items-center gap-2 px-2 py-1.5 hover:bg-slate-100 hover:cursor-pointer rounded-lg transition-all ease-in-out duration-500">
                                    <div className="text-lg">
                                        {t.icon}
                                    </div>

                                    <div className="text-base text-slate-600">
                                        {t.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full h-[1px] bg-gray-100 my-1" />

            <div className="flex md:flex-row flex-col gap-4 my-10">
                {CategoriesAndBlogs.second.map((f, index) => (
                    <div className="md:w-1/2 w-full" key={index}>
                        <div className="font-semibold mb-2">
                            {f.title}
                        </div>

                        <div className='flex flex-col gap-1 w-atuo'>
                            {f.topics.map((t, index) => (
                                <div key={index} className="flex w-auto items-center gap-2 px-2 py-1.5 hover:bg-slate-100 hover:cursor-pointer rounded-lg transition-all ease-in-out duration-500">
                                    <div className="text-lg">
                                        {t.icon}
                                    </div>
                                    
                                    <div className="text-base text-slate-600">
                                        {t.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full h-[1px] bg-gray-100 my-1" />

            <div className="flex md:flex-row flex-col gap-4 my-10">
                {CategoriesAndBlogs.third.map((f, index) => (
                    <div className="md:w-1/2 w-full" key={index}>
                        <div className="font-semibold mb-2">
                            {f.title}
                        </div>

                        <div className='flex flex-col gap-1 w-atuo'>
                            {f.topics.map((t, index) => (
                                <div key={index} className="flex w-auto items-center gap-2 px-2 py-1.5 hover:bg-slate-100 hover:cursor-pointer rounded-lg transition-all ease-in-out duration-500">
                                    <div className="text-lg">
                                        {t.icon}
                                    </div>
                                    
                                    <div className="text-base text-slate-600">
                                        {t.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CloudApp
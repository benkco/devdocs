import { FC, ReactNode } from 'react'

const Hero: FC = (): ReactNode => {
    return (
        <section className="w-auto mb-8 mt-24">
            <div>
                <img
                    className="rounded-full"
                    width={50}
                    src="./images/cloudlogo.png"
                    alt="Logo"
                />
            </div>

            <h1 className="text-4xl font-bold cloud-name my-6">
                Devdocs
            </h1>

            <p className="text-[16.5px] text-slate-600">
                Devdocs serves as an open-source blog where developers from diverse backgrounds unite to enhance the premier platform worldwide for addressing programming-related challenges.
            </p>
        </section>
    )
}

export default Hero
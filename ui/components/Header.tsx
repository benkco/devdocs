import { FC, Fragment, ReactNode } from 'react'

const Header: FC = (): ReactNode => {
    return (
        <Fragment>
            <nav className="w-full flex items-center gap-2 py-2 justify-between">
                <div className='flex items-center gap-2'>
                    <div className="rounded-full">
                        <img
                            className="rounded-full"
                            width={20}
                            src="./images/cloudlogo.png"
                            alt=""
                        />
                    </div>

                    <h1 className="font-medium text-sm flex gap-2">
                        Devdocs

                        {/* {topicName ? (
                            TODO: add topic link later [Benjamin]
                            <div className="text-slate-400 flex gap-2">
                                <span>/</span>
                                <div>{topicName}</div>
                            </div>
                        ) : null} */}
                    </h1>
                </div>

                {/* <iframe 
                    src="https://ghbtns.com/github-btn.html?user=loldotstudio&repo=devdocs&type=star&count=true&size=small" 
                    frameBorder="0" 
                    scrolling="0" 
                    height="20"  
                    className='flex justify-end items-center'
                    title="GitHub" 
                /> */}
            </nav>

            <div className="w-full h-[1px] bg-gray-100 my-1" />
        </Fragment>
    )
}

export default Header
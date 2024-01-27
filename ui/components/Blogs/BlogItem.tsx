// type BlogItemProps = {}

const BlogItem = ({ details: blogDetails }) => {
    return (
        <div className="flex md:flex-row flex-col gap-4 my-10">
            {blogDetails.map((group, groupIndex) => (
                <div key={groupIndex} className="md:w-1/2 w-full">
                    {group.at(0)?.language && (
                        <div className="font-semibold mb-2">{group[0].language}</div>
                    )}

                    <div className="flex flex-col gap-1 w-auto">
                        {group.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                className="flex w-auto items-center gap-2 px-2 py-1.5 hover:bg-slate-100 hover:cursor-pointer rounded-lg transition-all ease-in-out duration-500"
                            >
                                <div className="text-lg">{item.emoji}</div>
                                <div className="text-base text-slate-600">{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogItem

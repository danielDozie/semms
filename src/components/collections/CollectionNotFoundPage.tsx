export function CollectionNotFoundPage({ collection }: any) {

    return (
        <>
            <div className="max-w-7xl mx-auto justify-center items-center h-full pt-24">
                <div className="flex flex-col w-[80%] mx-auto py-6">
                    <div className="flex flex-col text-3xl md:text-4xl font-bold py-12 text-gold text-center items-center justify-center">
                        <h1>{collection.node.title}</h1>
                        
                        <h1 className="py-12 text-2xl italic">Coming soon...</h1>
                    </div>
                </div>

            </div>
        </>
    )
}
import { COLLECTIONS } from "../../types";

export function CollectionNotFoundPage({ collection }: COLLECTIONS):JSX.Element {

    return (
        <>
            <div className="items-center justify-center h-full pt-24 mx-auto max-w-7xl">
                <div className="flex flex-col w-[80%] mx-auto py-6">
                    <div className="flex flex-col items-center justify-center py-12 text-3xl font-bold text-center md:text-4xl text-gold">
                        <h1>{collection.node.title}</h1>
                        
                        <h1 className="py-12 text-2xl italic">Coming soon...</h1>
                    </div>
                </div>

            </div>
        </>
    )
}
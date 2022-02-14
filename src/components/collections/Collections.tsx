import Link from "next/link";

export default function Collections({ collections }: any) {
  return (
    <>
      <div className="flex flex-col w-[80%] mx-auto py-12">
        <div className="text-3xl md:text-4xl font-bold py-12 text-gray-800 dark:text-myGray">
          <h1>
            Explore{" "}
            <span className="text-3xl md:text-4xl bg-gold text-myGray dark:text-gray-800 y-4 p-1 md:p-2">
              Semms Luxury
            </span>{" "}
            Collections
          </h1>
        </div>
        <div className="py-8">
          <div className="flex md:flex-row flex-col mx-auto">
            {collections.map((collection: any) => (
              <div
                className="bg-gold w-full mb-8 md:mr-4 h-[400px] bg-top bg-cover dark:bg-gray-900 drop-shadow-xl cursor-pointer"
                style={{
                  backgroundImage: `url(${collection?.node.image.src})`,
                }}
                key={collection?.node.id}
              >
                <Link href={`/collections/` + collection?.node.handle}>
                  <div className="bg-gray-900/50 w-full h-full">
                    <div className="p-4">
                      <h1 className="absolute mb-24 text-left bottom-0 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gray-200 drop-shadow-lg">
                        {collection?.node.title}
                      </h1>
                      <p className="absolute mb-16 text-left bottom-0 text-gold text-sm italic">
                        {collection?.node.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

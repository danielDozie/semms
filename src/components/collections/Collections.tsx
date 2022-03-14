import Link from "next/link";

export default function Collections({ collections }: any) {
  return (
    <>
      <div className="flex flex-col w-[80%] mx-auto py-12">
        <div className="text-3xl md:text-4xl font-bold pt-12 pb-4 text-gray-800 dark:text-myGray">
          <h1>
            Speak class with 
            <span className="text-3xl md:text-4xl underline decoration-gold decoration-8 underline-offset-4 p-1 md:p-2 ">
             Semms Luxuries
            </span>{" "}
          </h1>
        </div>
        <div className="mb-6 mt-2">
        <p className="font-light text-[13px] md:text-sm  text-gray-600 dark:text-gray-400">
            Semms Luxuries offers a wide range of high-end hand-made luxury luggage for under half the price of the same items from other designers. Search our online catalog of over 70 styles and choose your perfect match.
From vibrant colors to luxury linings and custom logos, there are a variety of options to choose from. With the convenience of free shipping and free returns, you’ll be sure to get the suitcase of your dreams.
          </p>
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

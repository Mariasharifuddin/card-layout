import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
     
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Class 9 Assignment</h1>
      <h3 className="text-xl font-semibold text-gray-700 mt-5">2 cards in first row</h3>
      <h4 className="text-lg font-medium text-gray-600 mt-8">3 cards in second row</h4>

    
      <div className="flex justify-center gap-4 mb-6">
        <div className="bg-white shadow-md rounded-lg w-80 h-56 flex flex-col items-center">
          
          <Image
            src="/slideShow1.6f890b58.jpg" 
            alt="Governor 1"
            width={320}
            height={160}
            className="rounded-t-lg w-full h-40 object-cover"
          />
       
          <p className="mt-4 text-center text-gray-700 font-semibold">
            Governor Sindh 1
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg w-80 h-56 flex flex-col items-center">
       
          <Image
            src="/slideShow3.0006489a.jpg" 
            alt="Governor 2"
            width={320}
            height={160}
            className="rounded-t-lg w-full h-40 object-cover"
          />
          
          <p className="mt-4 text-center text-gray-700 font-semibold">
            Governor Sindh 2
          </p>
        </div>
      </div>

     
      <div className="flex justify-center gap-4">
        <div className="bg-white shadow-md rounded-lg w-64 h-56 flex flex-col items-center">
          
          <Image
            src="/imageWebsite.5c6ae62f.jpg" 
            alt="Governor 3"
            width={256}
            height={160}
            className="rounded-t-lg w-full h-40 object-cover"
          />
          
          <p className="mt-4 text-center text-gray-700 font-semibold">
            Governor Sindh 3
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg w-64 h-56 flex flex-col items-center">
          
          <Image
            src="/imageWebsite2.a102c7b5.jpg" 
            alt="Governor 4"
            width={256}
            height={160}
            className="rounded-t-lg w-full h-40 object-cover"
          />
          
          <p className="mt-4 text-center text-gray-700 font-semibold">
            Governor Sindh 4
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg w-64 h-56 flex flex-col items-center">
        
          <Image
            src="/imageWebsite3.b845fe78.jpg" 
            alt="Governor 5"
            width={256}
            height={160}
            className="rounded-t-lg w-full h-40 object-cover"
          />
          
          <p className="mt-4 text-center text-gray-700 font-semibold">
            Governor Sindh 5
          </p>
        </div>
      </div>
    </div>
  );
}

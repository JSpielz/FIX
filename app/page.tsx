import Image from "next/image";
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'
//import "./functions.tsx";

function getTopics() { 

}

function getTree() { 

}

function getNote() { 
  //getSenderInfo
  //getNoteContents
}

export default function Home() {
  return (
    <main>
      <div className="grid grid-rows-8 grid-cols-8 h-screen m-1">

          <div className="bg-black col-span-2 row-span-1 p-8 m-1 rounded-lg shadow-lg">
            <h1 className="text-2xl text-center font-bold">[UTILITIES TAB]</h1>
            <p className="font-thin mb-6">This is where the utitilites buttons will go</p>
          </div>

          <div className="bg-black row-start-2 col-span-2 row-span-7 p-8 m-1 rounded-lg shadow-lg">
            <h1 className="text-2xl text-center mb-6 font-bold">Topics List</h1>
            <div className="bg-middle-gray p-2 mb-3 rounded-lg"> Search for a topic... </div>
            <ul className="text-lg list-disc m-1">
              <li>[ITEM 1]</li>
              <li>[ITEM 2]</li>
              <li>[ITEM 3]</li>
              <li>[ITEM 4]</li>
              <li>[ITEM 5]</li>
              <li>[ITEM 6]</li>
              <li>[ITEM 7]</li>
              <li>[ITEM 8]</li>
              <li>[ITEM 9]</li>
              <li>[ITEM 10]</li>
              <li>[ITEM 11]</li>
              <li>[ITEM 12]</li>
              <li>[ITEM 13]</li>
              <li>[ITEM 14]</li>
              <li>[ITEM 15]</li>
              <li>[ITEM 16]</li>
              <li>[ITEM 17]</li>
              <li>[ITEM 18]</li>
              <li>[ITEM 19]</li>
            </ul>
          </div>

          <div className="bg-black col-span-4 row-span-8 p-8 m-1 rounded-lg shadow-lg grid grid-rows-6 divide-y-4 divide-middle-gray">
              <div className="row-span-1 text-2xl text-center font-bold">
                <span>[SUBJECT]</span>
                <span className='text-highlight-blue-light'> • </span> 
                <span>[TOPIC]</span>
              
                <ul className="text-lg font-normal list-disc text-left m-1">
                  <li>From: { } </li>
                  <li>To: {  } </li>
                  <li>CC'd: { } </li>
                  <li>... { } </li>
                </ul>
              </div>

              <div className="row-span-5 text-thin text-left pt-4">
              Voluptatem est cuma deserunt. Quaerat consequatur laborum accusamus cupiditate rerum enim quia itaque. Aut quia quia voluptas. Reprehenderit dolores sit expedita ut et soluta vel qui.
              { }
              </div>
          </div>

          <div className="bg-black col-span-2 row-span-8 p-8 m-1 rounded-lg shadow-lg">
            <h1 className="text-2xl text-center font-bold">[TREE TAB]</h1>
            <p className="font-thin mb-6">This is where we will see the visualization of the tree</p>
            { }
          </div>

        </div>

    </main>
  );
}
"use client";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";



function Header() {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);


  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-6 mb-5 bg-[#14141F] rounded-b-1xl">
        <div
          className="absolute top-0 left-0 w-full h-96 bg-[#E9E8F1] rounded-md filter blur-3xl opacity-50 -z-50"
        />

        <Image
          src="https://cloud.appwrite.io/_app/immutable/assets/appwrite-gray-light-c61555b8.svg"
          alt="appwrite Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}
          <form className="flex items-center space-x-5 bg-[#DB1A5A] rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar name="R.Raghul Rajkumar" round color="#DB1A5A" size="50" />
        </div>
      </div>

      
    </header>
  );
};

export default Header;
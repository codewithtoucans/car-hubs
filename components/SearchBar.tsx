'use client'
import {useState} from "react";
import SearchManufacturer from "@/components/SearchManufacturer";

const SearchBar = () => {
    const handleSearch = () => {}
    const [manufacturer, setManufacturer] = useState<string>('')

    return (
        <form onSubmit={handleSearch} className='searchbar'>
            <div className='searchbar__item'>
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
            </div>
        </form>
    )
}

export default SearchBar;
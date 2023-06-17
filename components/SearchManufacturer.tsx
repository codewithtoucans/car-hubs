import React, {Fragment, useState} from "react";
import {Combobox, Transition} from "@headlessui/react";
import Image from "next/image";
import {manufacturers} from "@/constants";

interface SearchManufacturerProps {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}
const SearchManufacturer: React.FC<SearchManufacturerProps> = ({manufacturer, setManufacturer}) => {
    const [query, setQuery] = useState<string>('')
    const filteredManufacturers = query === '' ? manufacturers : manufacturers.filter(item => item.toLowerCase().replace(/\s+/g, "").includes(query.toString().replace(/\s+/g, "")))
    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image src='/car-logo.svg' alt='car' width={20} height={20} className='ml-4'/>
                    </Combobox.Button>
                    <Combobox.Input className='search-manufacturer__input' placeholder='Volkswgen' displayValue={(manufacturer: string) => manufacturer} onChange={e => setQuery(e.target.value)} />
                    <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => setQuery('')}>
                        <Combobox.Options>
                            {filteredManufacturers.length === 0 && query !== '' ? (
                                <Combobox.Option value={query} className='search-manufacturer__option'>Create {query}</Combobox.Option>
                            ): (filteredManufacturers.map(item => (
                                <Combobox.Option value={item} key={item} className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>
                                    {item}
                                </Combobox.Option>
                            )))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer
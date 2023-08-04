import React from 'react';
import { Link } from 'react-router-dom';
import { CountriesProps,CountryData } from '../Interface';


const Countries: React.FC<CountriesProps> = ({ theme, data, searchValue, regionFilter}) =>{
    const filterCountries = ( countries: CountryData[] | null) => {
        if(!countries) return [];

        let filteredCountries = countries;

        //For HandleSearchCountry() function
        if(searchValue.trim() !== '' ) {
            filteredCountries = filteredCountries.filter((country) => 
                country.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        }

        //For handleRegionFilter() function
        if( regionFilter !== 'all'){
            filteredCountries = filteredCountries.filter((country) =>
             country.region.toLowerCase() === regionFilter.toLowerCase()
            )
        }
        return filteredCountries
    }

    const filteredCountries = filterCountries(data);

    // const handlePageRedirect = ()

    return (
        <div className='h-full  mx-[4rem]  grid grid-cols-4 gap-y-8 gap-x-9 cursor-pointer pb-4'>
            {filteredCountries.map((country)=> (
                <Link to={`/country/${country.alpha3Code}`}
                      key={country.alpha3Code}  className={`w-[20rem] h-[25rem] rounded-[0.3125rem] ${theme === 'light' ? 'text-woodsmoke bg-white' : 'text-white bg-ebonyclaydark'} pb-4 grid grid-rows-[55%_40%] gap-y-6`}>
                    <img className='object-cover object-center w-full h-full' src={country.flag} alt={`Flag of ${country.name}`} />
                    <div className='flex flex-col pb-2 gap-y-3'>
                        <h1 className={`${theme === 'light' ? 'text-woodsmoke' : 'text-white'} font-bold text-[1.15rem] ml-8`}>{country.name}</h1>
                        <div className='flex flex-col ml-8 gap-y-2'>
                            <h4>Population:<span className='font-thin'>{country.population}</span></h4>
                            <h4>Region:<span className='font-thin'>{country.region}</span></h4>
                            <h4>Capital:<span className='font-thin'>{country.capital}</span></h4>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Countries ;
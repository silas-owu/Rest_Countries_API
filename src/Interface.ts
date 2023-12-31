export interface CountryData {
    "name": string,
    "topLevelDomain": [string],
    "alpha2Code": string,
    "alpha3Code": string,
    "callingCodes": [string],
    "capital": string,
    "altSpellings": [string],
    "subregion": string,
    "region": string,
    "population": number,
    "latlng": [number, number],
    "demonym": string,
    "area": number,
    "timezones": [string],
    "borders": [string],
    "nativeName": string,
    "numericCode": string,
    "flags": {
        "svg": string,
        "png": string
    },
    "currencies": [
        {
            "code": string,
            "name": string,
            "symbol": string
        }
    ],
    "languages": [
        {
            "iso639_1": string,
            "iso639_2": string,
            "name": string,
            "nativeName": string
        }
    ],
    "translations": {
        "br": string,
        "pt": string,
        "nl": string,
        "hr": string,
        "fa": string,
        "de": string,
        "es": string,
        "fr": string,
        "ja": string,
        "it": string,
        "hu": string
    },
    "flag": string,
    "regionalBlocs": [
        {
            "acronym": string,
            "name": string
        }
    ],
    "cioc": string,
    "independent": boolean
}

export interface FilterProps {
    theme: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    handleSearchCountry: (searchValue: string) => void;
    handleRegionFilter: (regionValue: string) => void;
}

export interface CountriesProps {
    theme: string
    data: CountryData[] | null
    searchValue: string
    regionFilter: string
}

export interface ThemeSwitcherProps {
    theme: string;
    setStoreTheme: React.Dispatch<React.SetStateAction<string>>;
}
export interface AppState {
    theme: string
}
  
export interface PreviewerProps {
    data: CountryData[] | null
    theme: string
}

export interface OptionElementProps {
    value: string;
    onClick: () => void;
}
import React from "react";
import { SearchBar } from "../global/index";

interface ISearchBarData {
    name?: string;
    age?: number;
    position?: string;
    keyword?: string;
    results?: ISearchBarData[];
}

export default function Test() {
    const [data, setData] = React.useState<ISearchBarData[]>([
        { name: "Andrew R. Kelly", age: 22, position: "Janitor" },
        { name: "Adrian Sanchez", age: 30, position: "Teacher" },
        { name: "Anderson Brown", age: 25, position: "Principal" },
        { name: "Anna Valio", age: 30, position: "guidance councelor" },
        { name: "Asha Mathews", age: 50, position: "Teacher" },
        { name: "Alicia keys", age: 25, position: "Librarian" },
        { name: "Alexa Dot", age: 30, position: "teacher" },
        { name: "Bob Squarepants", age: 20, position: "secretary" },
    ]);
    const [keyword, setKeyword] = React.useState<string>("");
    const [results, setResults] = React.useState<ISearchBarData[]>([]);

    const matchName = (name: string, keyword: string) => {
        let keyLen = keyword.length;
        name = name.toLowerCase().substring(0, keyLen);
        // returns true only if we have a match and keyword isn't empty
        return name === keyword && keyLen !== 0;
    };

    const onSearch = (text: string) => {
        // check to see if we found a match, if so, add it to results
        let results = data.filter(
            (item: any) => true === matchName(item.name, text)
        );
        // update state changes
        setResults(results);
    };

    const updateField = (field: string, value: any) => {
        console.log("updateField", field, value);
        onSearch(value);
        switch (field) {
            case "keyword":
                setKeyword(value);
                break;
            case "results":
                setResults(value);
                break;
            default:
                setData([...data, { [field]: value }]);
        }
    };

    return (
        <>
            <div className="App">
                <SearchBar
                    results={results}
                    keyword={keyword}
                    updateField={updateField}
                />
            </div>
        </>
    );
}

// "Andrea"를 검색한다고 가정하면 include()는 true를 반환합니다.
// 하지만 "rea"를 검색하면 어떨까요? include()는 다시 true를 반환합니다.
// 'rea'로 시작하는 이름이 존재하지 않기 때문에 원하지 않습니다.
// & : 따라서 키워드의 길이를 알기 때문에 실제 이름 Andrea에서 하위문자열을
// & : 만들고 키워드와 비교합니다. "Andrea".substring(0,3) === "And"
// & : 비교를 위해 소문자를 설정해서 일치하는지 알 수 있습니다.

// * : 전체 데이터가 로드된 경우에 작동하므로 데이터가 많은 경우 매우 비효율적
// * : onSearch 내에서 실시간으로 자동완성 데이터를 검색하는 예
// const onSearch = async text => {
//   let stockData, data;
//   try {
//     stockData = await fetch(
//       `https://financialmodelingprep.com/api/v3/search?query=${text}&limit=10&exchange=NASDAQ`
//     );
//     data = await stockData.json();
//   } catch (err) {
//     console.log(err.message);
//   }
//   setData({ results: data });
// };

import "./SearchBar.scss";
import React from "react";

const SearchBar = ({
    results,
    keyword,
    updateField,
}: {
    results: any;
    keyword: any;
    updateField: any;
}) => {
    const [selectSchool, setSelectSchool] = React.useState<boolean>(false);
    const updateText = (text: any) => {
        updateField("keyword", text);
        updateField("results", []);
        // 선택한 학교명 따로 렌더링시킬 때 true 상태, true이면서 keyword!==""이면 제출 허용
        setSelectSchool(true);
    };

    const cancelSearch = () => {
        updateField("keyword", "");
    };

    const updateInputField = (field: string, value: any) => {
        updateField(field, value);
        // 선택한 학교명을 변경 시도하면 지워짐
        setSelectSchool(false);
    };

    //renders our results using the SearchPreview component
    const renderResults = results.map(
        (
            {
                position,
                name,
                age,
            }: { position: any; name: string; age: number },
            index: number
        ) => {
            return (
                <SearchPreview
                    key={index}
                    updateText={updateText}
                    index={index}
                    position={position}
                    name={name}
                    age={age}
                />
            );
        }
    );

    return (
        <div className="auto">
            <button
                className={`cancel-btn ${
                    keyword.length > 0 ? "active" : "inactive"
                }`}
                onClick={() => cancelSearch()}
            >
                x
            </button>
            <input
                className="search-bar"
                placeholder="Search"
                value={keyword}
                onChange={(e) => updateInputField("keyword", e.target.value)}
                //onChange={(e) => updateField("keyword", e.target.value)}
                autoFocus
            />
            {results.length > 0 ? (
                <div className="search-results">{renderResults}</div>
            ) : null}
            <div className="des-input-set">
                <input defaultValue={selectSchool ? keyword : ""} readOnly />
            </div>
        </div>
    );
};

const SearchPreview = ({
    age,
    name,
    position,
    index,
    updateText,
}: {
    age: number;
    name: string;
    position: string;
    index: number;
    updateText: any;
}) => {
    return (
        <div
            onClick={() => updateText(name)}
            // we don't add a topBorder if first item on list
            className={`search-preview ${index === 0 ? "start" : ""}`}
        >
            <div className="first">
                <p className="name">{name}</p>
                <p className="position">{position}</p>
            </div>
            <div className="second">
                <p className="age">{age}</p>
                <p className="position">age</p>
            </div>
        </div>
    );
};

export default SearchBar;
// & : useState를 사용하여 실시간 결과를 반환하도록 검색할 때 input을 업데이트해야 함.

// & : App data(state)의 keyword를 사용하여 입력하거나 삭제할 때 input을 추적.

// & : input이 변경 될 때마다 keyword를 업데이트하는 함수 (onSearch)를 만듦.
// & : 이것은 onChange를 사용하고 input을 onSearch 함수에 전달하여 수행.

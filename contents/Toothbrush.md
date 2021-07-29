---
title: "Toothbrush"
client: "Personal"
date: 2021-04-13
categories:
  - Digital
thumbnail: "./thumbnail/41.png"
summary: ""
---

## javascript에서의 map

MDN에 나와있는 설명입니다.

> map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

설명만으로는 이해하기 힘들 수 있기 때문에 샘플코드와 함께 살펴보겠습니다.

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

쉽게 말하면 모든 배열의 값(array1 -> [1, 4, 9, 16]에 특정 함수((x) => x \* 2))를 실행한다고 생각하시면 됩니다.

직접 만들면서 익혀보도록 하겠습니다.

## 데이터 걸러내기

저번에 ResultCard들 만들어 API 데이터를 다루기로 했습니다. 먼저, 반환되는 데이터를 살펴봅시다.

![console](./console-1.png)

0~3번, 마지막 배열은 API의 정보를 담고있는 데이터기 때문에 servList만 걸러내야 합니다. slice 함수를 통해 배열을 정제한 뒤 hook을 사용해 만들 배열에 JSON을 넣겠습니다.

Home.js

```js
let resultNumber = 4; //필요없는 최상위 3개의 데이터

const [state, setState] = useState({
  results: [],
}); //api 데이터를 담는 hooks

async function parseStr(dataSet) {
  const dataArr = new XMLParser().parseFromString(dataSet).children; // xml을 json으로 변경
  resultCount = dataArr.length; // dataArr의 길이
  setState((preState) => {
    return {
      ...preState,
      results: dataArr.slice(resultNumber, resultCount - 1), //4번째부터 마지막 1개를 제외한 배열을 만든다.
    };
  });
}
```

정상적으로 원하는 데이터만 출력되는 것을 확인할 수 있습니다.
![console-2](/assets/2021-04-13-bokdda-7/console-2.png)

## ResultList 함수 만들기

이젠 ResultCard를 map 함수를 통해 생성하는 ResultList 컴포넌트를 만들겠습니다.

JSON 타입의 API 데이터를 result라는 인자로 받아 map 함수를 통해 ResultCard를 생성합니다.

이때 데이터를 살펴보면, 우리가 필요한 정보는 n/children/n/value 라는 것을 알 수 있습니다. (n은 숫자를 의미 0, 1, 2, 3, ...)
따라서 ResultCard에 필요한 데이터를 입력해주면 됩니다.
![console-3](/assets/2021-04-13-bokdda-7/console-3.png)

ResultList.js

```js
import React from "react";
import ResultCard from "./ResultCard";

const ResultList = (results) => {
  return (
    <section className="result-container">
      <div>
        {results.results.map((post) => {
          return (
            <ResultCard
              key={post.children[0].value} // key는 inqNum 고유번호로 지정함.
              title={post.children[6].value} // 제목: servNm
              ministry={post.children[1].value} // 기관: jurMnofNm
              details={post.children[3].value} // 설명: servDgst
            />
          );
        })}
      </div>
    </section>
  );
};

export default ResultList;
```

## ResultList 불러오기

Home에서 ResultList를 불러옵니다.

Home.js

```js
...
<ResultList results={state.results} />
...
```

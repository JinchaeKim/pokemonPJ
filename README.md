# Pokemon Dex README

## React 숙련 개인 과제 \_ 포켓몬 도감 사이트

<br />
<br />
<br />
## 🖥️ 프로젝트 소개

- 포켓몬의 정보를 확인하고 나만의 포켓몬을 추가할 수 있는 페이지입니다.

<img src="/스크린샷 2025-02-07 오후 4.18.10.png"/>

- React의 prop-drilling과 Context API, RTK를 통해 페이지를 구현하였습니다.
- React-router-dom을 활용한 SPA 구현 방식으로 페이지를 이동합니다.
- 또한 React의 상태 관리와 이벤트 핸들링을 활용하여 데이터 정보를 다루었습니다.

<br />
<br />
## 🕰️ 개발 기간

### :heavy_check_mark: **Development Period**

2025/02/03 ~ 2025/02/06

<br />
<br />
## ⚙️ 개발 환경

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

<br />
<br />
## 📁 Pokemon Dex 폴더 구조

```📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂Dashboard
 ┃ ┃ ┗ 📜Dashboard.jsx
 ┃ ┣ 📂PokemonCard
 ┃ ┃ ┗ 📜PokemonCard.jsx
 ┃ ┗ 📂PokemonList
 ┃ ┃ ┗ 📜PokemonList.jsx
 ┣ 📂data
 ┃ ┗ 📜pokemonList.js
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Dex.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜store.js
 ┃ ┗ 📂slices
 ┃ ┃ ┗ 📜setMyPokemonSlice.js
 ┣ 📂shared
 ┃ ┗ 📜Router.jsx
 ┣ 📂styles
 ┃ ┗ 📜StyledComponents.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

<br />
<br />
## 📌 주요 기능

✔️ Home 페이지에서 버튼을 클릭하여 Dex 페이지로 이동할 수 있습니다.

✔️ Dex 페이지 상단 'Home' 버튼을 클릭하여 Home 페이지로 이동할 수 있습니다.

✔️ 포켓몬의 리스트를 카드 형태로 확인할 수 있습니다.

✔️ 원하는 포켓몬을 선택하여 Dashboard에 추가할 수 있습니다.

✔️ 포켓몬 추가, 삭제 시에는 toast 알림이 나타납니다.

✔️ 줃복되는 포켓몬을 추가할 경우 toast 알림이 나타납니다.

✔️ Dashboard에는 최대 6개의 카드만 추가할 수 있으며 7개 이상일 경우에는 toast 알림이 나타납니다.

✔️ Dashboard에 추가된 포켓몬을 삭제할 수 있습니다.

✔️ 포켓몬 카드를 클릭하면 해당 포켓몬의 상세 정보를 확인할 수 있는 Detatil 페이지로 이동합니다.

✔️ Detail 페이지에서 버튼을 통해 포켓몬을 추가 / 삭제할 수 있습니다.

✔️ Detail 페이지에서 버튼을 통해 리스트 페이지로 이동할 수 있습니다.

## 🚀 프로젝트 설치

```bash
npm install -g pnpm # pnpm 설치 (설치되어 있지 않은 경우)
npm install -g nvm # nvm 설치 (설치되어 있지 않은 경우)

nvm install # nvmrc에 설정된 Node.js 버전 설치 및 사용

pnpm install # 의존성 설치

pnpm run dev # 개발 서버 실행
```

## 📝 과제 상세 설명

### 올라 마켓 프로젝트

1. 문제 : 현재 실시간 검색기능이 제대로 동작하지 않고 있습니다.
   원인 : 검색어와 페이지 갱신 과정에서 비동기 처리되고, 실행 순서가 보장되지 않는 문제 발생
   해결방법 : 동기적으로 처리

```js
  const handleTermChange = (term: string) => {
    if (q === term) return
    setPage(1)
    setQ(term)
  }
```

2. 상품을 클릭했을때 이동되는 상품 상세 페이지를 구현
   - 테일윈드를 사용해서 Amazon이나 네이버 스토어와 유사한 스타일로 작업했습니다.

### 올라 위즈덤 프로젝트

1. 사용자가 스크롤을 내릴때 마다 새로운 명언이 나타나도록 구현해주세요.
   문제해결 과정 : react-infinite-scroll-component 라이브러리를 사용해, 무한스크롤 구현 초기 데이터 10개를 불러오고, 분기점을 기준으로 추가로 10개씩 부름

2. 사용자가 좋아하는 명언을 발견하면 별표 버튼을 눌러 즐겨찾기에 추가할 수 있도록 구현해주세요. (localStorage 활용)
   문제해결 과정 :
   1. Favorite 버튼을 클릭했을 때, localStorage에 등록
   1. 다시 한번 Favorite 버튼을 클릭했을 때, localStorage에서 삭제
   1. 이를 바탕으로 토글 버튼 구성
   1. 컴포넌트가 렌더링 될 때, localStorage를 확인해서 isFavorite 분기한다
   1. 두 군데서 동일한 로직을 사용하기 때문에 커스텀 훅(useFavoritesStorage)으로 분리한다

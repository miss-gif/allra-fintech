## 작업내용

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
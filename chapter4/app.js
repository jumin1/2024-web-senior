const express = require("express");
const qs = require("qs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("query parser", function (str) {
  return qs.parse(str, {
    /* custom options */
  });
});

app.use(express.static("public"));


const champions = ["가렌", "그레이브즈", "나서스", "마스터이", "볼리베어"];
var flowers = [
  {
    name: "개나리",
    thumbnail: "",
    color: "노란색",
    season: "봄",
    lifeCycle: 100,
    country: ["대한민국", "일본", "중국"],
  },
  {
    name: "진달래",
    thumbnail: "",
    color: "분홍색",
    season: "봄",
    lifeCycle: 80,
    country: ["대한민국", "미국", "인도"],
  },
  {
    name: "철쭉",
    thumbnail: "",
    color: "보라색",
    season: "봄",
    lifeCycle: 10,
    country: ["대한민국", "태국"],
  },
];

app.set('view engine', 'ejs') // ejs 같은 걸 가져오는 템플릿 엔진(view engine)
app.set('query parser',
  (str) => qs.parse(str, { /* custom options */ }))
app.use(express.static('public')) // 파일들을 나한테 serving

// 24.04.18 api 만들기. 정보를 주기만 할때는 get 메소드를 쓴다
app.get("/data", function (req, res) {
  // 인증된 사용자인지 체크
  // 요청에대한 유효성 확인
  // DB에서 데이터를 찾고 가져온다.
  // 가져온 데이터를 JSON으로 변환한다
  res.json({ name: "김주민", age: 50, address: "경기도 군포시"});
});

app.get('/champions', function(req, res){
  
  res.json({champions: champions});
});

app.get('/champions/:championIndex', (req, res) => {
  
  res.json({ champion: champions[req.params.championIndex] });
});

app.get('/flowers', (req, res) => {
  console.log(req.query);
  // query에서 color 값이 있을 경우, 가져와서 flowers 목록에서 일치하는 color를 가진 항목만 반환한다.
  if(res.query.color !== undefined){
    const filteredFlowers = flowers.filter((flower) => flower.color === req.query.color);
    res.json({ flowers: filteredFlowers.map(flower => flower.name) });
  } else {


  // 주석된 코드 모두 코드라고 함
  // var list = [];
  // for(var i = 0; i < flowers.length; i++){
  //   list.push(flower[i].name);
  // }

  // var list = flowers.map(flower => flower.name);

  // flowers.map(function flower){
  //   return flower.name;
  // }
  
    res.json({ flowers: flowers.map(flower => flower.name) });
  }
  
  res.json({flowers: list});
});

app.get('/flowers/:flowerIndex', (req,res) => {

  res.json({ flower: flowers[req.params.flowerIndex] });
});

app.get('/example1', (req, res) => {
  res.render('index', { name: '박종진' }) // { name: '~' } json 형태의 정보를 주고받는다
});
app.get('/example2', (req, res) => {
  res.render('index', { name: '김주민' })
});
app.get('/example3', (req, res) => {
  res.render('index', { name: '구지환' })
});
app.get('/example4', (req, res) => {
  res.render('index', { name: '한동훈' })
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/2", (req, res) => {
//   res.send("안녕!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

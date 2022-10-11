const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')


//스키마 호출
require('./models/taxiSchema')

//익스프레스 객체 생성
const app = express();

//라우팅 함수
const router = express.Router()

//기본 포트 설정
app.set('port', process.env.PORT || 8080)

//데이터베이스 연결
mongoose.connect('mongodb://localhost:27017/shopping')
console.log('데이터베이스 연결');

//json 형태 데이터
app.use(express.json())

//라우터 등록
require('./routes/taxiRoutes')(app)


//Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('서버를 시작했습니다: ' + app.get('port'));
})

app.use(express.static(path.join(__dirname, 'taxi/build')))

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'taxi/build/index.html'))
})

































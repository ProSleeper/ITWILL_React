const mongoose = require('mongoose')
const Taxi = mongoose.model('taxidbs');


module.exports = (app) => {


  //데이터 조회
  app.get('/api/taxi', async (request, response) => {
    const user = await Taxi.find();

    return response.status(200).send(user);
  })

  //데이터 입력
  app.post('./api/taxi', async(request, response) => {
    const user = await Taxi.create(request.body);

    return response.status(200).send({
      error: false,
      user
    });
  })

  //데이터 수정
  app.put('./api/taxi', async (request, response) => {
    const id = request.body.id;
    const user = await Taxi.findByIdAndUpdate(id, request.body);

    return response.status(200).send({
      error: false,
      user
    })
  })

  //데이터 삭제
  app.delete('./api/taxi', async (request, response) => {
    const id = request.body.id;
    const user = await Taxi.findByIdAndDelete(id)

    return response.status(200).send({
      error: false,
      user
    })
  })

}
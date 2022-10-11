import axios from "axios";

//조회
const getUser = async () => {
  const response = await axios.get("./api/taxi");

  return response.data;
};

//입력
const addUser = async (user) => {
  axios
    .post("/api/taxi", {
      name: user.name,
      job: user.job,
    })
    .then((response) => {
      return console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateUser = async (user) => {
  return axios
    .put("./api/taxi", {
      id: user._id,
      name: user.name,
      job: user.job,
    })
    .then((response) => {
      return console.log(response);
    })
    .catch((error) => {
      return console.log(error);
    });
};

const deleteUser = async(id) => {
  return axios.delete('/api/taxi', {
    data:{id:id}
  })
  .then((response) => {
    return console.log(response);
  })
};

export default {
  getUser: getUser,
  addUser: addUser,
  updateUser: updateUser,
  deleteUser: deleteUser
  
}
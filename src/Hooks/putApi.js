const putApi = (endpoint, res, setLoading, setData) => {
  fetch(`https://obscure-sierra-80708.herokuapp.com/${endpoint}`, {
    method: "PUT",
    body: JSON.stringify(res),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .catch((err) => console.log("Error:", err))
    .then((res) => {
      setLoading(false);
      setData(res);
      console.log("Server response:", res);
    });
};

export default putApi;

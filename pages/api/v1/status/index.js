function status(request, response) {
  return response.status(200).json({ Status: "Está tudo funcionando!!!" });
}

export default status;

const getHash = () => {
  const hash = location.hash.slice(1).toLocaleLowerCase(); // Remover el primer carácter (#) y convertir a minúsculas
  return hash.split("/")[1] || "/"; // Para verificar que el hash se obtiene correctamente
};

export default getHash;
// location.hash.slice(1).toLocaleLowerCase().split("/"[1]) || "/"

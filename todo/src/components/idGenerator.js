let idGenerator = () => {
  let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return id;
}
export default idGenerator;

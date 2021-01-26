export let getResponse = async (url) => {
  const res = await fetch(url);
  if (res.ok) {
    return await res.json();
  } else {
    console.log("Error no: " + res.status);
  }
};

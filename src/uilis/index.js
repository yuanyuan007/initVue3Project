//set session
export function setSen(k, val) {
  if(typeof val == 'string') {
    sessionStorage.setItem(k, val);
    return val;
  }
  sessionStorage.setItem(k, JSON.stringify(val));
  return val;
}

//get session
export function getSen(k) {
  let uu = sessionStorage.getItem(k);

  try {
    if(typeof JSON.parse(uu) != 'number') {
      uu = JSON.parse(uu);
    }
  } catch(e) { }
  return uu;
}

//set local
export function setLoc(k, val) {
  if(typeof val == 'string') {
    localStorage.setItem(k, val);
    return val;
  }
  localStorage.setItem(k, JSON.stringify(val));
  return val;
}

//get local
export function getLoc(k) {
  let uu = localStorage.getItem(k);

  try {
    if(typeof JSON.parse(uu) != 'number') {
      uu = JSON.parse(uu);
    }
  } catch(e) { }
  return uu;
}
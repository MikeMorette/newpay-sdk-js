export function getProvider(url: string) {
  if (!/https:\/\/(qr|sub).nspk.ru\/\w{0,32}(\?)?/.test(url)) {
    throw new Error("invalidURLString");
  }
  
  return -1 === url.indexOf("sub.nspk.ru") ? "qr" : "sub"
}

export function getDboLink(e: any, t: string, n: any) {
  let i = t.replace("https://", `${e.schema}://`);
  const r = e.isWebClientActive && (!0 === e.isWebClientActive || "true" === e.isWebClientActive);
  if ("iOS" === n && r) {
    const n = t.split("/").pop()!.split("?")[0];
    i = `${e.webClientUrl}/${n}`
  }
  return i
}

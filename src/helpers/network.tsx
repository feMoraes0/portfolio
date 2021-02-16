
export default {
  async getData(url:string): Promise<Array<object>> {
    const data = await fetch(url)
    return data.json();
  }
}

class LocalStorage {
  setItem(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
}
const storage = new LocalStorage();

export default storage;

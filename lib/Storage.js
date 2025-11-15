// class Storage {
//   constructor() {
//     this.fallback = {};
//     this.available = typeof window !== "undefined" && !!window.sessionStorage;
//   }

//   setItem(key, value) {
//     if (this.available) {
//       sessionStorage.setItem(key, value);
//     } else {
//       this.fallback[key] = value;
//     }
//   }

//   getItem(key) {
//     if (this.available) {
//       return sessionStorage.getItem(key);
//     } else {
//       return this.fallback[key] || null;
//     }
//   }

//   removeItem(key) {
//     if (this.available) {
//       sessionStorage.removeItem(key);
//     } else {
//       delete this.fallback[key];
//     }
//   }

//   clear() {
//     if (this.available) {
//       sessionStorage.clear();
//     } else {
//       this.fallback = {};
//     }
//   }

// }

// export default new Storage();

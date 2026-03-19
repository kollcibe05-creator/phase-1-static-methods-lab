class Formatter {
  //add static methods here
    static capitalize (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9\s-']+/g, "");
    }
    static titleize (string) {
        const exceptions = new Set(["a", "the", "an", "but", "of", "and", "or", "for", "at", "by", "from"])
        return string.toLowerCase().split(" ").map((word, index) => {
          if (index === 0 || !exceptions.has(word)){
              return word.charAt(0).toUpperCase() + word.slice(1)
              
          } 
          return word
        }).join(" ")

    }

}
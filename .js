function incrementString (strng) {
    if (typeof parseInt(strng[strng.length - 1]) === NaN) {
      return strng + 1;
    } else {
        let la = parseInt(strng.replace(/[^\d]/g, ''));
        if (la === 0) {
            return strng.replace(la, la+1);
        };
    };
};

console.log(incrementString('foobar000'));
import {useEffect, useState} from "react";

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

const useWindowWidth = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  let checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 600);
  }
  useEffect(() => {
    const debounceHandleResize = debounce(() => {
      checkScreenSize();
    }, 500);
    window.addEventListener('resize', debounceHandleResize);
    return () => window.removeEventListener('resize', debounceHandleResize);
  });
  useEffect(() => {
    checkScreenSize();
  }, []);
  return isScreenSmall;
}

export default useWindowWidth;
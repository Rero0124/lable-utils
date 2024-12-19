export default (() => {
  const backendConfig: {
    url?: string,
    key?: string,
  } = {
    url: process.env.LABLE_BACKEND_URL,
    key: process.env.LABLE_BACKEND_KEY
  };
  
  function getBackendUrl (url: string) {
    return backendConfig.url;
  }

  return {
    getBackendUrl
  }
})();
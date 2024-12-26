const backendConfig: {
  url?: string,
  key?: string,
} = {
  url: '',
  key: '',
};

export function getBackendUrl (url: string) {
  return backendConfig.url;
}

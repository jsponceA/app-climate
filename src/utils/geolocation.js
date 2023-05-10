const getCurrentPosition = async () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude: latitude, longitude: longitude });
      });
    } else {
      reject(null);
    }
  });
};

export { getCurrentPosition };

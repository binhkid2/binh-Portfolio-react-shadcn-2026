// Helper function to convert file to Base64
export const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result as string); // This will be the Base64 string
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEncodeMedia = async (file: any): Promise<string> =>
  new Promise((res) => {
    const dataForEncode = new FileReader();
    dataForEncode.readAsDataURL(file);
    dataForEncode.onload = (e) => {
      const response = e.target?.result;
      res(response as string);
    };
  });

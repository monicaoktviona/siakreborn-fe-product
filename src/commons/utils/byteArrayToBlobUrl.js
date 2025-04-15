const convertByteArrayToBlobUrl = (byteArray) => {
    try {
      const base64String = new TextDecoder().decode(new Uint8Array(byteArray));
      const binaryString = atob(base64String);
      const byteNumbers = new Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        byteNumbers[i] = binaryString.charCodeAt(i);
      }
      const pdfUint8Array = new Uint8Array(byteNumbers);
      const blob = new Blob([pdfUint8Array], { type: 'application/pdf' });
      return URL.createObjectURL(blob);
    } catch (error) {
      return null;
    }
  };
  
  export default convertByteArrayToBlobUrl
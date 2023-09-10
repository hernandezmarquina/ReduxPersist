var aesjs = require('aes-js');

const keyT = '0xed678f3049eb27';
const ivT = '781d3396b947c140';

const encrypt = (data: string): string => {
  var textBytes = aesjs.utils.utf8.toBytes(data);

  var keyB = aesjs.utils.utf8.toBytes(keyT);
  var vB = aesjs.utils.utf8.toBytes(ivT);

  var aesCbc = new aesjs.ModeOfOperation.cbc(keyB, vB);
  var encryptedBytes = aesCbc.encrypt(aesjs.padding.pkcs7.pad(textBytes));

  var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

  return encryptedHex;
};
const decrypt = (data: string): string => {
  var textBytes = aesjs.utils.hex.toBytes(data);

  var keyB = aesjs.utils.utf8.toBytes(keyT);
  var vB = aesjs.utils.utf8.toBytes(ivT);

  var aesCbc = new aesjs.ModeOfOperation.cbc(keyB, vB);
  var encryptedBytes = aesCbc.decrypt(textBytes);

  var decryptedText = aesjs.utils.utf8.fromBytes(encryptedBytes);

  // Start the process to remove non-printable ASCII chars (like \u0001)
  decryptedText = decryptedText.toString();
  decryptedText = decryptedText.replace(/[^\x20-\x7E]/g, '');

  // Convert string to JSON string
  decryptedText = decryptedText.replace(/\\"/g, '"');
  // Remove the character (") from the start and from the end
  //decryptedText = decryptedText.slice(1, -1);
  // Now, you can parse the response with JSON.parse(decryptedText);
  return decryptedText;
};

export {encrypt, decrypt};

const imagesArray = [
  'https://sun9-55.userapi.com/impg/QLHcS5vraUM70cCmHHoUqHbexGXh97JQbqMI5A/j_2TTT-1MUo.jpg?size=2560x2560&quality=95&sign=6edf9438945da6fe843dd20973b34708&type=album',
  'https://sun9-30.userapi.com/impg/KCepoPu0_mT2k8wthtzqmeGGgpIyKgDsTkgPww/VfEk6F7w1xo.jpg?size=2560x2560&quality=95&sign=4179f9667b234d12cadbc2a1795c051a&type=album',
  'https://sun9-75.userapi.com/impg/mUftw5iqKWksBeLY6xJdvQIkeB_cx_y-iPGCBA/y2vr26GgkYc.jpg?size=1620x2160&quality=95&sign=0ff58e70584b56fd6b8b647810210749&type=album',
  'https://sun9-39.userapi.com/impg/ec20g51hdUMx_u_Urj_GA9Agw2RCBb5LzX4R1A/i1SJ7rRJcZg.jpg?size=1215x2160&quality=95&sign=7906e48e825597dc85a00a5cbd099875&type=album',
  'https://sun9-66.userapi.com/impg/qWyKs5eWl2uauXwKWxNYBvN-EncMD-3omn4-xw/KCVq558lpbU.jpg?size=1215x2160&quality=95&sign=c9e7da894204de07cdb0b370fa4e31d0&type=album',
  'https://sun9-78.userapi.com/impg/G4reJP69DpotIz3blWwaQE3Rex48P638esAudQ/5sTKpr8_0mo.jpg?size=1620x2160&quality=95&sign=b7a4b832bf78b8d5208615ff7ab6a759&type=album',
  'https://sun9-2.userapi.com/impg/4td_MjFvqOUBzmwhL-K-GDI0Mkd_EG1Jdk_Hzg/XfaRBDCU4DI.jpg?size=2560x2560&quality=95&sign=b151ab26225add5145c94ecc19b8ba39&type=album',
  'https://sun9-31.userapi.com/impg/6o6vJCzTNTS3FxpT7dwW7G_89GN3JYq1aTCd-g/TLw43BfUH1A.jpg?size=1620x2160&quality=95&sign=64f04d0c25ff6b1f80ef7c85f4c56bcb&type=album',
  'https://sun9-63.userapi.com/impg/FTPZud56rQnBoA1uerb2eiJ1xrDV8CuGC_qYUg/aor1N1rRWVk.jpg?size=1620x2160&quality=95&sign=43e2e62f2d3f72fd52a388e310714bc8&type=album',
  'https://sun9-56.userapi.com/impg/s14nNtPJ4PCbhybHHtbOZdaRyBAQRoS-KyVqlg/nbts0Gzpbi0.jpg?size=1620x2160&quality=95&sign=1e2729f60e2e9b6547143c8f5fb4f39e&type=album',
];

const image = document.querySelector('.image');
const button = document.querySelector('.button');

const getRandomImage = (imagesArray) => {
  const randomImage = Math.floor(Math.random() * imagesArray.length);

  image.src = imagesArray[randomImage];
}

getRandomImage(imagesArray);

button.addEventListener('click', () => getRandomImage(imagesArray));
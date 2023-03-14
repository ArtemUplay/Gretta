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
  'https://sun9-4.userapi.com/impg/5AS9G4vgws7RxFKdBPYZH7UTztJPI19O-W8x9Q/H62JBytyrjc.jpg?size=1620x2160&quality=95&sign=53693918138720b0ace21854eb3c53c8&type=album',
  'https://sun9-2.userapi.com/impg/zeuv3Fuhmhe_U40Zpnhiobm1K4L0evGBC4rBNg/lKTdeVb8mUI.jpg?size=1620x2160&quality=95&sign=4aa8f269a88a8fbfa13f143b6918aa63&type=album',
  'https://sun9-78.userapi.com/impg/NnTPkQ4okcEM57DdwA8DmwNEwTjnKLcfv4oydA/agbMnhzVT0Y.jpg?size=1620x2160&quality=95&sign=5c8917e5206f9ce2d4dc7cd75f49c93f&type=album',
  'https://sun9-18.userapi.com/impg/xSIqNowSx_tikAR8E92s951itcs1FnO_nzZfGw/-jYWgWAVGfA.jpg?size=2560x1920&quality=95&sign=6bc0c392e3e30a4ffb4f7fcf1289d646&type=album',
  'https://sun9-65.userapi.com/impg/ukbZG_KhaysxsOPJ-AyCbdQoDxjUK7AQk6V5bA/ExiBwK0LxYk.jpg?size=1620x2160&quality=95&sign=cf86dc1e482fabebe7641565d3d738b4&type=album',
  'https://sun9-18.userapi.com/impg/0kYHEgYL0KS-gQip-kXxKAWZyJWCZJNq8t71KA/MVeI-4wU7aQ.jpg?size=1620x2160&quality=95&sign=9b20f18ec4a71f10ac899bd3436c2c2d&type=album',
  'https://sun9-14.userapi.com/impg/oTHHOxGcFJn1pyTy1fEi3gXvTSmVJOOZyWJ24A/ypYN0JSF96w.jpg?size=2560x1920&quality=95&sign=79b61172009a4377043338e863f28bae&type=album',
  'https://sun9-33.userapi.com/impg/f04N3E3TM5iPa3pfuO2ttN6mJ2-IwEdPz44adw/7BBal0rIpBE.jpg?size=2560x1920&quality=95&sign=00c64ec8565212fb0b4b4779cd6fdaec&type=album',
  'https://sun9-10.userapi.com/impg/QFJt6kLuAKIGnwVwZGVJ1krGdrflYnPMD3Dxug/S50gOvyoaFw.jpg?size=1620x2160&quality=95&sign=d6451c48f93fd000adb9d93d92830bb8&type=album',
  'https://sun9-44.userapi.com/impg/ALSJi6k0Lylf7FJAMbWXNPtug_D-kof7foLnIA/mF9ipYgfrzc.jpg?size=1620x2160&quality=95&sign=48123daf6c3f85a117a42aac43aa51e6&type=album',
  'https://sun9-57.userapi.com/impg/Jtgkk9Vgb4FX--m1s3knZZUbOljSvAVNtn8E2A/mKJ81jCOqt4.jpg?size=2272x2272&quality=95&sign=0652f21e60e1da1eb80342976ee8d62d&type=album',
  'https://sun9-52.userapi.com/impg/bh5j3ilaPZC91tbdRIMDsxljoeCnzhIluMpQlg/9Qrcu77b0vk.jpg?size=1620x2160&quality=95&sign=138a8ba7b001c17c3f2628928d160fed&type=album',
  'https://sun9-80.userapi.com/impg/42E-0LPD8a29v7KSYmqL_Sw9cEiaOWKrEfwGrA/Ye2OBpbJLwo.jpg?size=1620x2160&quality=95&sign=cc25899f71daab5ba580b0ffe0e8d850&type=album',
  'https://sun9-54.userapi.com/impg/qljexNvZwjZConGPgAAo2WSDHjLf0PH1nC8mHw/DkzO1LIJKJc.jpg?size=1620x2160&quality=95&sign=a36d725bf0f314fc430ec91732084e51&type=album',
  'https://sun9-80.userapi.com/impg/mQFQW7FaUzTJjabJ9kYi8OWZP0-htBwtPXtCsg/pszBuwPEP2Y.jpg?size=1620x2160&quality=95&sign=d4e35547e7a416aacd2a9b29ed467e3f&type=album',
  'https://sun9-71.userapi.com/impg/fh-CrQqHmDU-v_wDNB7PD2nPVhq0SUra0Zw9dg/MS_McJXK7v8.jpg?size=1620x2160&quality=95&sign=c2ea6218494eb65af578021555565c96&type=album',
  'https://sun9-15.userapi.com/impg/ve-FWO6pbjbfeBxOgYsFou5KfXD7dAmyiXCitw/krD3xXlriNs.jpg?size=1620x2160&quality=95&sign=4c7ae12c563ebef6875d3284cec9e151&type=album',
  'https://sun9-36.userapi.com/impg/Eef70AhLg00IsQtaYgGsnjz6KnoEQxdXuBi_4A/Yfu6Ppa3mJ4.jpg?size=1620x2160&quality=95&sign=574b79b7cfbf64831ad8d390e709ecfe&type=album',
  'https://sun9-8.userapi.com/impg/tQi7RJ1ivPRGi-Lhf-A-aglQUdwhBcdt03160g/RSVEv3D7v4A.jpg?size=2560x1920&quality=95&sign=49a284998c18ba4b318fa4fc63432ab6&type=album',
  'https://sun9-57.userapi.com/impg/jpoStlgpdV0MrHmdWZoH-PJYnPZFsMnlehblKw/yIxuio_a3HA.jpg?size=1620x2160&quality=95&sign=4d0a746a03bee83c704197ef49115528&type=album',
  'https://sun9-60.userapi.com/impg/1225FVW1fpDi6sr1mBGxzDBr8bBpW2nJdPqFVg/KHyzAYFtLVk.jpg?size=1620x2160&quality=95&sign=fbbe382a8b53c1903a962222e420d4a0&type=album',
  'https://sun9-71.userapi.com/impg/pObJlZNNvNGf9OMWsNX9hsH_dyEKirEtmcD6aw/qWNVePIz-cU.jpg?size=1620x2160&quality=95&sign=30f612de1b7216fbe73dbac812b57572&type=album',
  'https://sun9-17.userapi.com/impg/X_fZYWepf8zZIdqpee_K19mawYaUE0HJkoYg6w/vML74qQihx0.jpg?size=1620x2160&quality=95&sign=e73e3bb6c2e061462228a19212e497bb&type=album',
  'https://sun9-80.userapi.com/impg/tuAIfWP96HCoi1R3g0tNftpwKC5EePyNDJKb7A/83wIMbMIq9Q.jpg?size=1620x2160&quality=95&sign=aa629e35eb22b35b837a1122fa90d2ee&type=album',
  'https://sun9-75.userapi.com/impg/UaV8WvMq5Zl3M7SXLjTcfHRyizmOpH8LwzQrww/oEz5gOzgHKw.jpg?size=1620x2160&quality=95&sign=66ef497618abedd415fb174593e41eb2&type=album',
  'https://sun9-78.userapi.com/impg/nt-cE0L9-NVA9VvoHrLi8uAerqTilMGr9v9L6w/yeWGyZgUOig.jpg?size=1620x2160&quality=95&sign=3ce1d55fec1b4f24a54386ce940d736f&type=album',
  'https://sun9-71.userapi.com/impg/8TqXcMHiIHuG1acOgvySmI5VAMXUfOjntHBxhg/Sk_fbLFs9Ik.jpg?size=1620x2160&quality=95&sign=74dde7fe66082789467c513169a927cb&type=album',
  'https://sun9-29.userapi.com/impg/id1AGCZ-GrJUWcP2QB6fuMOzRnvh7Jtf987p1w/-Wt8LEcyIKU.jpg?size=1620x2160&quality=95&sign=b398a74488e89ddb9b8bdfeaef42ec55&type=album'
];

const image = document.querySelector('.image');
const button = document.querySelector('.button');

const getRandomImage = (imagesArray) => {
  const randomImage = Math.floor(Math.random() * imagesArray.length);

  image.src = imagesArray[randomImage];
}

getRandomImage(imagesArray);

button.addEventListener('click', () => getRandomImage(imagesArray));
let flag =  false;

export default function ThrowPromise() {
  // if (flag) {
  //   return <p>正しく表示できました。</p>;
  // }
  throw new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   flag = true;
    //   resolve('Susccess!!');
    // }, 3000);
  });
}
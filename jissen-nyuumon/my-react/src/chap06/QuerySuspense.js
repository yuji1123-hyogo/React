import { useQuery } from 'react-query';

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

const fetchWeather = async () => {
  await sleep(2000);
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&appid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
  if (res.ok) { return res.json(); }
  throw new Error(res.statusText);
};

export default function QuerySuspense() {
  const { data } = useQuery('weather', fetchWeather);
  // const { data } = useQuery('weather', fetchWeather, { suspense: true });

  return (
    <figure>
      <img
      src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
      alt={data?.weather?.[0]?.main} />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  );
}
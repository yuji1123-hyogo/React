// 模擬天気APIデータ
const weatherData = {
  tokyo: {
    city: '東京',
    temperature: 22,
    condition: '曇り',
    humidity: 65,
    icon: '☁️',
  },
  osaka: {
    city: '大阪',
    temperature: 25,
    condition: '晴れ',
    humidity: 45,
    icon: '☀️',
  },
  sapporo: {
    city: '札幌',
    temperature: 15,
    condition: '雨',
    humidity: 80,
    icon: '🌧️',
  },
}

// 模擬API関数（実際のAPIのように遅延を追加）
export const fetchWeather = async cityKey => {
  await new Promise(resolve => setTimeout(resolve, 1000)) // 1秒の遅延

  if (!weatherData[cityKey]) {
    throw new Error('都市が見つかりません')
  }

  return weatherData[cityKey]
}

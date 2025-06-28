import { useQuery } from '@tanstack/react-query'
import { fetchWeather } from '../api/fetchWeather'
import { useState } from 'react'

// 天気情報表示コンポーネント
function WeatherDisplay({ weather, onRefresh, isFetching }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3>📍 {weather.city}の天気情報</h3>

      <div style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <div>
          {weather.icon} {weather.condition}
        </div>
        <div>🌡️ 気温: {weather.temperature}°C</div>
        <div>💧 湿度: {weather.humidity}%</div>
      </div>

      <div style={{ marginTop: '15px' }}>
        <button
          onClick={onRefresh}
          disabled={isFetching}
          style={{
            padding: '8px 16px',
            backgroundColor: isFetching ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isFetching ? 'not-allowed' : 'pointer',
          }}
        >
          {isFetching ? '更新中...' : '手動更新'}
        </button>
      </div>
    </div>
  )
}

function WeatherApp() {
  const [selectedCity, setSelectedCity] = useState('tokyo')

  // TODO: useQueryを実装
  // - queryKey: ['weather', selectedCity]
  // - queryFn: () => fetchWeather(selectedCity)
  // - isLoading, error, dataを使用
  const {
    data: weather,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['weather', selectedCity],
    queryFn: () => fetchWeather(selectedCity),
    staleTime: 1000 * 60 * 2, // 2分間新鮮
    cacheTime: 1000 * 60 * 5, // 5分間キャッシュ
  })

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🌤️ 天気アプリ</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>
          都市を選択:
          <select
            value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="tokyo">東京</option>
            <option value="osaka">大阪</option>
            <option value="sapporo">札幌</option>
          </select>
        </label>
      </div>

      {/* TODO: 状態に応じた表示を実装 */}

      {/* isLoading時: "天気情報を取得中..." */}
      {isLoading && (
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            color: '#666',
            border: '1px solid #eee',
            borderRadius: '8px',
          }}
        >
          天気情報を取得中...
        </div>
      )}
      {/* error時: "エラー: {error.message}" */}
      {error && (
        <div
          style={{
            padding: '15px',
            backgroundColor: '#ffe6e6',
            color: '#cc0000',
            border: '1px solid #ffcccc',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        >
          ❌ エラー: {error.message}
          <div style={{ marginTop: '10px' }}>
            <button
              onClick={() => refetch()}
              style={{
                padding: '5px 10px',
                backgroundColor: '#cc0000',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              再試行
            </button>
          </div>
        </div>
      )}
      {/* data時: 天気情報の表示 */}
      {weather && (
        <WeatherDisplay
          weather={weather}
          onRefresh={refetch}
          isFetching={isFetching}
        />
      )}
    </div>
  )
}

export default WeatherApp

import React, { useState } from 'react'
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// QueryClientの作成
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5分
      cacheTime: 10 * 60 * 1000, // 10分
    },
  },
})

// 提供されたAPI関数
const fetchUsers = () =>
  Promise.resolve([
    { id: 1, name: '田中太郎', email: 'tanaka@example.com', role: 'admin' },
    { id: 2, name: '佐藤花子', email: 'sato@example.com', role: 'user' },
    { id: 3, name: '鈴木一郎', email: 'suzuki@example.com', role: 'user' },
  ])

const fetchUserDetail = id =>
  Promise.resolve({
    id,
    name: `更新された${id}番目のユーザー`,
    email: `updated${id}@example.com`,
    role: 'admin',
    lastLogin: new Date().toLocaleString(),
    profile: `最終更新: ${new Date().toLocaleString()}`,
  })

const updateUserProfile = id =>
  new Promise(resolve => setTimeout(resolve, 1000))

// ユーザーリストコンポーネント
function UserList({ onSelectUser, selectedUserId }) {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) return <div>📡 ユーザーリスト読み込み中...</div>
  if (error) return <div>❌ エラー: {error.message}</div>

  return (
    <div>
      <h3>👥 ユーザーリスト</h3>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        {users?.map(user => (
          <div
            key={user.id}
            style={{
              padding: '12px',
              margin: '8px 0',
              border:
                selectedUserId === user.id
                  ? '2px solid #007bff'
                  : '1px solid #eee',
              borderRadius: '6px',
              backgroundColor: selectedUserId === user.id ? '#f8f9fa' : 'white',
              cursor: 'pointer',
            }}
          >
            <div>
              <strong>{user.name}</strong>
              <span
                style={{
                  marginLeft: '8px',
                  padding: '2px 6px',
                  backgroundColor:
                    user.role === 'admin' ? '#dc3545' : '#28a745',
                  color: 'white',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
              >
                {user.role}
              </span>
            </div>
            <div style={{ color: '#666', fontSize: '14px' }}>{user.email}</div>
            <button
              onClick={() => onSelectUser(user.id)}
              style={{
                marginTop: '8px',
                padding: '6px 12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              📋 詳細を見る
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ユーザー詳細コンポーネント
function UserDetail({ userId }) {
  const queryClient = useQueryClient()
  const [isUpdating, setIsUpdating] = useState(false)

  // ユーザー詳細を取得（userIdが存在する場合のみ）
  const {
    data: userDetail,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['userDetail', userId],
    queryFn: () => fetchUserDetail(userId),
    enabled: !!userId, // userIdが存在する場合のみクエリを実行
  })

  // refetchを使った詳細のみ更新
  const handleDetailRefresh = async () => {
    try {
      console.log('🔄 詳細のみ更新開始...')
      await refetch()
      console.log('✅ 詳細更新完了')
    } catch (error) {
      console.error('❌ 詳細更新エラー:', error)
    }
  }

  // invalidateを使った全体更新
  const handleProfileUpdate = async () => {
    setIsUpdating(true)
    try {
      console.log('🚀 プロフィール更新開始...')

      // 1. サーバーでプロフィールを更新
      await updateUserProfile(userId)

      // 2. 関連する全てのクエリを無効化
      await queryClient.invalidateQueries({ queryKey: ['users'] })
      await queryClient.invalidateQueries({ queryKey: ['userDetail'] })

      console.log('✅ プロフィール更新完了（全データ更新）')
    } catch (error) {
      console.error('❌ プロフィール更新エラー:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  if (!userId) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '40px',
          color: '#666',
          border: '2px dashed #ddd',
          borderRadius: '8px',
        }}
      >
        👈 左側のリストからユーザーを選択してください
      </div>
    )
  }

  if (isLoading) return <div>📡 ユーザー詳細読み込み中...</div>
  if (error) return <div>❌ エラー: {error.message}</div>

  return (
    <div>
      <h3>👤 ユーザー詳細</h3>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: 'white',
        }}
      >
        {isFetching && (
          <div
            style={{
              backgroundColor: '#e3f2fd',
              padding: '8px',
              borderRadius: '4px',
              marginBottom: '16px',
              color: '#1976d2',
            }}
          >
            🔄 データを更新中...
          </div>
        )}

        <div style={{ marginBottom: '12px' }}>
          <strong>名前:</strong> {userDetail?.name}
        </div>
        <div style={{ marginBottom: '12px' }}>
          <strong>メール:</strong> {userDetail?.email}
        </div>
        <div style={{ marginBottom: '12px' }}>
          <strong>役割:</strong>
          <span
            style={{
              marginLeft: '8px',
              padding: '2px 6px',
              backgroundColor:
                userDetail?.role === 'admin' ? '#dc3545' : '#28a745',
              color: 'white',
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            {userDetail?.role}
          </span>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <strong>最終ログイン:</strong> {userDetail?.lastLogin}
        </div>
        <div
          style={{
            marginBottom: '20px',
            padding: '8px',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
          }}
        >
          <strong>プロフィール:</strong> {userDetail?.profile}
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={handleDetailRefresh}
            disabled={isFetching}
            style={{
              padding: '10px 16px',
              backgroundColor: isFetching ? '#6c757d' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: isFetching ? 'not-allowed' : 'pointer',
              fontSize: '14px',
            }}
          >
            {isFetching ? '🔄 更新中...' : '🔄 詳細のみ更新 (refetch)'}
          </button>

          <button
            onClick={handleProfileUpdate}
            disabled={isUpdating || isFetching}
            style={{
              padding: '10px 16px',
              backgroundColor: isUpdating || isFetching ? '#6c757d' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: isUpdating || isFetching ? 'not-allowed' : 'pointer',
              fontSize: '14px',
            }}
          >
            {isUpdating ? '🚀 更新中...' : '🚀 プロフィール更新 (invalidate)'}
          </button>
        </div>

        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#fff3cd',
            borderRadius: '6px',
            fontSize: '13px',
          }}
        >
          <strong>💡 動作確認:</strong>
          <br />• <strong>詳細のみ更新</strong>:
          この詳細画面の時刻のみが更新されます
          <br />• <strong>プロフィール更新</strong>:
          リストと詳細の両方が更新されます
        </div>
      </div>
    </div>
  )
}

// メインアプリコンポーネント
function UserManagementApp() {
  const [selectedUserId, setSelectedUserId] = useState(null)

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        👥 useQuery演習: ユーザー管理アプリ
      </h1>

      <div style={{ display: 'flex', gap: '30px', minHeight: '500px' }}>
        <div style={{ flex: 1 }}>
          <UserList
            onSelectUser={setSelectedUserId}
            selectedUserId={selectedUserId}
          />
        </div>

        <div style={{ flex: 1 }}>
          <UserDetail userId={selectedUserId} />
        </div>
      </div>

      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          fontSize: '14px',
        }}
      >
        <h3>🎯 学習ポイント</h3>
        <ul style={{ marginLeft: '20px' }}>
          <li>
            <strong>refetch</strong>: 特定のクエリのみを即座に再取得
          </li>
          <li>
            <strong>invalidate</strong>: 関連する全てのクエリを無効化して更新
          </li>
          <li>
            <strong>enabled</strong>: 条件に応じてクエリの実行を制御
          </li>
          <li>
            <strong>ローディング状態</strong>: isLoading, isFetching の使い分け
          </li>
        </ul>
      </div>
    </div>
  )
}

import React, { useState, Suspense } from 'react'
import './UserSearchApp.css'

// ===== モックデータとAPI関数 =====
const MOCK_USERS = [
  {
    id: 1,
    name: '田中太郎',
    email: 'tanaka@example.com',
    department: '開発部',
    avatar: '👨‍💻',
  },
  {
    id: 2,
    name: '佐藤花子',
    email: 'sato@example.com',
    department: 'デザイン部',
    avatar: '👩‍🎨',
  },
  {
    id: 3,
    name: '鈴木一郎',
    email: 'suzuki@example.com',
    department: '営業部',
    avatar: '👨‍💼',
  },
  {
    id: 4,
    name: '山田美咲',
    email: 'yamada@example.com',
    department: 'マーケティング部',
    avatar: '👩‍💼',
  },
  {
    id: 5,
    name: '高橋健太',
    email: 'takahashi@example.com',
    department: '開発部',
    avatar: '👨‍💻',
  },
]

// ユーザー検索API（模擬）
function fetchUsers(query) {
  return new Promise(resolve => {
    setTimeout(() => {
      const filtered = MOCK_USERS.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      )
      resolve(filtered)
    }, 1000)
  })
}

// ユーザー詳細取得API（模擬）
function fetchUserDetails(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      const user = MOCK_USERS.find(u => u.id === userId)
      if (user) {
        resolve({
          ...user,
          bio: `${user.name}です。${user.department}で働いています。ReactとTypeScriptを使った開発が得意です。`,
          projects: [
            `プロジェクトA - ユーザー管理システム`,
            `プロジェクトB - ECサイト構築`,
            `プロジェクトC - モバイルアプリ`,
          ],
          joinDate: '2023-04-01',
          skills: ['React', 'TypeScript', 'Node.js', 'Python'],
        })
      }
    }, 800)
  })
}

// ===== データ取得用カスタムフック =====
function useAsyncData(asyncFunction, dependency) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    if (!dependency) return

    let cancelled = false
    setLoading(true)

    asyncFunction(dependency).then(result => {
      if (!cancelled) {
        setData(result)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [dependency, asyncFunction])

  if (loading || !data) {
    throw new Promise(() => {}) // Suspenseをトリガー
  }

  return data
}

// ===== メインアプリケーション =====
export function UserSearchApp() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUserId, setSelectedUserId] = useState(null)

  return (
    <div className="app">
      <header className="app-header">
        <h1>👥 ユーザー管理システム</h1>
      </header>

      <main className="app-main">
        {/* 検索バー（常に利用可能） */}
        <div className="search-section">
          <input
            type="text"
            placeholder="ユーザー名で検索..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="content-layout">
          {/* ユーザー一覧セクション */}
          <div className="users-section">
            <h2>検索結果</h2>
            {searchQuery ? (
              <Suspense fallback={<UserListSkeleton />}>
                <UserList
                  query={searchQuery}
                  onUserSelect={setSelectedUserId}
                  selectedUserId={selectedUserId}
                />
              </Suspense>
            ) : (
              <div className="no-query">検索キーワードを入力してください</div>
            )}
          </div>

          {/* ユーザー詳細セクション */}
          <div className="user-details-section">
            <h2>ユーザー詳細</h2>
            {selectedUserId ? (
              <Suspense fallback={<UserDetailsSkeleton />}>
                <UserDetails userId={selectedUserId} />
              </Suspense>
            ) : (
              <div className="no-selection">ユーザーを選択してください</div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

// ===== コンポーネント実装 =====

// ユーザー一覧表示コンポーネント
function UserList({ query, onUserSelect, selectedUserId }) {
  const users = useAsyncData(fetchUsers, query)

  if (!users || users.length === 0) {
    return (
      <div className="no-results">
        「{query}」に一致するユーザーが見つかりませんでした
      </div>
    )
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <div
          key={user.id}
          className={`user-card ${selectedUserId === user.id ? 'selected' : ''}`}
          onClick={() => onUserSelect(user.id)}
        >
          <div className="user-card-header">
            <span className="user-avatar">{user.avatar}</span>
            <div className="user-basic-info">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-department">{user.department}</p>
            </div>
          </div>
          <p className="user-email">{user.email}</p>
        </div>
      ))}
    </div>
  )
}

// ユーザー詳細表示コンポーネント
function UserDetails({ userId }) {
  const userDetails = useAsyncData(fetchUserDetails, userId)

  return (
    <div className="user-details">
      <div className="user-details-header">
        <span className="user-details-avatar">{userDetails.avatar}</span>
        <div>
          <h3 className="user-details-name">{userDetails.name}</h3>
          <p className="user-details-department">{userDetails.department}</p>
        </div>
      </div>

      <div className="user-details-content">
        <div className="detail-section">
          <h4>基本情報</h4>
          <p>
            <strong>メール:</strong> {userDetails.email}
          </p>
          <p>
            <strong>入社日:</strong> {userDetails.joinDate}
          </p>
        </div>

        <div className="detail-section">
          <h4>自己紹介</h4>
          <p>{userDetails.bio}</p>
        </div>

        <div className="detail-section">
          <h4>スキル</h4>
          <div className="skills-list">
            {userDetails.skills.map(skill => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h4>参加プロジェクト</h4>
          <ul className="projects-list">
            {userDetails.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// ===== フォールバックコンポーネント =====

function UserListSkeleton() {
  return (
    <div className="user-list-skeleton">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="user-card-skeleton">
          <div className="skeleton-header">
            <div className="skeleton skeleton-avatar"></div>
            <div className="skeleton-info">
              <div
                className="skeleton skeleton-text"
                style={{ width: '60%' }}
              ></div>
              <div
                className="skeleton skeleton-text"
                style={{ width: '40%' }}
              ></div>
            </div>
          </div>
          <div
            className="skeleton skeleton-text"
            style={{ width: '80%' }}
          ></div>
        </div>
      ))}
    </div>
  )
}

function UserDetailsSkeleton() {
  return (
    <div className="user-details-skeleton">
      <div className="skeleton-header">
        <div className="skeleton skeleton-avatar-large"></div>
        <div className="skeleton-info">
          <div
            className="skeleton skeleton-text"
            style={{ width: '70%' }}
          ></div>
          <div
            className="skeleton skeleton-text"
            style={{ width: '50%' }}
          ></div>
        </div>
      </div>

      <div className="skeleton-content">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="skeleton-section">
            <div
              className="skeleton skeleton-text"
              style={{ width: '30%', height: '20px' }}
            ></div>
            <div
              className="skeleton skeleton-text"
              style={{ width: '100%' }}
            ></div>
            <div
              className="skeleton skeleton-text"
              style={{ width: '80%' }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

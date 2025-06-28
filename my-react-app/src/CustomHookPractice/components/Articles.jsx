import React, { useState, useEffect, useCallback } from 'react'

// モックAPI関数
const mockApi = {
  getArticles: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject(new Error('サーバーエラーが発生しました'))
          return
        }

        resolve([
          {
            id: 1,
            title: 'React入門',
            content: 'Reactの基本的な概念について学びましょう',
            author: '田中太郎',
          },
          {
            id: 2,
            title: 'JavaScript ES6',
            content: 'ES6の新機能を詳しく解説します',
            author: '山田花子',
          },
          {
            id: 3,
            title: 'CSS Grid',
            content: 'CSS Gridレイアウトの使い方を説明します',
            author: '佐藤次郎',
          },
        ])
      }, 1000)
    })
  },

  createArticle: articleData => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.15) {
          reject(new Error('記事の作成に失敗しました'))
          return
        }

        const newArticle = {
          id: Date.now(),
          ...articleData,
        }
        resolve(newArticle)
      }, 1500)
    })
  },
}

// useArticlesカスタムフック
function useArticles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchArticles = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const data = await mockApi.getArticles()
      setArticles(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return {
    articles,
    loading,
    error,
    refetch: fetchArticles,
  }
}

// useCreateArticleカスタムフック
function useCreateArticle() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const createArticle = async articleData => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      const newArticle = await mockApi.createArticle(articleData)
      setSuccess(true)

      // 成功状態を3秒後にリセット
      setTimeout(() => setSuccess(false), 3000)

      return newArticle
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    createArticle,
    loading,
    error,
    success,
  }
}

// 記事一覧コンポーネント
function ArticleList() {
  const { articles, loading, error, refetch } = useArticles()

  if (loading) {
    return (
      <div className="text-center p-4">
        <div className="animate-pulse">
          <div className="text-lg">📚 読み込み中...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p className="text-red-600 mb-2">❌ エラー: {error}</p>
        <button
          onClick={refetch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          🔄 再試行
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">📋 記事一覧 ({articles.length}件)</h2>
      {articles.length === 0 ? (
        <p className="text-gray-500 text-center p-8">📝 記事がありません</p>
      ) : (
        articles.map(article => (
          <div
            key={article.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <h3 className="font-semibold text-lg text-blue-800">
              {article.title}
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {article.content}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              ✍️ 作者: {article.author}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

// 記事作成フォームコンポーネント
function ArticleForm({ onSuccess }) {
  const { createArticle, loading, error, success } = useCreateArticle()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  })

  const handleSubmit = async () => {
    try {
      await createArticle(formData)
      setFormData({ title: '', content: '', author: '' })
      if (onSuccess) onSuccess()
    } catch (err) {
      // エラーはフック内で管理済み
      alert('sippai')
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const isFormValid =
    formData.title.trim() && formData.content.trim() && formData.author.trim()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">✏️ 新規記事作成</h2>

      <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
        <div>
          <label className="block text-sm font-medium mb-1">📝 タイトル</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="記事のタイトルを入力してください"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">📄 内容</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="記事の内容を入力してください"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">👤 作者</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="あなたの名前を入力してください"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || !isFormValid}
          className="w-full px-4 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
        >
          {loading ? '🔄 作成中...' : '✨ 記事を作成'}
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-100 border border-red-300 rounded-md">
          <p className="text-red-700 text-sm">❌ {error}</p>
        </div>
      )}

      {success && (
        <div className="p-3 bg-green-100 border border-green-300 rounded-md">
          <p className="text-green-700 text-sm">
            ✅ 記事が正常に作成されました！
          </p>
        </div>
      )}
    </div>
  )
}

// メインアプリケーション
function Articles() {
  const [refreshKey, setRefreshKey] = useState(0)

  const handleArticleCreated = () => {
    // 記事一覧を更新
    setRefreshKey(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          📖 ブログ記事管理システム
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <ArticleForm onSuccess={handleArticleCreated} />
          </div>

          <div key={refreshKey}>
            <ArticleList />
          </div>
        </div>

        <footer className="text-center mt-12 text-gray-500 text-sm">
          💡 カスタムフックAPI連携の演習課題
        </footer>
      </div>
    </div>
  )
}

export default Articles

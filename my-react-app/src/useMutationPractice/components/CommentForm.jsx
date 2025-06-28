import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { submitComment } from '../api/submitComment'

const initialForm = { name: '', comment: '' }

export default function CommentForm() {
  const [formData, setFormData] = useState(initialForm)
  const mutation = useMutation({
    mutationFn: submitComment,
    onSuccess: data => {
      // 成功時の処理
      console.log('投稿されたコメント:', data)

      // フォームをリセット
      setFormData(initialForm)
    },
  })

  const handleSubmit = () => {
    mutation.mutate(formData)
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">コメント投稿</h2>

      <div className="mb-6">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="お名前を入力してください"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            コメント
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
            placeholder="コメントを入力してください"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={mutation.isPending}
          className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
            mutation.isPending
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
          }`}
        >
          {mutation.isPending ? '投稿中...' : 'コメントを投稿'}
        </button>
      </div>

      {/* 状態メッセージの表示 */}
      <div className="space-y-3">
        {mutation.isSuccess && (
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            ✅ 投稿が完了しました！
          </div>
        )}

        {mutation.isError && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            ❌ エラー: {mutation.error?.message || '不明なエラーが発生しました'}
          </div>
        )}

        {mutation.isPending && (
          <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
            🔄 コメントを投稿中です...
          </div>
        )}
      </div>

      {/* デバッグ情報（開発時に状態確認用） */}
      <div className="mt-6 p-3 bg-gray-100 rounded-md text-xs font-mono">
        <strong>状態確認:</strong>
        <br />
        isPending: {mutation.isPending.toString()}
        <br />
        isSuccess: {mutation.isSuccess.toString()}
        <br />
        isError: {mutation.isError.toString()}
        <br />
        status: {mutation.status}
      </div>
    </div>
  )
}

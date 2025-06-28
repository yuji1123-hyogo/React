// この関数をmutationFnとして使用してください
export const submitComment = async commentData => {
  // 2秒の遅延でAPIを模擬
  await new Promise(resolve => setTimeout(resolve, 2000))

  // 10%の確率でエラーを発生させる
  if (Math.random() < 0.1) {
    throw new Error('コメントの投稿に失敗しました')
  }

  // 成功時のレスポンス
  return {
    id: Date.now(),
    name: commentData.name,
    comment: commentData.comment,
    createdAt: new Date().toISOString(),
  }
}

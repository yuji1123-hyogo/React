import React, { useState, useEffect } from 'react';

// シナリオ1: propsが正しく渡されない問題
function BlogPost({ title, content, author, isPublished }) {
  return (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '15px' }}>
      <h3>{title}</h3>
      <p style={{ color: '#666' }}>by {author}</p>
      <p>{content}</p>
      {isPublished && <span style={{ color: 'green', fontSize: '12px' }}>✓ 公開済み</span>}
    </div>
  );
}

// シナリオ2: stateが期待通りに更新されない問題
function CommentForm({ onAddComment }) {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // バグがあるパターン: setCommentの更新が反映されない
    setTimeout(() => {
      if (comment.trim()) {
        onAddComment(comment);
        setComment(''); // この行がコメントアウトされている（バグ）
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <h4>コメントを追加</h4>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="コメントを入力してください..."
        style={{ width: '100%', height: '80px', margin: '10px 0' }}
      />
      <button 
        onClick={handleSubmit}
        disabled={isSubmitting}
        style={{ 
          padding: '8px 16px', 
          backgroundColor: isSubmitting ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          cursor: isSubmitting ? 'not-allowed' : 'pointer'
        }}
      >
        {isSubmitting ? '投稿中...' : 'コメント投稿'}
      </button>
    </div>
  );
}

// シナリオ3: パフォーマンス問題（重い計算処理）
function CommentList({ comments }) {
  // 問題: 毎回重い計算を実行（useMemoを使っていない）
  const processedComments = comments.map(comment => {
    // 重い処理をシミュレート
    let processed = comment;
    for (let i = 0; i < 1; i++) {
      processed = processed + '';
    }
    return {
      ...comment,
      processedContent: comment.content.toUpperCase(),
      timestamp: new Date(comment.id * 1000).toLocaleString()
    };
  });

  return (
    <div>
      <h4>コメント一覧 ({comments.length}件)</h4>
      {processedComments.map(comment => (
        <div key={comment.id} style={{ 
          border: '1px solid #eee', 
          margin: '5px 0', 
          padding: '10px',
          backgroundColor: '#f9f9f9'
        }}>
          <p>{comment.content}</p>
          <small style={{ color: '#666' }}>{comment.timestamp}</small>
        </div>
      ))}
    </div>
  );
}

// メインのブログアプリケーション
function BlogApp() {
  const [posts,setPosts] = useState([
    {
      id: 1,
      title: 'React入門',
      content: 'Reactは素晴らしいライブラリです。コンポーネントベースの開発ができます。',
      author: '田中太郎',
      isPublished: true
    },
    {
      id: 2,
      title: 'JavaScript基礎',
      content: 'JavaScriptの基本を学びましょう。',
      author: '佐藤花子', // バグ: authorが抜けている
      isPublished: false
    }
  ]);

  const [comments, setComments] = useState([
    { id: 1, content: '素晴らしい記事ですね！' },
    { id: 2, content: '参考になりました。' },
    { id: 3, content: 'もっと詳しく知りたいです。' },
    { id: 4, content: 'もっと詳しく知りたいです。' },
    { id: 5, content: 'もっと詳しく知りたいです。' },
    { id: 6, content: 'もっと詳しく知りたいです。' },
    { id: 7, content: 'もっと詳しく知りたいです。' },
    { id: 8, content: 'もっと詳しく知りたいです。' },
    { id: 9, content: 'もっと詳しく知りたいです。' },
    { id: 10, content: 'もっと詳しく知りたいです。' },
    { id: 11, content: 'もっと詳しく知りたいです。' },
    { id: 12, content: 'もっと詳しく知りたいです。' },
    { id: 13, content: 'もっと詳しく知りたいです。' },
    { id: 14, content: 'もっと詳しく知りたいです。' },
    { id: 15, content: 'もっと詳しく知りたいです。' },
    { id: 16, content: 'もっと詳しく知りたいです。' }
  ]);

  const [selectedPost, setSelectedPost] = useState(0);

  const handleAddComment = (newComment) => {
    const comment = {
      id: Date.now(),
      content: newComment
    };
    setComments(prev => [...prev, comment]);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>ブログアプリ - デバッグ実例</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>記事選択</h2>
        {posts.map((post, index) => (
          <button
            key={post.id}
            onClick={() => setSelectedPost(index)}
            style={{
              margin: '5px',
              padding: '10px',
              backgroundColor: selectedPost === index ? '#007bff' : '#f8f9fa',
              color: selectedPost === index ? 'white' : 'black',
              border: '1px solid #ddd',
              cursor: 'pointer'
            }}
          >
            {post.title}
          </button>
        ))}
      </div>

      <BlogPost
        title={posts[selectedPost].title}
        content={posts[selectedPost].content}
        author={posts[selectedPost].author}
        isPublished={posts[selectedPost].isPublished}
      />

      <CommentForm onAddComment={handleAddComment} />
      <CommentList comments={comments} />

      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#e7f3ff', 
        border: '1px solid #b3d9ff',
        borderRadius: '5px'
      }}>
        <h3>🔧 デバッグポイント</h3>
        <ul>
          <li><strong>シナリオ1:</strong> 「JavaScript基礎」を選択すると author が undefined</li>
          <li><strong>シナリオ2:</strong> コメント投稿後にフォームがクリアされない</li>
          <li><strong>シナリオ3:</strong> コメント一覧の表示が重い（Profilerで確認）</li>
        </ul>
        <p><strong>React Developer Tools</strong> を開いて確認してみましょう！</p>
      </div>
    </div>
  );
}

export default BlogApp;
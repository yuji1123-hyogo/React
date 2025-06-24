import { useState } from 'react';

export default function FormTextarea() {
  const [form, setForm] = useState({
    comment: `さまざまなフォーム要素をReactで実装する方法について解説しておきます。\n  なお、<input>要素ではtype属性を変更することで、数値スピナー、日付入力ボックスなど、さまざまな入力ボックスを表現できます。`
  });

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const show = () => {
    console.log(`コメント：${form.comment}`);
  };

  return (
    <form>
      <label htmlFor="comment">コメント：</label><br />
      <textarea id="comment" name="comment"
        cols="30" rows="7"
        value={form.comment}
        onChange={handleForm}></textarea><br />
      <button type="button" onClick={show}>
        送信</button>
    </form>
  );
}
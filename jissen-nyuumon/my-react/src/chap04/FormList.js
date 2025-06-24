import { useState } from 'react';

export default function FormList() {
  const [form, setForm] = useState({
    animal: ['dog', 'hamster']
  });

  const handleFormList = e => {
    const data = [];
    const opts = e.target.options;
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }
    setForm({
      ...form,
      [e.target.name]: data
    });
  };

  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="animal">好きな動物：</label><br />
      <select id="animal" name="animal"
        value={form.animal}
        size="4" multiple={true}
        onChange={handleFormList}>
        <option value="dog">イヌ</option>
        <option value="cat">ネコ</option>
        <option value="hamster">ハムスター</option>
        <option value="rabbit">ウサギ</option>
      </select>
      <button type="button" onClick={show}>送信</button>
    </form>
  );
}

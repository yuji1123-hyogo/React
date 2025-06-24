import { useImmer } from 'use-immer';

export default function StateNestImmer() {
  const [form, setForm] = useImmer({
    name: '山田太郎',
    address: {
      prefecture: '広島県',
      city: '榛原町'
    }
  });

  const handleForm = e => {
    setForm(form => {
      form[e.target.name] = e.target.value;
    });
  };

  const handleFormNest = e => {
    setForm(form => {
      form.address[e.target.name] = e.target.value;
    });
  };

  const show = () => {
    console.log(`${form.name}（${form.address.prefecture}・${form.address.city}）`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" name="name" type="text"
          onChange={handleForm} value={form.name} />
      </div>
      <div>
        <label htmlFor="prefecture">住所（都道府県）：</label>
        <input id="prefecture" name="prefecture" type="text"
          onChange={handleFormNest} value={form.address.prefecture} />
      </div>
      <div>
        <label htmlFor="city">住所（市町村）：</label>
        <input id="city" name="city" type="text"
          onChange={handleFormNest} value={form.address.city} />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信</button>
      </div>
    </form>
  );
}
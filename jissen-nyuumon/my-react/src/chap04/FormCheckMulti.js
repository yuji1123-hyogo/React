import { useState } from 'react';

export default function FormCheckMulti() {
  const [form, setForm] = useState({
    animal: ['dog', 'hamster']
  });

  const handleFormMulti = e => {
    const fa = form.animal;
    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }
    setForm({
      ...form,
      [e.target.name]: fa
    });
  };

  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <form>
      <fieldset>
      <legend>好きな動物：</legend>
      <label htmlFor="animal_dog">イヌ</label>
      <input id="animal_dog" name="animal"
        type="checkbox" value="dog"
        checked={form.animal.includes('dog')}
        onChange={handleFormMulti} /><br />
      <label htmlFor="animal_cat">ネコ</label>
      <input id="animal_cat" name="animal"
        type="checkbox" value="cat"
        checked={form.animal.includes('cat')}
        onChange={handleFormMulti} /><br />
      <label htmlFor="animal_hamster">ハムスター</label>
      <input id="animal_hamster" name="animal"
        type="checkbox" value="hamster"
        checked={form.animal.includes('hamster')}
        onChange={handleFormMulti} /><br />
      <label htmlFor="animal_rabbit">ウサギ</label>
      <input id="animal_rabbit" name="animal"
        type="checkbox" value="rabbit"
        checked={form.animal.includes('rabbit')}
        onChange={handleFormMulti} /><br />
      </fieldset>
      <button type="button" onClick={show}>送信</button>
    </form>
  );
}

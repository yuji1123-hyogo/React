import { useForm } from 'react-hook-form';
import './FormBasic.css';

export default function FormBasic() {
  const defaultValues = {
    name: '名無権兵衛',
    email: 'admin@example.com',
    gender: 'male',
    memo: ''
  };

  const { register, handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting } } = useForm({
    defaultValues
  });
  const onsubmit = data => console.log(data);
  // const onsubmit = data => {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve();
  //       console.log(data);
  //     }, 4000);
  //   });
  // }
  const onerror = err => console.log(err);

  return (
  <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
    <div>
      <label htmlFor="name">名前：</label><br/>
      <input id="name" type="text"
        {...register('name', {
          required: '名前は必須入力です。',
          maxLength: {
            value: 20,
            message: '名前は20文字以内にしてください。'
          }
        })}
      />
      <div>{errors.name?.message}</div>
    </div>
    <div>
      <label htmlFor="gender">性別：</label><br/>
      <label>
      <input type="radio" value="male"
        {...register('gender', {
          required: '性別は必須です。',
        })} />男性
      </label>
      <label>
      <input type="radio" value="female"
        {...register('gender', {
          required: '性別は必須です。',
        })} />女性
      </label>
      <div>{errors.gender?.message}</div>
    </div>
    <div>
      <label htmlFor="email">メールアドレス：</label><br/>
      <input id="email" type="email"
        {...register('email', {
          required: 'メールアドレスは必須入力です。',
          pattern: {
            value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
            message: 'メールアドレスの形式が不正です。'
          }
        })} />
      <div>{errors.email?.message}</div>
    </div>
    <div>
      <label htmlFor="memo">備考：</label><br/>
      <textarea id="memo"
        {...register('memo', {
          required: '備考は必須入力です。',
          minLength: {
            value: 10,
            message: '備考は10文字以上にしてください。'
          },
          validate: {
            ng: (value, formValues) => {
              const ngs = ['暴力', '死', 'グロ'];
              for (const ng of ngs) {
                if (value.includes(ng)) {
                  return '備考にNGワードが含まれています。';
                }
              }
              return  true;
            }
          },

          // validate: (value, formValues) => {
          //   const ngs = ['暴力', '死', 'グロ'];
          //   for (const ng of ngs) {
          //     if (value.includes(ng)) {
          //       return '備考にNGワードが含まれています。';
          //     }
          //   }
          //   return  true;
          // }
        })} />
      <div>{errors.memo?.message}</div>
    </div>
    <div>
      <button type="submit">送信</button>
      {/* <button type="submit"
        disabled={!isDirty || !isValid}>送信</button> */}
      {/* <button type="submit"
        disabled={!isDirty || !isValid || isSubmitting}>送信</button>
        {isSubmitting && <div>...送信中...</div>} */}
    </div>
  </form>
  );
}
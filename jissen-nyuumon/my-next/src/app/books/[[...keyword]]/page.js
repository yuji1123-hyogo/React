import LinkedBookDetails from '@/components/LinkedBookDetails';
import { getBooksByKeyword } from '@/lib/getter';

export default async function BookResult({ params: { keyword = 'React' } }) {
  const books = await getBooksByKeyword(keyword);
  return (
    <>
    {books.map((b,i) => (
      <LinkedBookDetails book={b} index={i + 1} key={b.id} />
    ))}
    </>
  );
}
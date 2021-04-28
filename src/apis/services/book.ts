import http from '@/libs/http';

export const getBookList = () => http.get('/books');
export const getBookDetail = (id: string) => http.get('/book', { params: { id } });
export const updateBookDetail = (
  id: string,
  info: {
    name: string;
    description: string;
    isbn: number;
    author: string;
    genre: string[];
    file?: FormData;
  },
) => http.patch('/book', { id, ...info });

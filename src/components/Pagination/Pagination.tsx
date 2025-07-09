import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      pageCount={totalPages} // общее количество страниц
      pageRangeDisplayed={5} // сколько страниц показывать в навигации
      marginPagesDisplayed={1} // сколько страниц показать в начале и в конце
      onPageChange={({ selected }: { selected: number }) =>
        onPageChange(selected + 1)
      } // selected — индекс с 0, поэтому +1
      forcePage={currentPage - 1} // текущая активная страница, индекс с 0
      containerClassName={styles.pagination} // стили контейнера пагинации
      activeClassName={styles.active} // стиль для активной страницы
      previousLabel="←" // кнопка назад
      nextLabel="→" // кнопка вперед
      breakLabel="..." // метка для пропуска страниц (например, "...")
      disabledClassName={styles.disabled} // класс для неактивных кнопок (например, если нет следующей страницы)
      pageClassName={styles.pageItem} // класс для каждой страницы (опционально)
      pageLinkClassName={styles.pageLink} // класс для ссылки в странице (опционально)
    />
  );
};

export default Pagination;

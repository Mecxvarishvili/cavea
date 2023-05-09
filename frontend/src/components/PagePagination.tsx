import React, { ReactNode } from 'react';
import { Pagination } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

interface Props {
  totalPage: number,
  currentPage: number
}
const PagePagination = ({ totalPage, currentPage}: Props) => {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const paginationItems: Array<ReactNode> = []

  function onPageChange(i: number) {
    searchParams.set("page", i.toString())
    setSearchParams(searchParams)
  }

  const createPaginationItem = (i: number) => {
    return <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Pagination.Item>
  };

  const createEllipsisItem = (i: string) => {
    return <Pagination.Ellipsis key={i} />
  }

  if(totalPage < 10) {
    for(let i = 1; i <= totalPage; i++) {
      paginationItems.push(createPaginationItem(i));
    }

  } else {

    if(currentPage < 6) {
      for(let i = 1; i <= 7; i++) {
        paginationItems.push(createPaginationItem(i));
      }
      paginationItems.push(createEllipsisItem("left"));
      paginationItems.push(createPaginationItem(totalPage));
    }
  
    if(currentPage >= 6 && totalPage - currentPage >= 5) {
      paginationItems.push(createPaginationItem(1));
      paginationItems.push(createEllipsisItem("center-left"));
      for(var i = currentPage - 2; i <= currentPage + 2; i++) {
        paginationItems.push(createPaginationItem(i));
  
      }
      paginationItems.push(createEllipsisItem("center-right"));
      paginationItems.push(createPaginationItem(totalPage));
    }
    
    if(totalPage-currentPage < 5) {
      paginationItems.push(createPaginationItem(1));
      paginationItems.push(createEllipsisItem("right"));
      for(let i = totalPage - 6; i <= totalPage; i++) {
        paginationItems.push(createPaginationItem(i));
      }
    }
  }

  return (
    <Pagination>
      {paginationItems}
    </Pagination>
  );
};

export default PagePagination;
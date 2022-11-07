import React, {useState} from 'react';
import styles from "./Paginator.module.css";

type PaginatorType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    onClickChangePage: (page: number) => void
}

const Paginator = React.memo((props: PaginatorType) => {

    const {totalItemsCount, pageSize, currentPage, onClickChangePage, portionSize} = props
    let pages = []
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const[portionNumber, setPortionNumber] = useState(Math.floor(currentPage/portionSize) + 1)
    console.log(portionNumber)
    const leftPortionNumberPage = (portionNumber - 1) * portionSize + 1
    const rightPortionNumberPage = portionNumber * portionSize
    return (
        <div>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(() => portionNumber - 1)}>PREV</button>}
            {pages.filter(p => p>=leftPortionNumberPage && p<=rightPortionNumberPage).map(p => {
                return <span key={p}
                             className={currentPage === p ? `${styles.page} + ${styles.selectedPage}` : styles.page}
                             onClick={() => onClickChangePage(p)}>{p}</span>
            })
            }
            {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>)
})


export default Paginator;
import React from 'react';
import styles from "../Users.module.css";

type PageOfUsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickChangePage: (page: number) => void
}

const PagesOfUsers = (props: PageOfUsersPropsType) => {
    const {totalUsersCount, pageSize, currentPage, onClickChangePage} = props
    let pages = []
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((p, i) => {
                return <span key={i}
                             className={currentPage === p ? `${styles.page} + ${styles.selectedPage}` : styles.page}
                             onClick={() => onClickChangePage(p)}>{p}</span>
            })
            }
        </div>)
}


export default PagesOfUsers;
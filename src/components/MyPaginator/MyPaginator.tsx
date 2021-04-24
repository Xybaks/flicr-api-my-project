import React from "react";
import {Pagination} from "@material-ui/lab";

type MyPaginatorPropsType = {
    pagesCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const MyPaginator:React.FC<MyPaginatorPropsType> = (props) => {

    const {pagesCount, currentPage, onPageChanged}=props

    const onPageChangedHandler = (event: React.ChangeEvent<unknown>, value: number) => {
        onPageChanged(value)
        console.log(value)
    }

    return <>
        {pagesCount === 0 ?
            <></>
            : < Pagination count={pagesCount} page={currentPage}
                           onChange={onPageChangedHandler}
                           showFirstButton showLastButton/>
        }
    </>
}
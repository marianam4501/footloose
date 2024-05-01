import { useRecoilState, useRecoilValue } from "recoil";
import { productState } from "../../atoms/productState";
import "./styles.scss";
import { FC, useEffect, useState } from 'react';
import {Pagination} from 'react-bootstrap';
import { paginationState } from "../../atoms/paginationState";

interface PaginationProps {
    //children: React.ReactNode;
}

const ListPagination: FC<PaginationProps> = () => {
    const productList = useRecoilValue(productState);
    const [paginationInfo, setPaginationInfo] = useRecoilState(paginationState);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentABtn, setCurrentABtn] = useState<number>(1);
    const [currentBBtn, setCurrentBBtn] = useState<number>(2);
    const [currentCBtn, setCurrentCBtn] = useState<number>(3);
    const pageSize = 10;

    function handlePrev(){
        setCurrentPage(currentPage - 1);
    }

    function handleClick(page: number){
        setCurrentPage(page - 1);
    }

    function handleNext(){
        setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
        if(currentPage === 0){
            setCurrentABtn(currentPage + 1);
            setCurrentBBtn(currentPage + 2);
            setCurrentCBtn(currentPage + 3);
        } 
        if(currentPage == (currentABtn - 1) && currentPage != 0) {
            const aBtn =currentABtn;
            setCurrentABtn(aBtn - 1);
            setCurrentBBtn(aBtn);
            setCurrentCBtn(aBtn + 1);
        }
        if(currentPage == (currentCBtn - 1) && currentPage + 1 != totalPages) {
            const cBtn = currentCBtn;
            setCurrentABtn(cBtn - 1);
            setCurrentBBtn(cBtn);
            setCurrentCBtn(cBtn + 1);
        }
        
        const start = currentPage * pageSize;
        const end = start + pageSize;
        setPaginationInfo({
            startIndex: start,
            endIndex: end,
        });

    }, [currentPage]);

    useEffect(() => {
        //setFilterList(productList);
        const totalPages = Math.ceil(productList.length / pageSize);
        setTotalPages(totalPages);
        setCurrentPage(0);
    }, [productList]);

    return(
        <>
            <Pagination className="pagination">
                <Pagination.Prev onClick={handlePrev} disabled={currentPage === 0} />
                <Pagination.Item active={currentPage === currentABtn - 1} disabled={totalPages < 1} onClick={() => handleClick(currentABtn)}>
                    {currentABtn}
                </Pagination.Item>
                <Pagination.Item active={currentPage === currentBBtn - 1} disabled={totalPages < 2} onClick={() => handleClick(currentBBtn)}>
                    {currentBBtn}
                </Pagination.Item>
                <Pagination.Item active={currentPage === currentCBtn - 1} disabled={totalPages < 3} onClick={() => handleClick(currentCBtn)}>
                    {currentCBtn}
                </Pagination.Item>
                <Pagination.Next onClick={handleNext} disabled={currentPage === totalPages - 1 || totalPages === 0} />
            </Pagination>
        </>
    );
};

export default ListPagination;
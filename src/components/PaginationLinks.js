import React from "react"
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap'
import '../styles/pagination.scss'
const PaginationLinks = ({currentPage, numPages}) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const previousPage = currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
    const nextPage = '/page/' + (currentPage + 1).toString()
    return( 
        <Pagination>
            {isFirst ? (
                <PaginationItem disabled>
                    <PaginationLink previous href="/"></PaginationLink>
                </PaginationItem>
            ) : (
                <PaginationItem>
                    <PaginationLink previous href={previousPage}></PaginationLink>
                </PaginationItem>
            )}
            {Array.from({ length: numPages }, (_,i) =>
              currentPage === i + 1 ? (
                <PaginationItem active key={`page-number${i+1}`}>
                    <PaginationLink href={`/${i === 0 ? '' : 'page/' + (i+1)}`}>
                        {i+1}
                    </PaginationLink>
                </PaginationItem>
            ) : (
                <PaginationItem active key={`page-number${i+1}`}>
                    <PaginationLink href={`/${i === 0 ? '' : 'page/' + (i+1)}`}>
                        {i+1}
                    </PaginationLink>
                </PaginationItem>
            ))}
            {isLast ? (
                <PaginationItem disabled>
                    <PaginationLink next href={nextPage}/>
                </PaginationItem>
            ) : (
                <PaginationItem>
                    <PaginationLink next href={nextPage}/>
                </PaginationItem>   
            )}
        </Pagination>        
    )
}

export default PaginationLinks
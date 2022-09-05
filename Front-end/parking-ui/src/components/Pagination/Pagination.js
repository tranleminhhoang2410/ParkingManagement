import classNames from "classnames/bind";
import styles from './Pagination.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { usePagination, DOTS } from '~/hooks/usePagination';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Pagination({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className }) {

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul
            className={cx('pagination-container', { [className]: className })}
        >
            <li
                className={cx('pagination-item', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <Button className={cx('prev-btn')} leftIcon={<FontAwesomeIcon icon={faAngleLeft} />}></Button>
            </li>
            {
                paginationRange.map(pageNumber => {
                    if (pageNumber === DOTS) {
                        return <li className="pagination-item dots"><Button>&#8230;</Button></li>;
                    }

                    return (
                        <li
                            className={cx('pagination-item', {
                                selected: pageNumber === currentPage
                            })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            <Button className={cx('pagination-btn', {
                                actived: pageNumber === currentPage
                            })}>{pageNumber}</Button>
                        </li>
                    );
                })
            }
            <li
                className={cx('pagination-item', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <Button className={cx('next-btn')} rightIcon={<FontAwesomeIcon icon={faAngleRight} />}></Button>
            </li>
        </ul >
    );
}

export default Pagination;
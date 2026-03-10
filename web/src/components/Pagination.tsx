const Pagination = ({
	page,
	pageSize,
	pageCount,
	total,
}: {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}) => {
	const isFirstPage = page === 1;
	const isLastPage = page === pageCount;

	const prevPage = page - 1;
	const nextPage = page + 1;

	const prevPageUrl = isFirstPage ? '#' : `?page=${prevPage}`;
	const nextPageUrl = isLastPage ? '#' : `?page=${nextPage}`;

	return (
		<div className='flex items-center gap-4 text-sm'>
			<a
				href={prevPageUrl}
				aria-disabled={isFirstPage}
				className={isFirstPage ? 'pointer-events-none opacity-50' : ''}
			>
				Previous
			</a>
			<span>
				Page {page} of {pageCount} ({total} items, {pageSize} per page)
			</span>
			<a
				href={nextPageUrl}
				aria-disabled={isLastPage}
				className={isLastPage ? 'pointer-events-none opacity-50' : ''}
			>
				Next
			</a>
		</div>
	);
};

export default Pagination;

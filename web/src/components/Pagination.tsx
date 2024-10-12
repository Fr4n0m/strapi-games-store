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

	return <div>Pagination</div>;
};

export default Pagination;

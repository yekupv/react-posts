import { useMemo } from "react";

export const usePagination = (totalPages) => {
	const pages = useMemo(() => {
		const totalPagesArr = [];
		for (let index = 0; index < totalPages; index++) {
			totalPagesArr.push(index + 1);
		}
		return totalPagesArr;
	}, [totalPages]);
	return pages;
};

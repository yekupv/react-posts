import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostListFilter = ({ filter, setFilter }) => {
	return (
		<div className='postListFilter'>
			<MyInput
				value={filter.query}
				onChange={(e) =>
					setFilter({ ...filter, query: e.target.value })
				}
				placeholder='Search...'
			/>
			<div>
				<MySelect
					value={filter.sort}
					onChange={(selectedSort) =>
						setFilter({ ...filter, sort: selectedSort })
					}
					defaultValue={"Sort by"}
					options={[
						{
							value: "title",
							name: "Name",
						},
						{
							value: "body",
							name: "Description",
						},
					]}
				/>
			</div>
		</div>
	);
};
export default PostListFilter;

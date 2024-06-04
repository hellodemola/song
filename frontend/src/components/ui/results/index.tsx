import { Link } from "react-router-dom";

interface ISongs {
	songs: string[];
}

function Results({ songs }: ISongs) {
	return (
		<div className='my-6 grid grid-cols-2 cursor-pointer gap-2'>
			{songs?.map((each: string, _: number) => (
				<Link to={`/result?result=${each}`} key={_ + 1} className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500'>
					{each}
				</Link>
			))}
		</div>
	);
}

export default Results;

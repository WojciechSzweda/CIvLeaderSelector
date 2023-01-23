import type { ILeader } from '../leaders';
import Image from 'next/image'

const LeaderCard = ({ leader }: { leader: ILeader }) => {
	return (
		<label className="cursor-pointer">
			<section
				className="flex items-center m-2 px-2 py-1 border-solid border-2 rounded-md gap-2"
				style={{ background: '#082c4a', borderColor: '#144870' }}
			>
				<input type="checkbox" />
				<Image
					className="bg-green-300 max-w-[50px] w-[50px] max-h-[50px] h-[50px] rounded-full"
					src={leader.url}
					alt=""
					width={50}
					height={50}
				/>
				<div className="justify-center text-white">{leader.name}</div>
			</section>
		</label>
	);
};

export default LeaderCard;

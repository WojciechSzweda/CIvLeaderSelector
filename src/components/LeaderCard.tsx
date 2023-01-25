import type { ILeader } from '../leaders';
import Image from 'next/image'

const LeaderCard = ({
	leader,
	isSelected,
	onSelect,
	disabled,
}: {
	leader: ILeader
	isSelected?: boolean
	onSelect?: (id: number, selected: boolean) => void
	disabled?: boolean
}) => {
	return (
		<label className={`cursor-pointer ${disabled ? 'cursor-default' : ''}`}>
			<section
				className="flex items-center m-2 px-2 py-1 border-solid border-2 rounded-md gap-2"
				style={{ background: '#082c4a', borderColor: '#144870' }}
			>
				{!disabled &&
					<input type="checkbox" checked={isSelected} onChange={() => onSelect?.(leader.id, !isSelected)} />
				}
				<Image
					className="bg-green-300 max-w-[50px] w-[50px] max-h-[50px] h-[50px] rounded-full border-2 border-[#80715c]"
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

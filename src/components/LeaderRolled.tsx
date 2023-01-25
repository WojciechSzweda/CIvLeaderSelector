import { leaders } from '../leaders'
import LeaderCard from './LeaderCard'

const LeaderRolled = ({ rolledIds, onBack}: { rolledIds: number[], onBack: () => void }) => {
	return <>
		<div className="overflow-y-auto scrollbar-thin">
			{leaders.filter(x => rolledIds.includes(x.id)).map(leader =>
				<LeaderCard leader={leader} key={leader.name} disabled />
			)}
		</div>
		<div className="justify-center">
			<button className="bg-[#113356] text-[#57c1d4] px-2 text-xl border-gold border-2" onClick={onBack}>Go back</button>
		</div>
	</>
}

export default LeaderRolled
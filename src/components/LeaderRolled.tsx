import { leaders } from '../leaders'
import LeaderCard from './LeaderCard'

const LeaderRolled = ({ rolledIds }: { rolledIds: number[]}) => {
	return <>
		<div className="overflow-y-auto scrollbar-thin">
			{leaders.filter(x => rolledIds.includes(x.id)).map(leader =>
				<LeaderCard leader={leader} key={leader.name} disabled />
			)}
		</div>
	</>
}

export default LeaderRolled
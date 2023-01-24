import { useState } from 'react'
import type { ILeader} from '../leaders';
import { leaders } from '../leaders'
import LeaderCard from './LeaderCard'

const LeaderSelection = ({ onRoll }: { onRoll: (ids: number[]) => void }) => {

	const [selectedLeaderIds, setSelectedLeaderIds] = useState<number[]>(leaders.map(x => x.id))
	const [quantity, setQuantity] = useState<number>(1)
	function onSelect(leaderId: number, checked: boolean) {
		if (checked) {
			setSelectedLeaderIds([...selectedLeaderIds, leaderId])
		} else {
			setSelectedLeaderIds(selectedLeaderIds.filter(x => x !== leaderId))
		}
	}
	function isSelected(leader: ILeader) {
		return selectedLeaderIds.includes(leader.id)
	}
	function selectAll() {
		setSelectedLeaderIds(leaders.map(x => x.id))
	}
	function unselectAll() {
		setSelectedLeaderIds([])
	}

	function roll(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const idsToPick = [...selectedLeaderIds]
		function rollLeaderId() {
			const randomIndex = Math.floor(Math.random() * idsToPick.length)
			return idsToPick.splice(randomIndex, 1)[0] as number
		}
		onRoll(Array.from({ length: quantity }).map(rollLeaderId))
	}
	function onQuantityInput(e: React.ChangeEvent<HTMLInputElement>) {
		setQuantity(Number(e.target.value))
	}
	
	return <>
		<div className="justify-center flex gap-4">
			<button className="bg-white px-2" onClick={selectAll}>Select all</button>
			<button className="bg-white px-2" onClick={unselectAll}>Unselect all</button>
		</div>
		<div className="grid lg:grid-cols-4 sm:grid-cols-2 overflow-y-auto scrollbar-thin">
			{leaders.map(leader =>
				<LeaderCard leader={leader} key={leader.name} isSelected={isSelected(leader)} onSelect={onSelect} />
			)}
		</div>
		<form className="justify-center flex gap-4 p-3" onSubmit={roll}>
			<label className="text-white">Quantity
				<input
					className="border-red-600 border-solid border text-black ml-1 valid:border-gray-600"
					step="1" value={quantity} type="number" min="1" max={selectedLeaderIds.length} onInput={onQuantityInput}
				/>
			</label>
			<button className="bg-white px-2">ROLL</button>
		</form>
	</>
}

export default LeaderSelection
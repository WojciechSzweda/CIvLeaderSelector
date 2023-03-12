import { useMemo, useState } from 'react'
import type { ILeader} from '../leaders';
import { leaders } from '../leaders'
import LeaderCard from './LeaderCard'

function getLeaders() {
	const overrides = leaders.filter(leader => leader.overrides).map(leader => leader.overrides) as number[]
	return leaders.filter(x => !overrides.includes(x.id))
}

const LeaderSelection = ({ onRoll }: { onRoll: (ids: number[]) => void }) => {

	const [selectedLeaderIds, setSelectedLeaderIds] = useState<number[]>(leaders.map(x => x.id))
	const [quantityInputValue, setQuantityInputValue] = useState<number | null>(1)
	const quantity = useMemo(() => Number(quantityInputValue), [quantityInputValue])
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
		const value = e.target.value
		if (value === '') {
			setQuantityInputValue(null)
		} else {
			setQuantityInputValue(Number(e.target.value))
		}
	}
	
	return <>
		<div className="justify-center flex gap-4">
			<div className="hover:bg-[#0e83a0] bg-[#0f4066]">
				<button className="bg-[#09365d] px-2 m-1 text-white border-[#082c4b] border" onClick={selectAll}>Select all</button>
			</div>
			<div className="hover:bg-[#0e83a0] bg-[#0f4066]">
				<button className="bg-[#09365d] px-2 m-1 text-white border-[#082c4b] border" onClick={unselectAll}>None</button>
			</div>
		</div>
		<div className="grid lg:grid-cols-4 sm:grid-cols-2 overflow-y-auto scrollbar-thin">
			{getLeaders().map(leader =>
				<LeaderCard leader={leader} key={leader.name} isSelected={isSelected(leader)} onSelect={onSelect} />
			)}
		</div>
		<form className="justify-center flex gap-4 p-3 items-center" onSubmit={roll}>
			<label className="text-white">Quantity
				<input
					className="border-red-600 border-solid border text-black ml-1 valid:border-gray-600"
					step="1" value={quantityInputValue ?? undefined} type="number" min="1" max={selectedLeaderIds.length} onInput={onQuantityInput}
					required
				/>
				{ quantityInputValue }
			</label>
			<div className="bg-gold-dark border-2 border-gold">
				<button
					className="
						bg-gradient-to-b from-green-light via-green to-green px-
						text-white rounded-lg border-gold border mx-0.5 px-32 inset-shadow
						text-xl
					"
				>ROLL</button>
			</div>
		</form>
	</>
}

export default LeaderSelection
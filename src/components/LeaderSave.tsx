'use client';

import { useEffect, useState } from 'react';


const LeaderSave = ({
	selectedLeaderIds,
	onLoad,
}: {
	selectedLeaderIds: number[]
	onLoad: (ids: number[]) => void
}) => {
	const SELECTED_IDS_KEY = 'selectedIds'

	const [hasSaved, setHasSaved] = useState(false)

	function save() {
		localStorage.setItem(SELECTED_IDS_KEY, JSON.stringify(selectedLeaderIds))
		setHasSaved(true)
	}

	useEffect(() => {
		const hasSavedSelectedIds = !!localStorage?.getItem(SELECTED_IDS_KEY)
		setHasSaved(hasSavedSelectedIds)
		if (hasSavedSelectedIds) {
			load()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function load() {
		const ids = JSON.parse(localStorage.getItem(SELECTED_IDS_KEY) as string) as number[]
		console.log(ids)
		if (Array.isArray(ids)) {
			onLoad(ids)
		}
	}
	return (
		<>
			<div className="hover:bg-[#0e83a0] bg-[#0f4066]">
				<button disabled={!selectedLeaderIds.length}
					className="bg-[#09365d] px-2 m-1 text-white border-[#082c4b] border"
					onClick={save}
				>Save</button>
			</div>
			{
				hasSaved &&
				<div className="hover:bg-[#0e83a0] bg-[#0f4066]">
					<button className="bg-[#09365d] px-2 m-1 text-white border-[#082c4b] border" onClick={load}>Load</button>
				</div>
			}
		</>
	);
};

export default LeaderSave;

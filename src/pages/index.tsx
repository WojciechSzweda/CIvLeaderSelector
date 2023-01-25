import { type NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import LeaderRolled from '../components/LeaderRolled';
import LeaderSelection from '../components/LeaderSelection';

const FullHeightPage = () => (
	<style global jsx>{`
		html,
		body,
		body > div:first-child,
		div#__next,
		div#__next > div {
		  height: 100%;
		}
	  `}</style>
)

const Home: NextPage = () => {
	const [rolledIds, setRolledIds] = useState<number[]>([])
	return (
		<>
			<Head>
				<title>Civ 6 Leader Selector</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<FullHeightPage />
			<main
				className="flex min-h-screen flex-col items-center justify-center bg-cover p-7 h-full"
				style={{ backgroundImage: 'url(./background.png)' }}
			>
				{ rolledIds.length
					? <LeaderRolled rolledIds={rolledIds} onBack={() => setRolledIds([])} />
					: <LeaderSelection onRoll={setRolledIds} />
				}
			</main>
		</>
	);
};

export default Home;

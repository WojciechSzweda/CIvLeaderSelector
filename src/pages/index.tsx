import { type NextPage } from 'next';
import Head from 'next/head';
import LeaderCard from '../components/LeaderCard';
import { leaders } from '../leaders';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Civ 6 Leader Selector</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-center bg-cover p-7" style={{ backgroundImage: 'url(./background.png)' }}>
				<div className="grid grid-cols-4">
					{leaders.map(leader => <LeaderCard leader={leader} key={leader.name} />)}
				</div>
			</main>
		</>
	);
};

export default Home;

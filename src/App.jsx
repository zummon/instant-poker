import { useState, useEffect  } from 'react'

function App () {
	const [ deck, setDeck ] = useState([
		["A", "♠", "♠", true],
		[2, "♠", "♠\n\n♠", true],
		[3, "♠", "♠\n♠\n♠", true],
		[4, "♠", "♠ ♠\n\n♠ ♠", true],
		[5, "♠", "♠ ♠\n♠\n♠ ♠", true],
		[6, "♠", "♠ ♠\n♠ ♠\n♠ ♠", true],
		[7, "♠", "♠ ♠\n♠\n♠ ♠\n♠ ♠", true],
		[8, "♠", "♠ ♠\n♠\n♠ ♠\n♠\n♠ ♠", true],
		[9, "♠", "♠ ♠\n♠ ♠\n♠\n♠ ♠\n♠ ♠", true],
		[10, "♠", "♠ ♠\n♠\n♠ ♠\n♠ ♠\n♠\n♠ ♠", true],
		["J", "♠", "♜", true],
		["Q", "♠", "♛", true],
		["K", "♠", "♚", true],
		["A", "❤️", "❤️"],
		[2, "❤️", "❤️\n\n❤️"],
		[3, "❤️", "❤️\n❤️\n❤️"],
		[4, "❤️", "❤️ ❤️\n\n❤️ ❤️"],
		[5, "❤️", "❤️ ❤️\n❤️\n❤️ ❤️"],
		[6, "❤️", "❤️ ❤️\n❤️ ❤️\n❤️ ❤️"],
		[7, "❤️", "❤️ ❤️\n❤️\n❤️ ❤️\n❤️ ❤️"],
		[8, "❤️", "❤️ ❤️\n❤️\n❤️ ❤️\n❤️\n❤️ ❤️"],
		[9, "❤️", "❤️ ❤️\n❤️ ❤️\n❤️\n❤️ ❤️\n❤️ ❤️"],
		[10, "❤️", "❤️ ❤️\n❤️\n❤️ ❤️\n❤️ ❤️\n❤️\n❤️ ❤️"],
		["J", "❤️", "♜"],
		["Q", "❤️", "♛"],
		["K", "❤️", "♚"],
		["A", "♣", "♣", true],
		[2, "♣", "♣\n\n♣", true],
		[3, "♣", "♣\n♣\n♣", true],
		[4, "♣", "♣ ♣\n\n♣ ♣", true],
		[5, "♣", "♣ ♣\n♣\n♣ ♣", true],
		[6, "♣", "♣ ♣\n♣ ♣\n♣ ♣", true],
		[7, "♣", "♣ ♣\n♣\n♣ ♣\n♣ ♣", true],
		[8, "♣", "♣ ♣\n♣\n♣ ♣\n♣\n♣ ♣", true],
		[9, "♣", "♣ ♣\n♣ ♣\n♣\n♣ ♣\n♣ ♣", true],
		[10, "♣", "♣ ♣\n♣\n♣ ♣\n♣ ♣\n♣\n♣ ♣", true],
		["J", "♣", "♜", true],
		["Q", "♣", "♛", true],
		["K", "♣", "♚", true],
		["A", "♦️", "♦️"],
		[2, "♦️", "♦️\n\n♦️"],
		[3, "♦️", "♦️\n♦️\n♦️"],
		[4, "♦️", "♦️ ♦️\n\n♦️ ♦️"],
		[5, "♦️", "♦️ ♦️\n♦️\n♦️ ♦️"],
		[6, "♦️", "♦️ ♦️\n♦️ ♦️\n♦️ ♦️"],
		[7, "♦️", "♦️ ♦️\n♦️\n♦️ ♦️\n♦️ ♦️"],
		[8, "♦️", "♦️ ♦️\n♦️\n♦️ ♦️\n♦️\n♦️ ♦️"],
		[9, "♦️", "♦️ ♦️\n♦️ ♦️\n♦️\n♦️ ♦️\n♦️ ♦️"],
		[10, "♦️", "♦️ ♦️\n♦️\n♦️ ♦️\n♦️ ♦️\n♦️\n♦️ ♦️"],
		["J", "♦️", "♜"],
		["Q", "♦️", "♛"],
		["K", "♦️", "♚"]
	]);
	const [ players, setPlayers ] = useState([[], [], []])
	const [ host, setHost ] = useState([])

	function getter () {
		let randomNumber = Math.floor(Math.random() * deck.length);
		let [ card ] = deck.splice(randomNumber, 1);
		setDeck(deck)
		return card;
	}

	useEffect(() => {
		setHost([ getter(), getter(), getter() ])
		setPlayers( players.map(() => [ getter(), getter() ]) )
	}, []); 

	return (
		<>

<button className="text-white text-3xl rounded-lg bg-[#bf8659] px-2 py-1" onClick={() => { 
	setDeck([...deck, ...host, ...players.flatMap(elements => elements)]); 
	setHost([]); 
	setPlayers(players.map(() => [])); 
}}>Empty</button>

<div className="flex flex-wrap gap-2 p-2 justify-center cursor-default leading-none text-center text-xl">
	{host.map((card, index) => {
		return (
			<div key={'h'+index} className={`bg-white flex overflow-clip h-36 rounded ${card[3] ? '' : 'text-red-600'}`}>
				<div className="pl-1">
					<span className="font-bold">{card[0]}</span><br />
					<span className="">{card[1]}</span>
				</div>
				<div className="w-16 flex items-center justify-center">
					<span className={card[2].length === 1 ? 'text-5xl' : 'whitespace-pre'}>
						{card[2]}
					</span>
				</div>
				<div className="pr-1 pb-1 flex flex-col items-center justify-end">
					<span className="" >{card[1]}</span>
					<span className="font-bold" >{card[0]}</span>
				</div>
			</div>
		)
	})}
	{host.length < 5 && (
		<button className="text-4xl font-bold text-white w-16 border rounded border-dashed" onClick={() => { 
			setHost([ ...host, getter() ])
		}}>+</button>
	)}	
</div>

<div className="flex flex-wrap gap-4 p-2 justify-center">
	{players.map((player, index) => {
		return (
			<div key={index} className="rounded bg-[#00796b]">
				<button className="pl-2 text-white" onClick={() => {
					setDeck([ ...deck, ...player.map(element => element) ]); 
					players.splice(index, 1);
					setPlayers(players) 
				}}>PLAYER<span>{index + 1}</span>
				</button>
				<div className="flex gap-1 leading-none text-center text-xl">
					{player.map((card, indexSec) => {
						return (
							<div key={`${index}-${indexSec}`} className={`bg-white flex overflow-clip h-36 rounded cursor-default ${card[3] ? '' : 'text-red-600'}`}>
								<div className="pl-1">
									<span className="font-bold">{card[0]}</span><br />
									<span className="">{card[1]}</span>
								</div>
								<div className="w-16 flex items-center justify-center">
									<span className={card[2].length === 1 ? 'text-5xl' : 'whitespace-pre'}>{card[2]}</span>
								</div>
								<div className="pr-1 pb-1 flex flex-col items-center justify-end">
									<span className="">{card[1]}</span>
									<span className="font-bold">{card[0]}</span>
								</div>
							</div>
						)
					})}
					{player.length < 2 && (
						<button className="text-4xl font-bold text-white w-16 border rounded border-dashed" onClick={() => { 
							players[index].push(getter()); 
							setPlayers(players)
						}}>+</button>
					)}
				</div>
			</div>
		)
	})}
	{players.length < 8 && (
		<button className="text-4xl font-bold text-white w-32 border rounded border-dashed" onClick={() => { 
			setPlayers([ ...players, [] ])
		}}>+</button>
	)}
</div>

		</>
	)
}

export default App

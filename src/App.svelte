<script>
	import { onMount } from 'svelte'

	let deck = $state([
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
	let players = $state([[], [], []])
	let host = $state([])

	function getter () {
		let randomNumber = Math.floor(Math.random() * deck.length);
		let [ card ] = deck.splice(randomNumber, 1);
		return card;
	}

	onMount(() => {
		host = [ getter(), getter(), getter() ]
		players = players.map(() => [ getter(), getter() ])
	}); 

</script>

<button class="text-white text-3xl rounded-lg bg-[#bf8659] px-2 py-1" onclick={() => { 
	deck = [...deck, ...host, ...players.flatMap(elements => elements)]
	host = []
	players = players.map(() => [])
}}>New game</button>

<div class="flex flex-wrap gap-2 p-2 justify-center cursor-default leading-none text-center text-xl">
	{#each host as card, index ('h' + index)}
		<div class="bg-white flex overflow-clip h-36 rounded {card[3] ? '' : 'text-red-600'}">
			<div class="pl-1">
				<span class="font-bold">{card[0]}</span><br />
				<span class="">{card[1]}</span>
			</div>
			<div class="w-16 flex items-center justify-center">
				<span class={card[2].length === 1 ? 'text-5xl' : 'whitespace-pre'}>
					{card[2]}
				</span>
			</div>
			<div class="pr-1 pb-1 flex flex-col items-center justify-end">
				<span class="">{card[1]}</span>
				<span class="font-bold">{card[0]}</span>
			</div>
		</div>
	{/each}
	{#if host.length < 5}
		<button class="text-4xl font-bold text-white w-16 border rounded border-dashed" onclick={() => { 
			host.push( getter() )
		}}>+</button>
	{/if}
</div>

<div class="flex flex-wrap gap-4 p-2 justify-center">
	{#each players as player, index (index)}
		<div class="rounded bg-[#00796b]">
			<button class="pl-2 text-white" onclick={() => {
				deck = [ ...deck, ...player.map(element => element) ]
				players.splice(index, 1)
			}}>PLAYER<span>{index + 1}</span>
			</button>
			<div class="flex gap-1 leading-none text-center text-xl">
				{#each player as card, indexSec (`${index}-${indexSec}`)}
					<div class="bg-white flex overflow-clip h-36 rounded cursor-default {card[3] ? '' : 'text-red-600'}">
						<div class="pl-1">
							<span class="font-bold">{card[0]}</span><br />
							<span class="">{card[1]}</span>
						</div>
						<div class="w-16 flex items-center justify-center">
							<span class={card[2].length === 1 ? 'text-5xl' : 'whitespace-pre'}>{card[2]}</span>
						</div>
						<div class="pr-1 pb-1 flex flex-col items-center justify-end">
							<span class="">{card[1]}</span>
							<span class="font-bold">{card[0]}</span>
						</div>
					</div>
				{/each}
				{#if player.length < 2}
					<button class="text-4xl font-bold text-white w-16 border rounded border-dashed" onclick={() => { 
						players[index].push( getter() )
					}}>+</button>
				{/if}
			</div>
		</div>
	{/each}
	{#if players.length < 8}
		<button class="text-4xl font-bold text-white w-32 border rounded border-dashed" onclick={() => { 
			players.push( [] )
		}}>+</button>
	{/if}
</div>



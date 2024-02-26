<script>
  import {onMount} from 'svelte'

  let deck = [
    ['A','♠'],['2','♠'],['3','♠'],['4','♠'],['5','♠'],['6','♠'],['7','♠'],['8','♠'],['9','♠'],['10','♠'],['J','♠'],['Q','♠'],['K','♠'],
    ['A','♡'],['2','♡'],['3','♡'],['4','♡'],['5','♡'],['6','♡'],['7','♡'],['8','♡'],['9','♡'],['10','♡'],['J','♡'],['Q','♡'],['K','♡'],
    ['A','♣'],['2','♣'],['3','♣'],['4','♣'],['5','♣'],['6','♣'],['7','♣'],['8','♣'],['9','♣'],['10','♣'],['J','♣'],['Q','♣'],['K','♣'],
    ['A','♢'],['2','♢'],['3','♢'],['4','♢'],['5','♢'],['6','♢'],['7','♢'],['8','♢'],['9','♢'],['10','♢'],['J','♢'],['Q','♢'],['K','♢'],
  ]
  let host = []
  let players = [[],[],[]]

  const getter = () => {
    let randomNumber = Math.floor(Math.random() * deck.length)
    let [card] = deck.splice(randomNumber, 1)
    deck = deck
    return card
  }

  onMount(() => {
    host = [getter() ,getter(), getter()]
    players = players.map(() => [getter(), getter()])
  })
</script>

<button class="text-white text-3xl" on:click={() => {
  deck = [...deck, ...host, ...players.flatMap(elements => elements)]
  host = []
  players = players.map(() => [])
}}>Restart</button>

<div class="grid gap-2 p-2 grid-cols-5 min-w-[240px]">
  {#each host as card, index (`host-${index}`)}
    <div class="text-center bg-white flex flex-col overflow-clip cursor-default">
      <span class="{['♡','♢'].includes(card[1]) ? 'font-medium' : 'font-extrabold'} text-lg">{card[0]}</span>
      <span class="text-2xl">{card[1]}</span>
    </div>
  {/each}
  {#if host.length < 5}
    <div class="border text-center">
      <button class="text-4xl font-bold text-white" on:click={() => {
        let randomNumber = Math.floor(Math.random() * deck.length)
        host = [...host, getter()]
      }}>+</button>
    </div>
  {/if}
</div>

<div class="grid gap-4 p-2 grid-cols-4">
 {#each players as player, index (`player-${index}`)}
  <div class="grid gap-1 grid-cols-2">
    <div class="col-span-full text-white"><button class="" on:click={() => {
        deck = [...deck, ...player.map(element => element)]
        players.splice(index, 1)
        players = players
      }}>PLAYER{index + 1}</button></div>
    {#each player as card, indexSec (`player-${index}-${indexSec}`)}
      <div class="text-center bg-white flex flex-col overflow-clip cursor-default">
        <span class="{['♡','♢'].includes(card[1]) ? 'font-medium' : 'font-extrabold'} text-lg">{card[0]}</span>
        <span class="text-2xl">{card[1]}</span>
      </div>
    {/each}
    {#if player.length < 2}
      <div class="border text-center">
        <button class="text-4xl font-bold text-white" on:click={() => {
          let randomNumber = Math.floor(Math.random() * deck.length)
          player = [...player, getter()]
        }}>+</button>
      </div>
    {/if}
  </div>
  {/each}
  {#if players.length < 8}
    <div class="border text-center">
      <button class="text-4xl font-bold text-white" on:click={() => {
        players = [...players, []]
      }}>+</button>
    </div>
  {/if}
</div>

<div class="text-lime-800 absolute bottom-0 text-center">
	Made by zummon (Teerapat Anantarattanachai)<br />
  Something breaks, shows incorrect result. Let me know.
</div>
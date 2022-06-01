import { createResource, For, Match, Switch } from 'solid-js';
import './home.scss';
const fechData = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((response) => {
      return response.results;
    });
};
function Home() {
  const [getdata] = createResource(fechData, { initialValue: [] });
  return (
    <>
      <div class="containerHome">
        <Switch fallback={<div>Loading...</div>}>
          <Match when={getdata.error}>
            <div>Error</div>
          </Match>
          <Match when={getdata()}>
            <For each={getdata()}>
              {(ch) => (
                <div class="wrap">
                  <h3 class="name">{ch.name.slice(0, 16)} </h3>
                  <img src={ch.image} alt={ch.name} />
                </div>
              )}
            </For>
          </Match>
        </Switch>
      </div>
    </>
  );
}
export default Home;

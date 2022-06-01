import { createResource, createSignal, For, onCleanup, Show } from 'solid-js';
import './characterbyname.scss';
const fechData = (name) => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then((res) => res.json())
    .then((response) => {
      return response.results;
    });
};
function CharacterbyName() {
  const [data, setData] = createSignal('');
  const [getdata] = createResource(data, fechData, { initialValue: [] });
  onCleanup((data) => {
    data = '';
  });
  return (
    <>
      <div class="containercharacter">
        <h1>Find by Name</h1>
        <input
          min="1"
          type="text"
          value={data()}
          onInput={(e) => setData(e.target.value.toLowerCase())}
        />
        <Show when={data().length > 0}>
          <For each={getdata()}>
            {(get) => (
              <>
                <div class="card">
                  <div>{get.name}</div>
                  <img src={get.image} />
                </div>
              </>
            )}
          </For>
        </Show>
      </div>
    </>
  );
}
export default CharacterbyName;

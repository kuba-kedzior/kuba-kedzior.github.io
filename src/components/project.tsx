import { Component, createSignal, For, Match, Show, Switch } from "solid-js";

interface Props {
    title: string;
}
const Project: Component<Props> = (Props) => {
      const [cats, setCats] = createSignal([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ]);
    const [isCollapsed, setIsCollapsed] = createSignal(false);
    return (
        <div id="project" class="px-2 mx-auto" style={isCollapsed() ? "padding-bottom: 2rem;" : "padding-bottom: 0rem;"}>
            <div class="border-b-2 border-gray-400 flex flex-wrap items-end" onClick={() => setIsCollapsed(!isCollapsed())} style="cursor: pointer;">
                <h2 class="text-2xl font-bold">
                    <Switch fallback={<span class="px-2 py-1 bg-red-100 text-red-800 text-xs font-mono rounded m-1">Error</span>}>
                        <Match when={isCollapsed()} >
                            ➡️
                        </Match>
                        <Match when={!isCollapsed()} >
                            ⬇️
                        </Match>
                    </Switch>
                    {Props.title ? Props.title : "Project Title not set"}
                </h2>
                <For each={cats()}>{(cat, i) =>
                    <Switch fallback={<span class="px-2 py-1 bg-red-100 text-red-800 text-xs font-mono rounded m-1">Error</span>}>
                        <Match when={i() === 0} >
                            <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-mono rounded m-1">Github</span>
                        </Match>
                        <Match when={i() === 1} >
                            <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-mono rounded m-1">Rust</span>
                        </Match>
                    </Switch>
                }</For>
            </div>
            
            <Show when={!isCollapsed()}>
                <div class="flex flex-wrap items-center mb-4">
                    <img src="" alt="Project Image" class="mt-4 w-full h-auto rounded-lg max-w-5xl flex-[1_0_50%] min-w-80"/>
                    <p class="text-gray-700 flex-[5_0_50%] min-w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat est eu sagittis tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque euismod enim vel faucibus. Duis diam tellus, tristique quis odio ac, cursus pellentesque nulla. Sed ornare consequat sollicitudin. Sed ac purus id ex pellentesque finibus. Nunc sollicitudin ex at tortor feugiat tempor. Nullam maximus maximus eros a dignissim. Proin ullamcorper mi erat, sit amet varius erat pulvinar ac. Proin ut tellus ut augue dictum convallis. Fusce facilisis dolor augue, eget condimentum nulla efficitur at. Duis tempus nunc justo, in gravida nibh gravida vel. Vivamus viverra accumsan ullamcorper. Etiam dictum consectetur libero, tincidunt efficitur velit posuere vitae. Morbi iaculis sed risus vitae aliquam. Vestibulum ullamcorper justo quis libero volutpat, quis consectetur neque tempus. Vestibulum mattis orci metus, eu ullamcorper leo molestie vel. Nullam eu nunc suscipit, imperdiet felis ac, blandit mi. Sed lacinia efficitur tristique. Donec euismod eu nibh et cursus. Duis ornare ipsum quam, in porta lacus rutrum ac. Curabitur a eros nec tellus laoreet hendrerit. Cras sed cursus nulla, id facilisis dolor. Duis vulputate velit purus, eu dapibus risus suscipit quis. Integer in risus mauris. Vivamus elit urna, fermentum ut bibendum et, convallis a nisi. Sed vestibulum rutrum tellus in placerat. Sed facilisis risus tellus, quis vehicula eros suscipit in. Morbi a molestie libero, ut cursus massa.</p>
                    <img src="" alt="Project Image" class="mt-4 w-full h-auto rounded-lg max-w-5xl flex-[1_0_50%] min-w-80"/>
                    <img src="" alt="Project Image" class="mt-4 w-full h-auto rounded-lg max-w-5xl flex-[1_0_50%] min-w-80"/>
                    <img src="" alt="Project Image" class="mt-4 w-full h-auto rounded-lg max-w-10xl flex-[1_0_50%] min-w-80"/>
                </div>
            </Show>

        </div>
    );
}
export default Project;
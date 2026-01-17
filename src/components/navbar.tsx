import { createSignal, onMount } from "solid-js";

export default function Navbar() {
    const words = [["Home","/"],["About Me","/about"], ["Contact","/contact"]];

    let containerRef = undefined;
    let highlightRef = undefined;

    const [activeIndex, setActiveIndex] = createSignal(0);
    const [displayIndex, setDisplayIndex] = createSignal(0);

    const moveHighlight = (el: EventTarget & HTMLSpanElement) => {
        const rect = el.getBoundingClientRect();
        const containerRect = containerRef!.getBoundingClientRect();

        highlightRef!.style.width = `${rect.width}px`;
        highlightRef!.style.height = `${rect.height}px`;
        highlightRef!.style.left = `${rect.left - containerRect.left}px`;
        highlightRef!.style.bottom = `8px`;
    };

  return (
    <nav
      ref={containerRef}
      class="highlight-container flex flex-wrap border-b-2 border-gray-400 p-2 m-2"
    >
      <div ref={highlightRef} class="highlight" />
      {words.map((value, i) => (
        <>
            <a
            class="relative flex-basis-auto flex-grow-1 hover:flex-grow-2 p-2 font-semibold text-black word"
            
            classList={{ active: activeIndex() === i }}
            onclick={(e) => {
                setActiveIndex(i);
                moveHighlight(e.currentTarget);
            }}
            href={value[1]}
            >
            {value[0]}
            </a>
            <div class="bg-black w-0 p-0 g-0 border-r-2 border-gray-400">
            </div>
        </>
      ))}
    </nav>
  );
}
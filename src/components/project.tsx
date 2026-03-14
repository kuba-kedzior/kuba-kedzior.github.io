import { Component, createSignal, For, Match, Show, Switch } from "solid-js";

export interface ProjectImage {
    src: string;
    alt?: string;
}

export interface ProjectProps {
    title: string;
    skills?: string[];
    images?: ProjectImage[];
    thumbnails?: ProjectImage[];
    subheadings?: string[];
    descriptions?: string[];
    links?: { label: string; href: string }[];
}

const Project: Component<ProjectProps> = (props) => {

    return (
        <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">

            <h2 class="text-2xl font-bold flex items-center gap-2">
                {props.title}
            </h2>
            <div class="mt-6 grid gap-6">
                <Show when={props.skills?.length ?? 0 > 0}>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                            Skills
                        </h3>
                        <div class="mt-2 flex flex-wrap gap-2">
                            <For each={props.skills}>
                                {(skill) => (
                                    <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                                        {skill}
                                    </span>
                                )}
                            </For>
                        </div>
                    </div>
                </Show>
                <Show when={props.links?.length ?? 0 > 0}>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                            Links
                        </h3>
                        <div class="mt-2 flex flex-wrap gap-2">
                            <For each={props.links}>
                                {(link) => (
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded hover:bg-blue-200"
                                    >
                                        {link.label}
                                    </a>
                                )}
                            </For>
                        </div>
                    </div>
                </Show>
                <For each={props.thumbnails}>
                    {(image) => (
                        <img
                            src={image.src}
                            alt={image.alt ?? props.title}
                            class="w-full h-auto rounded-lg shadow-sm"
                        />
                    )}
                </For>
                <For each={props.subheadings}>
                    {(subheading, i) => (
                        <div>
                            <h3 class="text-lg font-semibold">{subheading}</h3>
                            <Show when={props.images?.length ?? 0 > i()}>
                                <img
                                    src={props.images?.[i()].src}
                                    alt={props.images?.[i()].alt ?? props.title}
                                    class="w-full h-auto rounded-lg shadow-sm"
                                />
                            </Show>
                            <p class="text-gray-700 mt-2 whitespace-pre-line">
                                {props.descriptions?.[i()] ?? ""}
                            </p>
                        </div>
                    )}
                </For>
            </div>
        </div>
    );
};

export default Project;

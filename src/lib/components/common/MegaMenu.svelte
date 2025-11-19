<script lang="ts">
  import { chunk } from "$lib/utils/chunk";
  import type { MegaMenu as MegaMenuType } from "$lib/types";
  import { getIcon } from "$lib/icons";

  export let menu: MegaMenuType | null;

  $: isOpen = !!menu;
</script>

{#if isOpen && menu}
  <div
    class={`absolute top-full flex left-0 w-full shadow-sm rounded-b-lg p-8 text-neutral-800 bg-neutral-100 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
  >
    <div
      class="flex w-full max-w-7xl mx-auto items-start justify-between gap-2 px-6"
    >
      <div class="grid grid-cols-2 gap-4 w-1/2" id="menulist">
        {#each menu.columns as column}
          <div>
            <h3 class="font-bold text-lg mb-4">{column.title}</h3>
            <div class="flex gap-6">
              {#each chunk(column.links, 5) as linkChunk, index}
                <ul class="space-y-4">
                  {#each linkChunk as link}
                    <li>
                      <a href={link.href} class="flex items-start gap-4">
                        <svelte:component
                          this={getIcon(link.icon)}
                          class="h-6 w-6 text-neutral-500"
                        />
                        <div>
                          <p class="font-semibold link-underline">
                            {link.title}
                          </p>
                          <p class="text-sm text-neutral-500">
                            {link.description}
                          </p>
                        </div>
                      </a>
                    </li>
                  {/each}
                </ul>
              {/each}
            </div>
          </div>
        {/each}
      </div>
      <div class="w-1/2 h-full" id="banner">
        {#each menu.banner as bannerItem}
          <div
            class="block h-full w-full relative rounded-lg overflow-hidden group"
          >
            <div class="relative flex h-full min-h-[300px]">
              <div class="flex items-end max-w-7xl w-full mx-auto">
                <section class="z-10 flex flex-col gap-4 p-6">
                  <span>
                    <p class="text-xl text-white mb-2">
                      {bannerItem.title}
                    </p>
                    <p class="text-lg text-white">
                      {bannerItem.description}
                    </p>
                  </span>
                  <a
                    href="/"
                    class="flex items-center font-medium px-4 py-2 bg-white w-fit rounded-full"
                  >
                    ดูเพิ่มเติม
                  </a>
                </section>
              </div>
              <img
                src={bannerItem.imageSrc}
                alt="Rinkai Industries Logo"
                width="100"
                height="100"
                class="absolute w-full h-full object-cover brightness-70"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"
              ></div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}

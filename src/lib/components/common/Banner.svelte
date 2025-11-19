<script lang="ts">
  export let title: string;
  export let description: string;
  export let imageSrc: string;
  export let href: string;
  export let buttonText: string;
</script>

<div class="relative flex h-[500px] w-full font-ibm">
  <div class="flex items-center max-w-7xl w-full mx-auto">
    <section class="z-10 flex flex-col gap-4 mt-16 p-6">
      <span>
        <h1 class="text-5xl text-white mb-2">{title}</h1>
        <p class="text-lg text-white">{description}</p>
      </span>
      <a
        {href}
        class="flex items-center font-medium px-4 py-2 bg-white w-fit rounded-full"
      >
        {buttonText}
      </a>
    </section>
  </div>
  <img
    width="1920"
    height="1080"
    sizes="100vw"
    src={imageSrc}
    alt={title}
    class="absolute w-full h-full object-cover brightness-70"
    fetchpriority="high"
  />
</div>

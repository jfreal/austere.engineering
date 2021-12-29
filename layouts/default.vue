<template>
  <div>
    <nav
      class="
        font-sans
        flex flex-col
        text-center
        sm:flex-row sm:text-left sm:justify-between
        bg-white
        shadow
        w-full
        items-center
        px-6
      "
    >
      <div class="sm:mb-0">
        <a
          href="/home"
          class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          <img src="~/assets/logo.png" class="w-12" />
        </a>
      </div>
      <div>
        <a
          href="/one"
          class="text-lg no-underline text-monkblue hover:text-blue-dark ml-2"
          >Why</a
        >
        <a
          href="/two"
          class="text-lg no-underline text-monkblue hover:text-blue-dark ml-2"
          >Contact</a
        >
      </div>
    </nav>
    <div class="max-w-lg mx-auto">
      <Nuxt />
    </div>
  </div>
</template>
<script lang="ts">
    import { page } from "$app/stores";

    const greetings: Record<string, string> = {
        en: "Hello, World!",
        fr: "Bonjour, le Monde!",
        es: "Hola, Mundo!",
        de: "Hallo, Welt!",
        it: "Ciao, Mondo!",
        ru: "Привет, Мир!",
        pl: "Witaj, świecie!",
        ja: "こんにちは、世界！",
        zh: "你好，世界！",
        ar: "مرحبا�� بكم في العالم!",
        tr: "Merhaba, Dünya!"
    };

    const {lang = "en"}: Record<string, string> = $page.params;
    const greeting: string = greetings[lang];

</script>

<h1>{greeting}</h1>
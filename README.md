# Comandos de instalação e observações

## Steps

### Criação do projeto

- `pnpm create vite@latest web`: Cria o projeto vite em uma pasta `web`
- `pnpm install`: Instala as dependências do projeto

### Limpeza do projeto

- Deletar `README.md`, `eslint.config.js`, `src/assets`, `src/App.css`
- Alterar `Index.html`
- Alterar `App.tsx` para `app.tsx` apagando todo o consteúdo

```ts
export function App() { // Export renomeado
  return (
    <h1>Hello World</h1>
  )
}
```

- Alterar `src/main.tsx`:

```ts
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- Limpo o conteúdo de `src/index.css`
- Deleto `public/favicon.svg` e `public/favicon.svg`

- `pnpm run dev` - Rodar projeto

### Instalação do Tailwindcss

- `pnpm install -D tailwindcss@3 postcss autoprefixer`: Instala o tailwindcss e as dependências
- `npx tailsindcss init -p`: criar setup
- Altero o consteudo do `tailwind.config.js`

```ts
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Adicionar no `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

 Desativar o lint do css e habilitar o intelisense do tailwind:

```json
// .vscode/settings.json

{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "tailwindCSS.validate": true
}
```

### Instalação da font Inter

- Acessar [https://fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter)
- Adicionar ao `index.html`:

```html
<head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Upload Widget</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
      rel="stylesheet"
    />
  </head>
```

- Alterar as fonts em `tailwind.config.js`

```js
import { theme } from 'tailwindcss/defaultConfig'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...theme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
```

- No `index.html` adiciona classes ao body:

```html
<body class="antialiased bg-zinc-950 text-white">
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

### Estrutura do Widget

- Componentes criados em `src/components`
- Instalação do pacote de ícones: `pnpm i lucide-react`

### Botão e Widget Colapsável

- Cria uma pasta `ui` dentro de `components`
- Cria um component `button.tsx`
- Adiciona a dependência `pnpm i tailwind-variants`
- Adiciona a dependência do tailwind-variants: `pnpm i tailwind-merge`
- Uso da variant:

```ts
import type { ComponentProps } from "react";
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'text-zinc-400 rounded-lg hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    size: {
      default: 'px-3 py-2',
      icon: 'p-2',
      'icon-sm': 'p-1'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

export function Button({ size, className, ...props }: ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return (
    <button className={buttonVariants({ size, className })} {...props} />
  )
}
```

- Para a funcionalidade de colapsar: `pnpm i @radix-ui/react-collapsible`
- 
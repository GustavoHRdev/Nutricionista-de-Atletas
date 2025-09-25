# Nutricionista Lyncon Gabriel

Site profissional para divulgação dos serviços do Nutricionista de atletas Lyncon Gabriel, desenvolvido com React + Vite + Tailwind CSS.

## Demonstração

Acesse: []()

## Funcionalidades

- Layout responsivo e moderno
- Gradiente personalizado (vermelho, laranja, amarelo)
- Menu fixo e navegação suave
- Seção de serviços
- Depoimentos animados com prints de clientes
- Formulário de contato funcional
- Botão WhatsApp fixo
- Footer com redes sociais

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Instalação e uso local

```bash
git clone https://github.com/gustavohrdev/Nutricionista-Lyncon-Gabriel.git
cd Nutricionista-Lyncon-Gabriel
npm install
npm run dev
```

## Deploy no GitHub Pages

1. Gere o build:
   ```bash
   npm run build
   ```
2. Configure o arquivo `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/Nutricionista-Lyncon-Gabriel/',
   })
   ```
3. Suba o conteúdo da pasta `dist` para o GitHub Pages.

## Estrutura do projeto

```
src/
  assets/           # Imagens e prints dos clientes
  components/       # Componentes React
  App.jsx           # Componente principal
  index.css         # Estilos globais
  main.jsx          # Entrada do React
vite.config.js      # Configuração do Vite
```

## Personalização

- Para adicionar prints de clientes, coloque as imagens na pasta `src/assets` e edite o componente `TestimonialsSection.jsx`.
- Para alterar textos e serviços, edite os componentes correspondentes em `src/components`.

## Licença

Este projeto é apenas para fins de demonstração e portfólio.
